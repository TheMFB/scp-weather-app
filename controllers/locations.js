// import fetch from 'node-fetch';
var fetch = require('node-fetch');
var http_helper = require('../helpers/http_helper');

const apiKey = 'KA4ZarG8l51ftA2mMvKT31uxoEbjq6tQ'

const host = 'http://dataservice.accuweather.com/';
const locationPath = 'locations/v1/postalcodes/search';

// TODO(MFB): data isNotEmpty?

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

// TODO(MFB): Add rejects

exports.getLocations = (req) => {
    return new Promise((resolve, reject) => {
        const locationData = {
            apikey: apiKey,
            q: req.query.zip
        };

        const locationParamString = locationData ? http_helper.paramStringFromObject(locationData) : '';

        fetch(`${host}${locationPath}${locationParamString}`, requestOptions)
            .then(locations => {
                return resolve(locations.json())
            })
    })
}