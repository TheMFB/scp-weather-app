import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
    Button,
    TextField,
} from '@material-ui/core';

const WeatherForm = ({
    setWeather
}) => {
    const [zip, setZip] = useState(null);

    const paramStringFromObject = params => {
        const searchParams = new URLSearchParams();

        for (const key of Object.keys(params)) {
            searchParams.set(key, params[key]);
        }

        return `?${searchParams.toString()}`;
    };


    const getWeather = () => {
        const data = {
            zip: zip
        };
        const host = 'https://scp-weather-server.herokuapp.com:5000/';
        const path = '';


        const paramString = data ? paramStringFromObject(data) : '';
        console.log('---- `${host}${path}${paramString}`:', `${host}${path}${paramString}`);
        console.log('---- ${path}:', `${path}`);
        console.log('---- ${paramString}`:', `${paramString}`);

        fetch(`${host}${path}${paramString}`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(weather => setWeather({ weather: weather.averages }))
            .catch((e) => console.log('Uh oh!', e))
    }

    return (
        <>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="zip"
                label="Zip Code"
                id="zip"
                onChange={(e) => setZip(e.target.value)}
                autoComplete="zip-code"
            />
            <Button
                id="weather-btn"
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={() => getWeather()}
                disabled={!(zip && zip.length === 5)}
                className=""
            >
                Submit Zip Code
            </Button>
        </>
    );
};

WeatherForm.propTypes = {
    setWeather: PropTypes.func.isRequired
};

export default WeatherForm;