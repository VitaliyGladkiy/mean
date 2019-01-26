var dao = require('../dao/locationDao');

module.exports.locationByDistace = function(req, res) {
    dao.findAll().then(respose => {
        const obj = {
            name: "location by distace",
            items: respose
        };
        res.send(obj)
    });
};

module.exports.create = function(req, res){
    const obj = dao.create();
    res.send(JSON.stringify(obj))
};

module.exports.locationById = function(req, res){
    const id  = req.params.id;
    const obj = {
        name: "location by id",
        i: id
    };

    res.send(JSON.stringify(obj))
};

module.exports.deleteLOcation = function(req, res){

    const id  = req.params.id;
    const obj = {
        name: "delete location",
        i: id
    };

    res.send(JSON.stringify(obj))
};
module.exports.addReview = function(req, res){
    const obj = {
        name: "add review"
    };
    res.send(JSON.stringify(obj))
};
