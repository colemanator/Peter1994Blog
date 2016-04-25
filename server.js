/**
 * Created by Peter on 2/04/2016.
 * version 1.0.0
 */

///////   Set up   ///////
var express  = require('express');
var app      = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

///////   Configuration    ///////
mongoose.connect('mongodb://localhost:27017');     // connect to mongoDB database on modulus.io

app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

///////   Routes   ///////
var todo = require('./app/routes/todoRoutes.js');
app.use('/', todo);

/////// Listen Start app with node server.js   ///////
app.listen(8080);
console.log("App listening on port 8080");