var request = require('request');
function callService (coordinate, func) {

   let apiKey =  "AIzaSyDyCt9bxaZkOvmCDFQUg-5b_meOYI_KWFk";
   let apiRequestUrl = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + coordinate + "&radius=10&key=" + apiKey;

   request(apiRequestUrl, function (error, response, body) {
      func(body)
   });
}
module.exports.callService = callService;