// functions  ----------------------------------------------------------

function setupMatches(x, choices){
	var items = x * x / 2;
	var chosen = [];
	// build up array of random entries
	for(i=0;i<x;i++) { 
		r = Math.floor(Math.random()*choices.length); 
		chosen.push(choices[r]);
		//remove the chosen from choices//		
	}

	// double the array, double the items so there are now two of each //
	// randomize the array //
	return choices.sort(function(){return(Math.round(Math.random())-0.5)});
}
