// import fetch from 'node-fetch';
// import locations from './locations';
var locations = require('./locations.js');

// import weather from './weather';
var weather = require('./weather.js');
var math_helper = require('../helpers/math_helper');


// import { mean, median, mode} from '../helpers/math';
// import { paramStringFromObject } from '../helpers/http';

// TODO(MFB): data isNotEmpty?

const requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

exports.getAverages = (location_req) => {
    return locations.getLocations(location_req).then((locationsResults) => {
        return weather.getWeather(locationsResults[0].Key).then((weatherResults) =>{
            return {
                averages: [{math: 'goes here!'}],
                location: locationsResults,
                weather: weatherResults
            }
        })
    })
}
