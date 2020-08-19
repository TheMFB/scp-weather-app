import React from 'react';
import PropTypes from 'prop-types';

import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@material-ui/core';

const WeatherDisplay = ({
    weatherData
}) => {
    const rows = [
        'low', 'mid', 'high'
    ]

    const formatMode = (mode) => {
        if (typeof mode !== "object") return mode;
        return mode.map((item) => {
            return (<div key={item}>•{item}</div>)
        });
    }

    return (
        <div>
            {weatherData.weather && weatherData.weather.low ? (
                <TableContainer component={Paper}>
                    <Table className="weather-table" aria-label="weather averages table">
                        <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell align="right">Mean</TableCell>
                                <TableCell align="right">Median</TableCell>
                                <TableCell align="right">Mode</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row}>
                                    <TableCell component="th" scope="row">
                                        <strong>{row}</strong>
                                    </TableCell>
                                    <TableCell align="right">{weatherData.weather[row].mean}</TableCell>
                                    <TableCell align="right">{weatherData.weather[row].median}</TableCell>
                                    <TableCell align="right">{formatMode(weatherData.weather[row].mode)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            ) : (
                    <Typography component="h1" variant="caption">
                        Find the averages for the next few days.
                    </Typography>
                )}
        </div>
    );
};

WeatherDisplay.propTypes = {
    weatherData: PropTypes.object,
};

export default WeatherDisplay;