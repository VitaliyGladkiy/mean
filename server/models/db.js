var mongoose = require('mongoose');
var readline = require('readline');


var dbUrl = "http://localhost:27027/db_mean";
mongoose.connect(dbUrl);

mongoose.connection.on('connected', function () {
    console.log("Mongoose connected to: " + dbUrl);
});

mongoose.connection.on('error', function () {
    console.log("Mongoose connect ERROR")
});

mongoose.connection.on('disconncted', function () {
    console.log("Mongoose connection closed")
});


if(process.platform === "win32"){
    var r1 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    r1.on("SIGINT", function () {
        process.emit("SIGINT");
    });
}

var gracefulShutdown = function (msg, callback) {
    mongoose.connection.close(function () {
        console.log('Mongoose disconnected through ' + msg);
        callback();
    })
};

process.once('SIGUSR2', function () {
    gracefulShutdown('nodemon restasrt', function () {
        process.exit(0);
    })
});

process.on('SIGINT', function () {
    gracefulShutdown('app terminated', function () {
        process.exit(0)
    })
});

process.on('SIGTERM', function () {
    gracefulShutdown('Heroku app shutdown', function () {
        process.exit(0)
    })
});

require('./locations');