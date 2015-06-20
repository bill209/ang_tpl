(function() {
	'use strict';

	angular
		.module('Appology')
		.directive('myCustomer', function() {
			return {
				template: 'Name: {{customer.name}} Address: {{customer.address}}'
			};
		});

})();
