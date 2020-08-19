import React, { useState } from 'react';
import { indigo } from '@material-ui/core/colors';

import {
    Avatar,
    Typography
} from '@material-ui/core/';
import BrightnessIcon from '@material-ui/icons/WbSunny';

import WeatherForm from './WeatherForm';
import WeatherDisplay from './WeatherDisplay';

const WeatherApp = () => {
    const [weather, setWeather] = useState({});
    const setWeatherCallback = (weatherData) => {
        setWeather(weatherData);
    }

    return (
        <div className="weather-view">
            <Avatar className="brightness-icon" style={{ backgroundColor: indigo[500] }} >
                <BrightnessIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Weather App!
            </Typography>
            <WeatherForm
                setWeather={(data) => setWeatherCallback(data)}
            />
            <WeatherDisplay
                weatherData={weather}
            />
        </div>
    );
};

export default WeatherApp;