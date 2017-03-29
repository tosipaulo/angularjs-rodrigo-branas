(function(){

	'use strict'

	angular
		.module('listaTelefonica')
		.controller('listaTelefonicaController', function($scope, $filter, $http){

			$scope.app = "Lista Telefonica";

			$scope.contatos = [];

			$scope.operadoras = [];

			$scope.classe = "selecionado"

			var carregarContatos = function() {
				$http.get('http://127.0.0.1:3412/contatos').then(function(response){
					$scope.contatos = response.data;
				}, function(err){
					$scope.message = "Deu Ruim!!!" + err;
				});
			}

			var carregarOperadoras = function() {
				$http.get('http://127.0.0.1:3412/operadoras').then(function(response){
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