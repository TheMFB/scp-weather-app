import React from 'react';
import { shallow } from 'enzyme';

import WeatherApp from '../WeatherApp';

describe('WeatherApp Component', () => {
    const stubs = {};
    const props = {
        weatherData: {}
    };

    describe('Display', () => {
        it('should render without crashing', () => {
            shallow(<WeatherApp {...props} />);
        });

        it('should display properly', () => {
            const wrapper = shallow(<WeatherApp {...props} />);
            expect(wrapper.text().includes('Weather App!')).toBe(true);
            expect(wrapper.html().includes('<div class="MuiAvatar-root MuiAvatar-circle brightness-icon MuiAvatar-colorDefault" style="background-color:#3f51b5">')).toBe(true);
        });
    });
});
