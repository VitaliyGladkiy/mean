var expres = require('express');
var router = expres.Router();
var controller = require('../auth/authController');

router.get('/login/:key', controller.login);
router.get('/logout', controller.logout);
router.post('/register', controller.register);
router.get('/auth-check', controller.check);
module.exports = router;