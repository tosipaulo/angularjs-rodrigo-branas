(function(){

	'use strict'

	angular
		.module('listaTelefonica')
		.controller('listaTelefonicaController', function($scope, contatosAPI, operadorasAPI){

			$scope.app = "Lista Telefonica";

			$scope.contatos = [];

			$scope.operadoras = [];

			$scope.statusError = false;
 
			$scope.classe = "selecionado"

			var carregarContatos = function() {

				contatosAPI.get().then(function(response){
					$scope.contatos = response.data;
				}).catch(function(err){
					$scope.statusError = true;
					$scope.error = "Estou usando mock";
					$scope.contatos = err;
				})

			}

			var carregarOperadoras = function() {
				operadorasAPI.get().then(function(response){
					$scope.operadoras = response.data;
				}).catch(function(err){
					$scope.operadoras = err;
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