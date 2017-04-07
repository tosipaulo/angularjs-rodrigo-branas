(function(){

	'use strict'

	angular
		.module('listaTelefonica')
		.config(config);

	function config($routeProvider, $locationProvider) {

		$locationProvider.html5Mode(true);

		$routeProvider

			.when('/contatos', {
				templateUrl : 'view/contatos.html',
				controller: 'listaTelefonicaController'
			})
			.when('/novoContato', {
				templateUrl : 'view/novoContato.html',
				controller: 'listaTelefonicaController'
			})


			.otherwise({redirectTo: '/contatos'});
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