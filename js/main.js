$(function(){
});

var app = angular.module('AppName', []);

// controllers ----------------------------------------------------------

app.controller('mainCtrl', function mainCtrl($scope, configuration){

	$scope.bodyBgColor={'background-color':'#333366'}

	configuration.initialize();

	$scope.setCurBgColor = function() {
		$scope.bgColor = '#dddddd';
	};

});


// services  ----------------------------------------------------------

app.service('configuration', function() {
	this.initialize = function(){
		return "hi world!";
	};
});

// factories ----------------------------------------------------------


// directives ----------------------------------------------------------

app.directive('NOT_USED_mySelectFirstMovie', function() {
	return function(scope, element, attrs) {
		if (scope.$first){
			element.addClass('xxxxxxx');
		}
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



