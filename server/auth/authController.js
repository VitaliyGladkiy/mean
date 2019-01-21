module.exports.login = function (req, res) {
    console.log('request body: ' + req.params.key);
    req.session.key = req.params.key;
    res.end('success');
};

module.exports.logout = function (req, res) {
    req.session.destroy(function (err) {
        if(err){
            console.log(err)
        }
        else {
            res.end('log out success')
        }
    })
};

module.exports.register = function (req, res) {

};

module.exports.check = function (req, res) {
  console.log('my session ID: ' + req.session.key);
    res.send('my session ID: ' + req.session.key);
};