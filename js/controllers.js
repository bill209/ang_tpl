app.controller('aboutCtrl',function($scope){

});

app.controller('bodyCtrl',function ($scope, $location){
	$scope.bodyBgColor={'background-color':'#ffffff'}

	$scope.customer = {
		name: 'Naomi',
		address: '1600 Amphitheatre'
	};

	// routing: adding active class to nav item
	$scope.getClass = function(path) {
		if ($location.path().substr(0, path.length) == path) {
			return "active"
		} else {
			return ""
		}
	}
});

app.controller('restCallsCtrl',function($scope, $routeParams, restCallsFactory) {
	// $scope.flipIt = function(){
	// 	console.log('flipping');
	// 	this.toggleClass('flipped');
	// };
	var artist = 'jack+johnson';
	var promise = restCallsFactory.getItunesMusic(artist);
	promise.then(function(musicData){
		$scope.iTunes = musicData;
	});

	var promise = restCallsFactory.getOpenNotifySpacePeople();
	promise.then(function(spaceData){
		$scope.spacePeeps = spaceData;
	});

	var author = 'terry+pratchett';
	var promise = restCallsFactory.getGoogleBooks(author);
	promise.then(function(bookData){
		$scope.books = bookData;
	});
});

app.controller('mainCtrl', function ($scope, configuration){
	$scope.time = new Date();
	$scope.numTotal = 0;
	$scope.gettysburg = 'Four score and seven years ago our fathers brought forth, upon this continent, a new nation, conceived in liberty, and dedicated to the proposition that /"all men are created equal./"';
	$scope.heroes = [
	{'name': 'Batman', 'publisher': 'DC Comics'},
	{'name': 'Green Lantern', 'publisher': 'DC Comics'},
	{'name': 'Cat Woman', 'publisher': 'DC Comics'},
	{'name': 'Hawkman', 'publisher': 'DC Comics'},
	{'name': 'Bizarro', 'publisher': 'DC Comics'},
	{'name': 'Iron Man', 'publisher': 'Marvel'},
	{'name': 'Captain America', 'publisher': 'Marvel'},
	{'name': 'Hulk', 'publisher': 'Marvel'},
	{'name': 'Spiderman', 'publisher': 'Marvel'},
	{'name': 'Storm', 'publisher': 'Marvel'}
	];

	$scope.orderProp = 'name';

	configuration.initialize();

	$scope.setCurBgColor = function() {
		$scope.bgColor = '#dddddd';
	};

});

app.controller('colorsCtrl', function ($scope){

	$scope.faicon = 
		{ "icons":[
		{"faName":"bed","color":"blue"},
		{"faName":"connectdevelop","color":"green"},
		{"faName":"forumbee","color":"red"},
		{"faName":"mars","color":"yellow"},
		{"faName":"street-view","color":"pink"},
		{"faName":"ship","color":"purple"},
		{"faName":"venus","color":"lime"},
		{"faName":"whatsapp","color":"magenta"},
		{"faName":"dashcube","color":"teal"},
		{"faName":"heartbeat","color":"turquoise"},
		{"faName":"shirtsinbulk","color":"sea"},
		{"faName":"subway","color":"emerald"},
		{"faName":"diamond","color":"nephritis"},
		{"faName":"sellsy","color":"river"},
		{"faName":"home","color":"belize"},
		{"faName":"user-secret","color":"amethyst"},
		{"faName":"cart-plus","color":"wisteria"},
		{"faName":"leanpub","color":"asphalt"},
		{"faName":"motorcycle","color":"midnight"},
		{"faName":"skyatlas","color":"sunflower"},
		{"faName":"viacoin","color":"orange"},
		{"faName":"server","color":"carrot"},
		{"faName":"user-times","color":"pumpkin"},
		{"faName":"facebook-official","color":"alizarin"},
		{"faName":"pinterest-p","color":"pomegranate"},
		{"faName":"medium","color":"clouds"},
		{"faName":"user-plus","color":"silver"},
		{"faName":"buysellads","color":"concrete"},
		{"faName":"transgender-alt","color":"asbestos"}
		]};
});

app.controller('matchCtrl', function ($scope){

	var colors=[
		{"color":"blue"},
		{"color":"green"},
		{"color":"red"},
		{"color":"yellow"},
		{"color":"pink"},
		{"color":"purple"},
		{"color":"lime"},
		{"color":"magenta"},
		{"color":"teal"},
		{"color":"turquoise"},
		{"color":"sea"},
		{"color":"emerald"},
		{"color":"nephritis"},
		{"color":"river"},
		{"color":"belize"},
		{"color":"amethyst"},
		{"color":"wisteria"},
		{"color":"asphalt"},
		{"color":"midnight"},
		{"color":"sunflower"},
		{"color":"orange"},
		{"color":"carrot"},
		{"color":"pumpkin"},
		{"color":"alizarin"},
		{"color":"pomegranate"},
		{"color":"clouds"},
		{"color":"silver"},
		{"color":"concrete"},
		{"color":"asbestos"}
		];
	var choices = [
		{"faName":"bed"},
		{"faName":"connectdevelop"},
		{"faName":"forumbee"},
		{"faName":"mars"},
		{"faName":"street-view"},
		{"faName":"ship"},
		{"faName":"venus"},
		{"faName":"whatsapp"},
		{"faName":"dashcube"},
		{"faName":"heartbeat"},
		{"faName":"shirtsinbulk"},
		{"faName":"subway"},
		{"faName":"diamond"},
		{"faName":"sellsy"},
		{"faName":"home"},
		{"faName":"user-secret"},
		{"faName":"cart-plus"},
		{"faName":"leanpub"},
		{"faName":"motorcycle"},
		{"faName":"skyatlas"},
		{"faName":"viacoin"},
		{"faName":"server"},
		{"faName":"user-times"},
		{"faName":"facebook-official"},
		{"faName":"pinterest-p"},
		{"faName":"medium"},
		{"faName":"user-plus"},
		{"faName":"buysellads"},
		{"faName":"transgender-alt"}
		];
		$scope.gameBoard = [];
		$scope.gameBoard = setupMatches(2,choices,colors);
});
