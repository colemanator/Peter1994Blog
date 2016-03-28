/**
 * Created by Peter on 28/03/2016.
 */

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');

var app = express();

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
    console.log("file request")
});


module.exports = app;
