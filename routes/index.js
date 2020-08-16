var express = require('express');
var router = express.Router();
var averages = require('../controllers/averages.js');

/* GET weather listing. */
router.get('/', function (req, res, next) {
    const location_req = req;
    averages.getAverages(location_req).then((result)=>res.json(result))
});

module.exports = router;

// TODO(MFB): Store apikey instead of hard-coding it.
// TODO(MFB): Errors out appropriately
// TODO(MFB): Documentation
// TODO(MFB): Make tests

// TODO(MFB): Set up on Heroku.


/*
Location Response:
[
    {
        "Version": 1,
        "Key": "40872_PC",
        "Type": "PostalCode",
        "Rank": 45,
        "LocalizedName": "Hillsboro",
        "EnglishName": "Hillsboro",
        "PrimaryPostalCode": "97124",
        "Region": {
            "ID": "NAM",
            "LocalizedName": "North America",
            "EnglishName": "North America"
        },
        "Country": {
            "ID": "US",
            "LocalizedName": "United States",
            "EnglishName": "United States"
        },
        "AdministrativeArea": {
            "ID": "OR",
            "LocalizedName": "Oregon",
            "EnglishName": "Oregon",
            "Level": 1,
            "LocalizedType": "State",
            "EnglishType": "State",
            "CountryID": "US"
        },
        "TimeZone": {
            "Code": "PDT",
            "Name": "America/Los_Angeles",
            "GmtOffset": -7,
            "IsDaylightSaving": true,
            "NextOffsetChange": "2020-11-01T09:00:00Z"
        },
        "GeoPosition": {
            "Latitude": 45.569,
            "Longitude": -122.949,
            "Elevation": {
                "Metric": {
                    "Value": 88,
                    "Unit": "m",
                    "UnitType": 5
                },
                "Imperial": {
                    "Value": 288,
                    "Unit": "ft",
                    "UnitType": 0
                }
            }
        },
        "IsAlias": false,
        "ParentCity": {
            "Key": "335258",
            "LocalizedName": "Hillsboro",
            "EnglishName": "Hillsboro"
        },
        "SupplementalAdminAreas": [
            {
                "Level": 2,
                "LocalizedName": "Washington",
                "EnglishName": "Washington"
            }
        ],
        "DataSets": [
            "AirQualityCurrentConditions",
            "AirQualityForecasts",
            "Alerts",
            "DailyAirQualityForecast",
            "DailyPollenForecast",
            "ForecastConfidence",
            "FutureRadar",
            "MinuteCast",
            "Radar"
        ]
    }
]

*/