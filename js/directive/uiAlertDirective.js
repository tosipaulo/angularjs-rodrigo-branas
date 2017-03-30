(function(){

	'use strict'

	angular
		.module('listaTelefonica')
		.directive('uiAlert', uiAlert);

	function uiAlert() {
		return {
			templateUrl: 'view/alert.html',
			replace: true,
			restrict: 'AE',
			scope: {
				title: "@"
			},
			transclude: true
		}
	}

})()