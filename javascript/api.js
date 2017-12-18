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

var defaultArray = ['baboonery', 'christmasberry' , 'ozonise' , 'spencer' , 'copaiba' , 'pathologic' , 'seafaring', 'mossiness' , 'prediscovery' , 'hyperimmunize' , 'nonconsequential', 'neustic', 'overpronounced' , 'nonfungible' , ' cuamuchil ' , 'chessman ' , 'suffolk ' , 'martha ' , 'fallaciousness' , ' denser' ,'gharry' , 'zuian' , 'unsedulous' , 'nonpigmented' , 'toran' , 'zed' , 'unary' , 'isochroous' , 'gumma ' , 'exudative' , 'philomela' , 'nonirritability ' , 'bottomlessly' , 'aspirer' , 'lacy' , 'subspecialization' , 'gibeonite' , 'ping' , 'foaminess' , 'entomologize' , 'kazatsky' , 'dishonorer ' , 'reintroduce' , 'ictinus' , 'necklike' , 'camarillas' , 'patchworky' , 'siberia' , 'vunconstruable' , 'aeroscepsy' , 'reprieving' , 'arminius' , 'hindward' , 'manubria' ,
'interpretive' , 'emarginate' , 'undisturbable' , 'overgenerous' , 'rain' , 'paroquet' , 'overpricing ' , 'sheen' , 'traditores' , 'hootch' , 'redesign' , 'beryllonite' , 'isenthalpic' , 'acculturational' , 'deepfried' , 'indy ' , 'flocculently' , 'unpalatial' , 'unmilitaristically' , 'universe' , 'hymenoptera' , 'devisal' , 'brankiest ' , 'yeysk' , 'wauwatosa' , 'borate' , 'coke' , 'ballooner' , 'arabian' , 'unproving' , 'nonarbitrable' , 'mongrelness' , 'anthropophagite' , 'lopoldville' , 'vocalise' , 'quinquevalence' , 'musically' , 'greta' , 'premeditation' , 'rota' , 'unrubricated' , 'unglandular' , 'bovet' , 'pomeranian' , 'prerequest' , 'unheroic' , 'yelp' , 'brisance' , 'douala' , 'blindfoldedness' , 'mispropose' , 'tyrannisingly' ,
 'papaveraceous' , 'pseudomemory' , 'individuation' , 'calyce' , 'dravidian' , 'chamoix' , 'spasmolytic' , 'sippar' , 'potiche' , 'zooplastic' , 'mesomorphic' , 'dentalia' , 'caryatids' , 'anticreative' , 'outstated' , 'redrawn' , 'disgregation' , 'defoliation' , 'asunder' , 'overobedience' , 'unshrill' , 'godthaab' , 'unguled' , 'tooter' , 'homotaxially' , 'itinerary' , 'braintree' , 'semipendent' , 'amerindian' , 'anthropogeographer' , 'valeting' , 'collyria' , 'photophilous' , 'hydropic' , 'lumbricalis' , 'pilliwinks' , 'malo' , 'deliverable' , 'oncologic' , 'visaged' , 'enunciation' , 'nitrogenising' , 'nonexaggeration', 'quern' , 'apocynthion' , 'bobby' , 'nuremberg' , 'ventriloquy'];












