// functions  ----------------------------------------------------------

function setupMatches(items, choices, colors){
	// items/choices allows for the board to have different items each instantiation
	// items: number of unique items to be put in the game
	// choices: all the choices from which items can be drawn
	var pic;
	var chosen = [];

	for(i=0;i<items;i++) { 
		// there are two random items for each tile: picture (icon) and color
		pic = Math.floor(Math.random()*choices.length); 
		chosen.push({"icon": choices[pic].faName});
		// remove the item from choices so it will not be chosen again
		choices.splice(pic, 1);
	}	// double the array by doubling the items so there are now two of each //

	var x = doubleTheArray(chosen);
	var y = addColors(x, colors);
	return y;
}

var doubleTheArray = function(a){
	var b = [];
	for(var i = a.length -1; i >= 0; i--){
		b.push(a[i]);
		b.push(a[i]);
	}
	return b;
}

var addColors = function(a, c){
	var x = [];	
	for(var i = a.length -1; i >= 0; i--){
		color = Math.floor(Math.random()*c.length); 
		x[i] = {'icon':a[i].icon,'color':c[color].color};
		// remove the item from colors so it will not be chosen again
		c.splice(color, 1);
	}	
	return x;
}

