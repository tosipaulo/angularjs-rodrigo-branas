(function(){

	'use strict'

	angular
		.module('listaTelefonica')
		.filter('ellipsis', ellipsis);

	function ellipsis() {

		return function(input, size) {
			if(input.length <= size) return input;
			var output = input.substring(0,(size || 3)) + '...';
			return output
		}
	}

})()