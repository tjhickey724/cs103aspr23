var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const layouts = require("express-ejs-layouts");



const User = require('./models/User')

const mongodb_URI = 'mongodb://127.0.0.1:27017/pwdemo';
const mongoose = require( 'mongoose' );

mongoose.connect( mongodb_URI);

const db = mongoose.connection;


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we are connected!!!")
});

const pw_auth_router = require('./routes/pwauth')

const session = require("express-session"); // to handle sessions using cookies 
var MongoDBStore = require('connect-mongodb-session')(session);

const store = new MongoDBStore({
  uri: mongodb_URI,
  collection: 'mySessions'
});

// Catch errors                                                                      
store.on('error', function(error) {
  console.log(error);
});




var app = express();

app.use(session({
  secret: 'This is a secret',
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week                                        
  },
  store: store,
  // Boilerplate options, see:                                                       
  // * https://www.npmjs.com/package/express-session#resave                          
  // * https://www.npmjs.com/package/express-session#saveuninitialized               
  resave: true,
  saveUninitialized: true
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




app.use(pw_auth_router)
app.use(layouts);

app.get('/', (req,res,next) => {
  res.render('index');
})

app.get('/about', (req,res,next) => {
  res.render('about');
})



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
