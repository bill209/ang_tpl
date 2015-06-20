(function() {
	'use strict';

	angular
		.module('Appology')
		.factory('matchFactory', function($q, $http) {
			return {
				getColors: function(){
					var deferred = $q.defer();
					var url ='data/colors.json';
					$http
						.get(url)
						.then(function(d){
							deferred.resolve(angular.fromJson(d.data));
						});
					return deferred.promise;
				},
				getIcons: function(){
					var deferred = $q.defer();
					var url ='data/icons.json';
					$http
						.get(url)
						.then(function(d){
							deferred.resolve(angular.fromJson(d.data));
						});
					return deferred.promise;
				}		
			}
		});

	angular
		.module('Appology')
		.factory('restCallsFactory', function($q, $http){
			return {
				// http get
				getGoogleBooks: function(author){
					var deferred = $q.defer();
					var url = 'https://www.googleapis.com/books/v1/volumes?q=inauthor:' + author + '&maxresults=10';

					$http
					.get(url)
					.then(function(d){
						deferred.resolve(d.data.items);
					});
					return deferred.promise;
				},
				// http jsonp
				getOpenNotifySpacePeople: function(){
					var deferred = $q.defer();
					var url = 'http://api.open-notify.org/astros.json?callback=JSON_CALLBACK';

					$http
					.jsonp(url)
		        			.error(function (data, status, headers, config) {

					})
					.then(function(d){
						deferred.resolve(d.data);
					});
					return deferred.promise;
				},
				// http jsonp
				getItunesMusic: function(artist){
					var deferred = $q.defer();
					var url = 'https://itunes.apple.com/search?term=' + artist + '&limit=10&callback=JSON_CALLBACK';

					$http
					.jsonp(url)
					.then(function(d){
						deferred.resolve(d.data.results);
					});
					return deferred.promise;
				}
			}

		});

		// example .servicer code
	angular
		.module('Appology')
		.service('helloWorldFromService', function() {
			this.sayHello = function() {
				return "Hello, World!"
			};
		});

})();
