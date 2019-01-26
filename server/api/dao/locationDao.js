var models = require('../models/locations');
var mongoose = require('mongoose');
const locModel = mongoose.model('Location', models.Location);

module.exports.findAll = function () {

    return locModel.find({}, function (err, items) {
        return items
    } )
};

module.exports.create = function () {
    const item = {
            name: "name",
            adress: "Address",
            rating: 2,
            facilies: ['1','2'],
            ciirds: 1,
            openingTimes: [],
            reviews: []
    };
    const locationObj = new locModel(item);

    locationObj.save().then( ()=> console.log('saved'));
};