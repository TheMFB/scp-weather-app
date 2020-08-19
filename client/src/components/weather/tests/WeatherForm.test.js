import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import 'whatwg-fetch';

import WeatherForm from '../WeatherForm';

describe('WeatherForm Component', () => {
    const stubs = {};
    const props = {
        setWeather: jest.fn()
    };

    const jsonOk = (body) => {
        var mockResponse = new window.Response(JSON.stringify(body), {
            status: 200,
            headers: {
                'Content-type': 'application/json'
            }
        });

        return Promise.resolve(mockResponse);
    }

    beforeEach(() => {
        stubs.fetch = sinon.stub(window, 'fetch');
        stubs.fetch.onCall(0).returns(jsonOk({ averages: '5' }));
    });

    afterEach(() => {
        window.fetch.restore();
    });


    describe('Display', () => {
        it('should render without crashing', () => {
            shallow(<WeatherForm {...props} />);
        });

        it('should display properly and ', () => {
            const wrapper = shallow(<WeatherForm {...props} />);
            expect(wrapper.text().includes('Submit Zip Code')).toBe(true);
            const btn = wrapper.find('#weather-btn');
            const zip = wrapper.find('#zip');
            zip.simulate('change', { target: { value: '97124' } });
            btn.simulate('click');
            expect(stubs.fetch.called).toBeTruthy();
        });
    });
});
