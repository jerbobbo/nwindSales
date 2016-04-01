app.controller('SalespersonCtrl', function($scope, SalespersonFactory){

  function setSalesPerson(){
			$scope.newPerson = {
				name: null,
				numRegions: 0,
				regions: {}
			}
  }

	function loadSalesPeople() {
    setSalesPerson();
		SalespersonFactory.fetchAll()
		.then(function(people) {
			$scope.salesPeople = people;
		});
	}

	$scope.maxRegions = function(person, region) {
		if (person)//why would I not have a person?
			return person.numRegions === 3 && !person.regions[region];
	};

	$scope.regionToggle = function(person, region) {
		return person.regions[region] = person.regions[region] ? !person.regions[region] : true;
	};

	$scope.newPersonToggle = function(person, region) {
		if ($scope.regionToggle(person, region))
			$scope.newPerson.numRegions++;
		else
			$scope.newPerson.numRegions--;
	};

	$scope.addPerson = function() {
		SalespersonFactory.createPerson($scope.newPerson)
		.then(loadSalesPeople);
	};

	$scope.updateRegions = function(person, region) {
		$scope.regionToggle(person, region);
		SalespersonFactory.updateRegions(person)
		.then(loadSalesPeople);
	};

	$scope.deletePerson = function(person) {
		SalespersonFactory.deletePerson(person._id)
		.then(loadSalesPeople);
	};

	$scope.regions = ['North', 'South', 'East', 'West'];

	loadSalesPeople();

});
