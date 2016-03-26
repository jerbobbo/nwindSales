var models = require('./models/').models;
var connect = require('./models/').connect;
var chalk = require('chalk');
var mongoose = require('mongoose');	

var persons = [
	{
		name: 'JerBobbo',
		regions: {
			North: true,
			South: false,
			East: true,
			West: false
		}
	},
	{
		name: 'DeAnthony',
		regions: {
			North: false,
			South: false,
			East: false,
			West: true
		}
	},
	{
		name: 'JerMichael',
		regions: {
			North: true,
			South: true,
			East: true,
			West: false
		}
	}
];

connect()
.then(function() {
	return models.Salesperson.remove({});
})
.then(function() {
	return models.Salesperson.create(persons);
})
.then(function(_persons) {
	console.log(chalk.magenta('Data Seeded Successfully: ', _persons));
	mongoose.disconnect();
})
.catch(console.error);