/**
 * Created by Peter on 2/04/2016.
 * version 1.0.0
 */

///////   Set up   ///////
var express  = require('express');
var app      = express();
var compression = require('compression');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var prerender = require('prerender-node');

var oneDay = 86400000;

///////   Configuration    ///////

// connect to mongoDB database 
mongoose.connect('mongodb://localhost:27017');


app.use(compression());
app.use(express.static(__dirname + '/public', {maxAge: oneDay}));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));            
app.use(bodyParser.json());                                 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(methodOverride());
app.use(prerender);

///////   Routes   ///////
var todo = require('./app/routes/todoRoutes.js');
app.use('/', todo);

/////// Listen Start app with node server.js   ///////
app.listen(8080);
console.log("App listening on port 8080");