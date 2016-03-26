var router = new require('express').Router();
var models = require('../models/').models;
var Salesperson = models.Salesperson;

router.get('/', function(req, res, next) {
	res.send('index.html');
});

router.get('/api/salespersons', function(req, res, next) {
	Salesperson.find()
	.then(function(persons) {
		res.send(persons);
	})
	.catch(next);
});

router.post('/api/salesperson', function(req, res, next) {
	Salesperson.create({
		name: req.body.name,
		regions: req.body.regions
	})
	.then(function(){
		res.status(200).send();
	})
	.catch(next);
});

router.put('/api/salesperson/:id', function(req, res, next) {
	Salesperson.findById(req.params.id)
	.then(function(_person) {
		_person.regions = req.body.regions;
		return _person.save();
	})
	.then(function(){
		res.status(204).send();
	})
	.catch(next);
});

router.delete('/api/salesperson/:id', function(req, res, next) {
	Salesperson.remove({ _id: req.params.id })
	.then(function(){
		res.status(204).send();
	})
	.catch(next);
});


module.exports = router;