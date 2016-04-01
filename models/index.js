var mongoose = require('mongoose');
var Promise = require('bluebird');
var chalk = require('chalk');
var _conn;

var connect = function() {
	if (_conn) return _conn;

	_conn = new Promise(function(resolve, reject) {
		mongoose.connect('mongodb://localhost/nwindSales', function(){
			console.log(chalk.magenta('Connected to mongo db successfully'));
			resolve();
		});
	});
	return _conn;
};

var salesPersonSchema = mongoose.Schema({
	name: {
		type: String,
		required:true
	},
	regions: {}//i would rather this was an array of strings
});

var Salesperson = mongoose.model('salesperson', salesPersonSchema);

module.exports = {
	models: {
		Salesperson: Salesperson
	},
	connect: connect
};
