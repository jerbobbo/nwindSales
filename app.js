var express = require('express');
var app = new express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/public')));
app.use('/vendor', express.static(path.join(__dirname, '/node_modules')));
app.use(express.static(path.join(__dirname, '/browser')));

app.use(bodyParser.json());

app.use('/', function(err, req, res, next) {
	res.send(err);
});

app.use(require('./routes'));

module.exports = app;