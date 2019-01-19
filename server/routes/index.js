var express = require('express');
var router = express.Router();
var controller = require('../routes/index');

/* GET home page. */



router.get('/', function (req, res) {
    res.render('index', {title: 'Index'})
});

module.exports = router;
