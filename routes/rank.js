var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('rank', { title: 'rank' });
});

module.exports = router;
