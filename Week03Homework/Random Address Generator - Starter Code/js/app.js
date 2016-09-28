$(document).ready(function(){

	var streets = ['Main', 'Smith', 'Wall', '42nd', 'Astor', 'St. Marks', 'Broadway', 'Water', 'Park', '5th', 'Hollywood' ];
	var types = ['St', 'Ave', 'Way', 'Hwy', 'Place'];
	var states = ['NY', 'CA', 'TN', 'TX', 'MO'];
	var cities = ['New York', 'Boulder', 'Santa Monica', 'Los Angeles', 'St. Louis'];

	function returnnumber(limit) {
		var number=[];
		var count = 0;

		while(count < limit) {
			number.push(Math.floor((Math.random()*10)));
			count++;			
		}
		var join = number.join();
		return parseFloat(join.replace(/,/g, ''));

	}

	function getRandomInt(min, max) {
    	return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	$('button#makeAddress').click(function(){

		var streetRandom = Math.floor((Math.random() * streets.length)); 
		var typesRandom = Math.floor((Math.random() * types.length));
		var statesRandom = Math.floor((Math.random() * states.length));
		var citiesRandom = Math.floor((Math.random() * cities.length));
		
		var streetName = streets[streetRandom];
		var streetType = types[typesRandom];
		var city = cities[citiesRandom];
		var state = states[statesRandom]; 	

		var houseNumber	= returnnumber(getRandomInt(1,4));
		var zipcode = 	returnnumber(5)	 		

		$('address.destination').html( houseNumber + ' ' + streetName + ' ' + streetType + '<br/>' );
		$('address.destination').append( city + ', ' + state + ' ' + zipcode );

	});

});