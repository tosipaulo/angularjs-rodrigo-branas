(function(){

	'use strict'

	angular
		.module("listaTelefonica")
		.factory("contatosAPI", contatosAPI);


	function contatosAPI($http, config, $q) {

		var deferred = $q.defer();

		var mockContatos = [
				{nome: "Pedro", telefone: "9999-8888", data: new Date()},
				{nome: "Ana", telefone: "9999-8877", data: new Date()},
				{nome: "Maria", telefone: "9999-8866", data: new Date()}
			];

		var _getContatos = function() {
			$http.get(config.baseUrl + '/contatos').then(function(response){

				deferred.resolve(response);

			}).catch(function(err){
				deferred.reject(mockContatos)
			})

			return 	deferred.promise;
		}


		return {
			get : _getContatos
		}

	}

})()