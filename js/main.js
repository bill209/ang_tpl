(function() {
	'use strict';

// appName
//var app = angular.module('Appology', ['ngRoute']);
angular
	.module('Appology',['ngRoute']);

})();
// controllers ----------------------------------------------------------


// services  ----------------------------------------------------------

angular
	.module('Appology')
	.service('configuration', function() {
		this.initialize = function(){
			return "hi world!";
		};
	});


angular
	.module('Appology')
	.filter('cut', function () {
		return function (value, wordwise, max, tail) {
			if (!value) return '';

			max = parseInt(max, 10);
			if (!max) return value;
			if (value.length <= max) return value;

			value = value.substr(0, max);
			if (wordwise) {
				var lastspace = value.lastIndexOf(' ');
				if (lastspace != -1) {
					value = value.substr(0, lastspace);
				}
			}

			return value + (tail || ' …');
		};
	});

// routing
	angular
		.module('Appology')
		.config(['$routeProvider',
			function($routeProvider) {
				$routeProvider.
				when('/main', {
					templateUrl: 'views/main.html'
		//			controller: 'mainCtrl'
				}).
				when('/restCalls', {
					templateUrl: 'views/restCalls.html'
		//			controller: 'restCallsCtrl'
				}).
				when('/about', {
					templateUrl: 'views/about.html'
		//			controller: 'aboutCtrl'
				}).
				when('/colors', {
					templateUrl: 'views/colors.html'
		//			controller: 'colorsCtrl'
				}).
				when('/match', {
					templateUrl: 'views/match.html'
		//			controller: 'matchCtrl'
				}).
				when('/test', {
					templateUrl: 'views/test.html'
				}).
				otherwise({
					redirectTo: '/main'
				});
			}
		]);



