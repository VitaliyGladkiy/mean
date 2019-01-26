var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
    author: String,
    rating: {type: Number, required: true, min: 0, max: 5},
    reviewTeext: String,
    create: {type: Date, default: Date.now()}
});

var openingTimeSchema = new mongoose.Schema({
    days: {type: String, required: true},
    opening: String,
    closing: String,
    closed: { type: Boolean, required: true}
});

var locationSchema = new mongoose.Schema({
    name: {type: String, required: true},
    adress: String,
    rating: {type: Number, "default": 0, min: 0, max: 5},
    facilies: [String],
    ciirds: {type:[Number], index: '2dsphere'},
    openingTimes: [openingTimeSchema],
    reviews: [reviewSchema]
});


module.exports.Location = {
    openingTimeSchema: openingTimeSchema,
    reviewSchema: reviewSchema,
    locationSchema: locationSchema
}