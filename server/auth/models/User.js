var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: String,
    userId: String,
    updated_at: {type: Date, default: Date.now },
});

UserSchema.statics.findOrCreate = require("find-or-create");
module.exports = mongoose.model('User', UserSchema);