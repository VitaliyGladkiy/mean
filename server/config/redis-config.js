var redis = require('redis');
var session = require('express-session');
var redisStore = require('connect-redis')(session);

var redisClient = redis.createClient();
module.exports = session({
    secret: 'ssshhhhh',
    store: new redisStore({ host: 'localhost', port: 6379, client: redisClient,ttl :  260}),
    saveUninitialized: false,
    resave: false
});