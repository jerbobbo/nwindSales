app.controller('SalespersonCtrl', function($scope, SalespersonFactory){

	SalespersonFactory.fetchAll()
	.then(function(people) {
		$scope.salesPeople = people;
	});

	$scope.regions = ['North', 'South', 'East', 'West'];


});