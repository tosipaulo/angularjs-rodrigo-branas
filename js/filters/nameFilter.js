(function(){

	'use strict'

	angular
		.module('listaTelefonica')
		.filter('name', name);

	function name() {

		return function(input) {
			var listaDeNomes = input.split(" ");
			var listaDenomesFormatada = listaDeNomes.map(function(nome){
				if(/(da|de|dos)/.test(nome)) return nome;
				return nome.charAt(0).toUpperCase() +  nome.substring(1).toLowerCase();
			})

			return listaDenomesFormatada.join(" ");
		}

	}

})()