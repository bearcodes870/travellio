var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('trips/index', { title: 'Travellio' });
});

module.exports = router;
