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
    console.log('---- weatherData:', weatherData);

    return (
        <div style={{'paddingTop':'10px'}}>
            {weatherData.weather && weatherData.weather.low ? (
                <>
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
                    {weatherData.error_message === 'max_requests_exceeded' && (
                        <Typography component="h1" variant="subtitle2" color="error">
                            * The 24-hour request limit for this account was exceeded. The above is sadly mock data. Please wait or trust me.
                        </Typography>
                    )}
                </>
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