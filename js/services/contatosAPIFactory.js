(function(){

	'use strict'

	angular
		.module("listaTelefonica")
		.factory("contatosAPI", contatosAPI);


	function contatosAPI($http, config) {

		var _getContatos = function() {
			return $http.get(config.baseUrld + '/contatos')
		}


		return {
			get : _getContatos
		}

	}

})()