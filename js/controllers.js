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

app.controller('colorsCtrl', function ($scope, matchFactory){
	$scope.icons = {};
	var promise = matchFactory.getColors();
	// retrieve a list of potential colors to use for the tiles
	promise.then(function(colorData){
		var colors = colorData;
		var promise = matchFactory.getIcons();
		// retrieve a list of potential icons to use for the tiles
		promise.then(function(iconData){
			var icons = iconData;
			for(i=0;i<icons.length;i++){
				$scope.icons[i] = {'faName':icons[i].faName,'color':colors[i].color};
			}
		});
	});
});

app.controller('matchCtrl', function ($scope, $timeout, matchFactory){
	$scope.firstPick = '';
	$scope.pick1 = -1;
	$scope.pick2 = -1;
	$scope.winners = [];
	$scope.gameBoard = [];


	var promise = matchFactory.getColors();
	// retrieve a list of potential colors to use for the tiles
	promise.then(function(colorData){
		var colors = colorData;
		var promise = matchFactory.getIcons();
		// retrieve a list of potential icons to use for the tiles
		promise.then(function(iconData){
			var icons = iconData;
			$scope.gameBoard = setupMatches(2,icons,colors);
		});
	});

	$scope.pickMe = function($index, picked){
		if($scope.firstPick == ''){
			$scope.firstPick = picked;
			$scope.pick1 = $index;
		} else {
			$scope.pick2 = $index

			if($scope.firstPick == picked){
				$timeout(matchResult,1000);
			} else {
				$timeout(noMatchResult,1000);
			}
			$scope.firstPick = '';
		}
	};

	function matchResult(){
		$scope.winners[$scope.pick1] = 'true';
		$scope.winners[$scope.pick2] = 'true';
		$scope.pick1 = -1;
		$scope.pick2 = -1;
		$scope.matchResult = 'yay';
	}

	function noMatchResult(){
		$scope.pick1 = -1;
		$scope.pick2 = -1;
		$scope.matchResult = 'boo';
	}
});
