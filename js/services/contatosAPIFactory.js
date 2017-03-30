(function(){

	'use strict'

	angular
		.module("listaTelefonica")
		.factory("contatosAPI", contatosAPI);


	function contatosAPI($http, config) {

		var _getContatos = function() {
			return $http.get(config.baseUrl + '/contatos')
		}


		return {
			get : _getContatos
		}

	}

})()