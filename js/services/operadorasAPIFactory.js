(function(){

	'use strict'

	angular
		.module("listaTelefonica")
		.factory("operadorasAPI", operadorasAPI);

	function operadorasAPI($http, config) {

		var _getOperadora = function() {
			return $http.get(config.baseUrl + '/operadoras')
		} 


		return {
			get: _getOperadora
		}
	}

})()