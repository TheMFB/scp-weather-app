var express = require('express');
var router = express.Router();

/* GET weather listing. */
router.get('/', function(req, res, next) {
  console.log('---- weatherRouter');
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