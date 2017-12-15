 var starwarsArray = [];
 var pokemonArray = [];

// star wars vocab grabs
  $.get('https://swapi.co/api/people/', {
  }).done(function(response) {
  	name : 
  	results: 15
  console.log(response.results);
  for (var i = 0; i < response.results.length; i++){
  starwarsArray.push(response.results[i].name);
  }
});
  
  $.get('https://swapi.co/api/people/?page=2', {
  }).done(function(response) {
  	name : 
  	results: 15
  console.log(response.results);
  for (var i = 0; i < response.results.length; i++){
  starwarsArray.push(response.results[i].name);
  }
});

  $.get('https://swapi.co/api/people/?page=3', {
  }).done(function(response) {
  	name : 
  	results: 15
  console.log(response.results);
  for (var i = 0; i < response.results.length; i++){
  starwarsArray.push(response.results[i].name);
  }
});

  $.get('https://swapi.co/api/planets/',{
  }).done(function(response) {
  	name : 
  	results: 15
  console.log(response.results);
  for (var i = 0; i < response.results.length; i++){
  starwarsArray.push(response.results[i].name);
  }
});

  $.get('https://swapi.co/api/planets/?page=2',{
  }).done(function(response) {
  	name : 
  	results: 15
  console.log(response.results);
  for (var i = 0; i < response.results.length; i++){
  starwarsArray.push(response.results[i].name);
  }
});

  $.get('https://swapi.co/api/species/',{
  }).done(function(response) {
  	name : 
  	results: 15,
  console.log(response.results);
  for (var i = 0; i < response.results.length; i++){
  starwarsArray.push(response.results[i].name);
  }
});

// pokemon API call
  $.get('https://pokeapi.co/api/v2/pokemon/?limit=150', {
  }).done(function(response) {
  	console.log(response.results);
  	for (var i = 0; i <response.results.length; i++){
  		pokemonArray.push(response.results[i].name);
  	}
  });














