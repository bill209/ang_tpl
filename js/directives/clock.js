(function() {
	'use strict';

	angular
		.module('Appology')
		.directive('clock', ['dateFilter', '$timeout', function(dateFilter, $timeout){
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

})();
