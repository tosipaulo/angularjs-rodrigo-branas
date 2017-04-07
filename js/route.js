(function(){

	'use strict'

	angular
		.module('listaTelefonica')
		.config(config);

	function config($routeProvider, $locationProvider) {

		$locationProvider.html5Mode(true);

		$routeProvider

			.when('/contatos', {
				templateUrl : 'view/contatos.html'
			})

			.otherwise({redirectTo: '/teste'});
	}


	/*function config($stateProvider, $urlRouterProvider, $locationProvider) {

		

		$urlRouterProvider.otherwise('/tsss');

		$stateProvider

			.state('contatos', {
				url: '/contatos',
				templateUrl : 'view/contatos.html'
			})

			$locationProvider.html5Mode(true);
	}
*/
})()