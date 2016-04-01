app.factory('SalespersonFactory', function($http) {

	var SalespersonObj = {

		fetchAll: function() {
			return $http.get('/api/salespersons')
			.then(function(_people) {
				var people = _people.data;
				people.forEach (function(person) {
					person.numRegions = 0;
					for (var key in person.regions) {
						if(person.regions[key]) person.numRegions++;
					}
				});
				return people;
			});
		},

		createPerson: function(person) {
			return $http.post('/api/salespersons', person);
		},

		updateRegions: function(person) {
			return $http.put('/api/salespersons/' + person._id, person);
		},

		deletePerson: function(id) {
			return $http.delete('/api/salespersons/' + id);
		}


	};

	return SalespersonObj;

});
