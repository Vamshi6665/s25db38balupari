var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var hybridCarsRouter = require('./routes/hybridcars');
var gridRouter = require('./routes/grid');
var pickRouter = require('./routes/pick');
var hybridcars = require("./models/hybridcars");
var resourceRouter = require("./routes/resource");

require('dotenv').config();
const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString);

// We can seed the collection if needed on server start
async function recreateDB(){
// Delete everything
await hybridcars.deleteMany();
let instance1 = new hybridcars({name: "Toyota Prius", mileage_mpg: 56, type: "Hybrid"});
instance1.save().then(doc=>{
console.log("First object saved")}).catch(err=>{
console.error(err)});

let instance2 = new hybridcars({name: "Honda Insight", mileage_mpg: 55, type: "Hybrid"});
instance2.save().then(doc=>{
console.log("Second object saved")}).catch(err=>{
console.error(err)});

let instance3 = new hybridcars({name:"Ford Fusion Hybrid", mileage_mpg: 42, type: "Hybrid"});
instance3.save().then(doc=>{
console.log("third object saved")}).catch(err=>{
console.error(err)});

}

let reseed = true;
if (reseed) {recreateDB();}



var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/hybridcars', hybridCarsRouter);
app.use('/grid', gridRouter);
app.use('/pick', pickRouter);
app.use('/resource', resourceRouter);

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

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

module.exports = app;
