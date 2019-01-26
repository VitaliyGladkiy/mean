var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./server/models/db');
var redisSession = require('./server/config/redis-config');
var indexRouter = require('./server/routes');
var usersRouter = require('./server/routes/users');
var ctrLocations = require('./server/controllers/locations/locations');
var ctrOther = require('./server/controllers/others/other');
var authRouter = require('./server/auth/authRouter');
var serviceCtrl = require('./server/service/serviceController');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, './server/views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(redisSession);

app.use(indexRouter);
app.use(usersRouter);
app.use(authRouter);
app.use('/service', serviceCtrl.placeSearch);
app.use('/location/all', ctrLocations.homeList);
app.use('/location/add', ctrLocations.addReview);
app.use('/location/info', ctrLocations.locationInfo);
app.use('/about', ctrOther.about);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
