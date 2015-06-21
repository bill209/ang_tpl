(function() {
	'use strict';

// test view controller
	angular
		.module('Appology')
		.controller('test', function($scope){
			$scope.testClass1 = false;
			$scope.testClass2 = false;

			$scope.applyClass2 = function(){
				if($scope.testClass2){
					$scope.testClass2 = false;
				} else {
					$scope.testClass2 = true;
				}
			}
			$scope.applyClass3 = function(){
				if($scope.testClass3){
					$scope.testClass3 = false;
				} else {
					$scope.testClass3 = true;
				}
			}
		});

// about view controller
	angular
		.module('Appology')
		.controller('aboutCtrl',function($scope){

		});

//  body controller
	angular
		.module('Appology')
		.controller('bodyCtrl',function ($scope, $location){
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

// restCalls view controller
	angular
		.module('Appology')
		.controller('restCallsCtrl',function($scope, $routeParams, restCallsFactory) {
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

// main view controller
	angular
		.module('Appology')
		.controller('mainCtrl', function ($scope, configuration){
			$scope.readMe = false;
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

			$scope.toggleReadme = function(){
				$scope.readMe = !$scope.readMe;
			}

			$scope.setCurBgColor = function() {
				$scope.bgColor = '#dddddd';
			};
		});

// colors view controller
	angular
		.module('Appology')
		.controller('colorsCtrl', function ($scope, colorTilesFactory){
			$scope.icons = {};
			var promise = colorTilesFactory.getColors();
			// retrieve a list of potential colors to use for the tiles
			promise.then(function(colorData){
				var colors = colorData;
				var promise = colorTilesFactory.getIcons();
				// retrieve a list of potential icons to use for the tiles
				promise.then(function(iconData){
					var icons = iconData;
					for(var i=0;i<icons.length;i++){
						$scope.icons[i] = {'faName':icons[i].faName,'color':colors[i].color};
					}
				});
			});
		});

})();
