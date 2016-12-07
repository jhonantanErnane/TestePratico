angular.module("testePratico", []).controller("ctrlDestaques",
	function($scope){
		// $scope.esconder=true;
		var aluguel = {
                "bairro":"Castelo",
                "tipo":"Casa Geminada",
                "tamanho":250,
                "quartos":2,
                "banheiros":2,
                "vagas":2,
                "preco":10000000.00
            };
        $scope.moeda = function(valor, casas, separdor_decimal, separador_milhar) 
        {

		    var valor_total = parseInt(valor * (Math.pow(10, casas)));
		    var inteiros = parseInt(parseInt(valor * (Math.pow(10, casas))) / parseFloat(Math.pow(10, casas)));
		    var centavos = parseInt(parseInt(valor * (Math.pow(10, casas))) % parseFloat(Math.pow(10, casas)));

		    if (centavos % 10 == 0 && centavos + "".length < 2) {
		        centavos = centavos + "0";
		    } else if (centavos < 10) {
		        centavos = "0" + centavos;
		    }
		    var fmilhar = milhar(inteiros, separador_milhar);

		    return fmilhar + "" + separdor_decimal + "" + centavos;
		};

		function milhar(inteiros, separador_milhar) {
		    var milhares = parseInt(inteiros / 1000);

		    if (milhares > 0) {
		        var inteiros = inteiros % 1000;
		        if (inteiros == 0) {
		            inteiros = "000";
		        } else if (inteiros < 10) {
		            inteiros = "00" + inteiros;
		        } else if (inteiros < 100) {
		            inteiros = "0" + inteiros;
		        }
		        var retorno = milhar(milhares, separador_milhar) + "" + separador_milhar + "" + inteiros;
		        return retorno;
		    }
		    else {
		        return inteiros;
		    }
		}﻿;

        $scope.bairro = aluguel.bairro;
        $scope.tipo = aluguel.tipo;
        $scope.tamanho = aluguel.tamanho;
        $scope.quartos = aluguel.quartos;
        $scope.banheiros = aluguel.banheiros;
        $scope.vagas = aluguel.vagas;
        $scope.preco = "R$" + $scope.moeda(aluguel.preco,2,',','.');
});
 
function mudaricon(obj){
	obj.className = 'glyphicon glyphicon-plus-sign';
}

function voltaricon(obj){
	obj.className = 'btn-plus glyphicon glyphicon-plus';
}

// .on('mouseover', function hover(id){
// 	$(id).attr('class', 'glyphicon glyphicon-plus-sign');
// };
// $('#btn-plus1'||'#btn-plus2').on('mouseover', function(){
// 	$(this).attr('class', 'glyphicon glyphicon-plus-sign');
// }); // jQuery
	// $('#btn-plus').hover(function() {
 //  		$(this).attr('class', 'glyphicon glyphicon-plus-sign');
	// }); 
	// $('#btn-plus').mouseout(function() {
 //  		$(this).attr('class', 'btn-plus glyphicon glyphicon-plus');
	// });

	$('#destaque').hover(function() {
  		$('#seta').attr('class', 'aparece');
	}); 
	$('#destaque').mouseout(function() {
  		$('#seta').attr('class', 'desaparece');
	});















