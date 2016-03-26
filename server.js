'use strict';
var http = require('http');
var app = require('./app');
var db = require('./models/');
var chalk = require('chalk');

var server = http.createServer();

server.on('request', app);

var port = process.env.PORT || 3000;

db.connect()
.then(function() {
	server.listen(port, function() {
		console.log(chalk.green('Listening on port ', port));
	});
})
.catch(console.error);
