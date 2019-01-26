var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require('./models/User');

passport.use(new GoogleStrategy({
    clientID: "516779201699-iqcfs2jucudj6kp9la3fovngmucpst39.apps.googleusercontent.com",
    clientSecret: "RUOSMQVfzXP6uCpziqZ5vdVk",
    callbackURL: "http://127.0.0.1:3000/auth/google/callback"
},
    function (accesToken, regreshToken, profile, done) {
        User.findOrCreate({userId: profile.id},
            {name: profile.displayName},
            {userId: profile.id},
            function (err, user) {
                return done(err, user)
            })
    }));

module.exports = passport;