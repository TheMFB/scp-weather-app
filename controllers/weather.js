// import fetch from 'node-fetch';
var fetch = require('node-fetch');

const apiKey = 'KA4ZarG8l51ftA2mMvKT31uxoEbjq6tQ'
const host = 'http://dataservice.accuweather.com/';

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

exports.getWeather = (locationKey) => {
    return new Promise((resolve, reject) => {
        const weatherPath = `forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}`;
        return fetch(`${host}${weatherPath}`, requestOptions)
            .then(weather => {
                return resolve(weather.json())
            })
            .catch(error => reject(error));
    })
}