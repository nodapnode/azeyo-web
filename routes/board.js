var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '',
  database : 'cost'
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  connection.query('SELECT * FROM contents', function(err, rows, fields) {
    if (err) throw err;
    res.send(rows);
  });
});

module.exports = router;
