var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req,res,next) => {
  console.log('we are handling the request')
  req.mynote='demo'
  next() 
})

app.get('/', (req, res, next) => {
  res.render('index');
});

app.get('/info', (req,res,next)=> {
  res.locals.time = Date()
  res.locals.owner="Tim Hickey"
  res.locals.age=67
  res.render('info')
})

app.post('/getData',(req,res,next) => {
  console.dir(req.body)
  res.json(req.body)
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
