var express = require('express');
var router = express.Router();
var controller = require('./serviceController');

router.get('/service', controller.placeSearch);
module.exports = router;