var express = require('express');
var router = express.Router();

/* GET weather listing. */
router.get('/', function(req, res, next) {
  console.log('---- indexRouter');
	// Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.json({
  	mean: 1,
    median: 4,
    mode: 4
  });
});

module.exports = router;

// TODO(MFB): Store this key instead of hard-coding it.
// API Key:
// KA4ZarG8l51ftA2mMvKT31uxoEbjq6tQ

// TODO(MFB): Sends request out for zip. Gets back location information
// TODO(MFB): Sends followup for weather data Forecast API
// TODO(MFB): Returns both requests.
// TODO(MFB): Errors out appropriately
// TODO(MFB): Documentation
// TODO(MFB): Make tests

// TODO(MFB): Set up on Heroku.