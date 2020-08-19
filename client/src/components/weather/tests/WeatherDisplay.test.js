import React from 'react';
import { shallow } from 'enzyme';

import WeatherDisplay from '../WeatherDisplay';

describe('WeatherDisplay Component', () => {
    const stubs = {};
    const props = {
        weatherData: {}
    };

    describe('Display', () => {
        it('should render without crashing', () => {
            shallow(<WeatherDisplay {...props} />);
        });

        it('should not display a table with no data', () => {
            const wrapper = shallow(<WeatherDisplay {...props} />);
            expect(wrapper.text().includes('Find the averages for the next few days.')).toBe(true);
        });

        it('should generate proper table', () => {
            const fullProps = {
                weatherData: {
                    weather: {
                        low: {
                            mean: 55.2,
                            median: 55,
                            mode: [58]
                        },
                        mid: {
                            mean: 69,
                            median: 69,
                            mode: [69]
                        },
                        high: {
                            mean: 82.8,
                            median: 84,
                            mode: [80, 85]
                        }
                    }
                }
            }
            const wrapper = shallow(<WeatherDisplay {...fullProps} />);
            expect(wrapper.html().includes('<table class="MuiTable-root weather-table" aria-label="weather averages table">')).toBe(true);
            expect(wrapper.text().includes(`MeanMedianModelow55.255•58mid6969•69high82.884•80•85`)).toBe(true);
        });
    });
});
