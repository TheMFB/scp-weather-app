var locations = require('./locations.js');
var weather = require('./weather.js');
var math_helper = require('../helpers/math_helper');

// TODO(MFB): data isNotEmpty?
// TODO(MFB): Install lodash.
const formatWeather = (weather) => {
    const weatherLowReduced = weather.DailyForecasts.reduce((acc, item) => [...(acc || []), item.Temperature.Minimum.Value], []);
    const weatherMidReduced = weather.DailyForecasts.reduce((acc, item) => [...(acc || []), (item.Temperature.Minimum.Value + item.Temperature.Maximum.Value)/2], []);
    const weatherHighReduced = weather.DailyForecasts.reduce((acc, item) => [...(acc || []), item.Temperature.Maximum.Value], []);

    return {
        low: {
            mean: math_helper.mean(weatherLowReduced),
            median: math_helper.median(weatherLowReduced),
            mode: math_helper.mode(weatherLowReduced)
        },
        mid: {
            mean: math_helper.mean(weatherMidReduced),
            median: math_helper.median(weatherMidReduced),
            mode: math_helper.mode(weatherMidReduced)
        },
        high: {
            mean: math_helper.mean(weatherHighReduced),
            median: math_helper.median(weatherHighReduced),
            mode: math_helper.mode(weatherHighReduced)
        }
    }
}

exports.getAverages = (location_req) => {
    return locations.getLocations(location_req).then((locationsResults) => {
        if (!locationsResults || !locationsResults[0] || !locationsResults[0].Key) return;
        return weather.getWeather(locationsResults[0].Key).then((weatherResults) =>{
            if (!weatherResults || !weatherResults.DailyForecasts) return;
            return {
                averages: formatWeather(weatherResults),
                location: locationsResults,
                weather: weatherResults
            }
        })
    })
}
