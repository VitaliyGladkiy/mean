var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', ensureAuthenticated, function(req, res, next) {
    res.render('user', { user: req.user });
});
router.get('/login', function (req, res, next) {
    console.log('go to login');
    res.render('login', { title: 'Please Sign IN' });
});

router.get('/about', function (req, res) {
    res.render('index', {title: 'About'})
});

router.get('/more', function (req, res) {
    res.render('index', {title: 'More'})
});
function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/login')
}
module.exports = router;
