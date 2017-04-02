(function(){

	'use strict'

	angular
		.module("listaTelefonica")
		.factory("operadorasAPI", operadorasAPI);

	function operadorasAPI($http, config, $q) {

		var deferred = $q.defer();

		var mockOperadoras = [
				{nome: "Oi", codigo: 14, categoria: "Celular", preco: 2},
				{nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1},
				{nome: "Tim", codigo: 41, categoria: "Celular", preco: 3},
				{nome: "GVT", codigo: 25, categoria: "Fixo", preco: 1},
				{nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 2}
			];

		var _getOperadora = function() {
			$http.get(config.baseUrl + '/operadoras').then(function(response){
				deferred.resolve(response)
			}).catch(function(err){
				deferred.reject(mockOperadoras);
			})

			return deferred.promise;
		} 


		return {
			get: _getOperadora
		}
	}

})()