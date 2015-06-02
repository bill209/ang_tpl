$(function(){
});
// appName
var app = angular.module('Appology', ['ngRoute']);

// controllers ----------------------------------------------------------


// services  ----------------------------------------------------------

app.service('configuration', function() {
	this.initialize = function(){
		return "hi world!";
	};
});

// factories ----------------------------------------------------------


// directives ----------------------------------------------------------

app.directive('matchIt', function(i){
	console.log('i',i);
});

app.directive('toggleClass', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('click', function() {
                element.toggleClass(attrs.toggleClass);
            });
        }
    };
});


app.directive('clock', ['dateFilter', '$timeout', function(dateFilter, $timeout){
	return {
		restrict: 'E',
		scope: {
			format: '@'
		},
		link: function(scope, element, attrs){
			var updateTime = function(){
				var now = Date.now();

				element.html(dateFilter(now, scope.format));
				$timeout(updateTime, now % 1000);
			};
			updateTime();
		}
	};
}]);

app.directive('myCustomer', function() {
	return {
		template: 'Name: {{customer.name}} Address: {{customer.address}}'
	};
});


// this limits the number of characters displayed on the page
// usage: {{some_text | cut:true:100:' ...'}}
// options:  wordborders (boolean) - if true, cut only on word boundaries
//			max (integer) - maximum length of string
//			tail (string, default = '...') - add this string to any truncated text

app.filter('cut', function () {
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
app.config(['$routeProvider',
	function($routeProvider) {
console.log('ROUTEPROVIDER',$routeProvider);		
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
		otherwise({
			redirectTo: '/main'
		});
	}]);



