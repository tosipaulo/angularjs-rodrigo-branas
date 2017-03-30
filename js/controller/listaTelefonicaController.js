(function(){

	'use strict'

	angular
		.module('listaTelefonica')
		.controller('listaTelefonicaController', function($scope, contatosAPI, operadorasAPI){

			$scope.app = "Lista Telefonica";

			$scope.contatos = [];

			$scope.operadoras = [];

			$scope.classe = "selecionado"

			var carregarContatos = function() {

				contatosAPI.get().then(function(response){
					$scope.contatos = response.data;
				}, function(err){
					$scope.error = "Não foi possivel carregar os dados..."
				})

			}

			var carregarOperadoras = function() {
				operadorasAPI.get().then(function(response){
					$scope.operadoras = response.data;
				});
			}

			$scope.adicionarContato = function(contato) {
				$scope.contatos.push(angular.copy(contato))
				delete $scope.contato;

				$scope.contatoForm.$setPristine();
			}

			$scope.apagarContato = function(contatos) {
				$scope.contatos = contatos.filter(function(contato){
					if(!contato.selecionado) return contato;
				})

			}

			$scope.isContatoSelecionado = function(contatos) {
				return contatos.some(function(contato){
					return contato.selecionado
				})

			}

			$scope.ordernarPor = function(campo) {
				$scope.criterioDeOrdenacao = campo;
				$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
			}	

			carregarContatos();

			carregarOperadoras();

		})

})()