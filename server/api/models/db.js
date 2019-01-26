var mongoose = require('mongoose');
var readline = require('readline');

const db = "mongodb://localhost:27017/usersdb";
mongoose.connect(db);

mongoose.connection.on('connected', function () {
    console.log("Mongoose connected to: " + db);
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

// const MongoClient = require("mongodb").MongoClient;

// const url = "mongodb://localhost:27017/";
// const mongoClient = new MongoClient(url, { useNewUrlParser: true });
//
// mongoClient.connect(function(err, client){
//
//     const db = client.db("usersdb");
//     const collection = db.collection("users");
//     let user = {name: "Tom", age: 23};
//     collection.insertOne(user, function(err, result){
//
//         if(err){
//             return console.log(err);
//         }
//         console.log(result.ops);
//         client.close();
//     });
// });