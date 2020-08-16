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

