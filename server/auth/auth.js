var express = require('express');
var router = express.Router();
var passportGoogle = require('./google');


router.get('/login', function (req, res, next) {
    console.log('go to login');
    res.render('', { title: 'Please Sign IN' });
});

router.get('/logout', function (req, res) {
   req.logout();
   res.redirect('/');
});

router.get('/google',
    passportGoogle.authenticate('google', { scope: 'https://www.google.com/m8/feeds' }));


module.exports = router;