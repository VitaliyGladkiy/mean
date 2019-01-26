var service = require('./googleMapService');

module.exports.placeSearch  = function (req, res) {
    let coordinate = "49.0607804,33.4036164";
    service.callService(coordinate,response => {
       res.send(JSON.parse(response)["results"])
    });
};