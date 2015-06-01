// functions  ----------------------------------------------------------

function setupMatches(items, choices, colors){
	// items/choices allows for the board to have different items each instantiation
	// items: number of unique items to be put in the game
	// choices: all the choices from which items can be drawn
	var chosen = [], pic;
	// build up array of random entries
	for(i=0;i<items;i++) { 
		// there are two random items for each tile: picture (icon) and color
		pic = Math.floor(Math.random()*choices.length); 
		c = Math.floor(Math.random()*colors.length); 
		chosen.push({"icon": choices[pic].faName, "color": colors[c].color});
		// remove the item from choices so it will not be chosen again
		choices.splice(pic, 1);
	}
console.log('chosen',chosen);
	// double the array by doubling the items so there are now two of each //
	var clone = chosen.slice(0);
	var chosenX2 = chosen.concat(clone);
	// randomize the array //
	return chosenX2.sort(function(){return(Math.round(Math.random())-0.5)});
}

