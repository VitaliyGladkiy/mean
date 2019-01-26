var expres = require('express');
var router = expres.Router();

var ctrlLocations = require('../../api/controller/locationController');
var ctrlRewiws = require('../../api/controller/reviwController');

router.get('/locations', ctrlLocations.locationByDistace);
router.post('/locations', ctrlLocations.create);
router.get('/locations/:id', ctrlLocations.locationById);
router.delete('/locations/:id', ctrlLocations.deleteLOcation);

router.post('/locations/:id/reviews', ctrlLocations.addReview);
router.get('/locations/:id', ctrlRewiws.revieById);
router.put('/locations/:id/reviews/:review_id', ctrlRewiws.updateOne);
router.delete('/locations/:id/reviews/:review_id', ctrlRewiws.deleteOne);

module.exports = router;
