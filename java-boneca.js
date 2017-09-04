var width = screen.width;
var height = screen.height;

if (width <= 800 || height <= 600)
	alert("A resolução da tela do seu monitor é " + width + "x" + height + ". Para visualizar o site é recomendado uma resolução de no mínimo 1024x768.");

else
	alert("A resolução da tela do seu monitor é " + width + "x" + height + ".");


$(document).ready(function(){
	var posicaoAtual = $(window).scrollTop();
	var documentSize = $(document).height();
	var sizeWindow = $(window).height();
	
	$(window).scroll(function () {
		posicaoAtual = $(window).scrollTop();
 	if ( posicaoAtual >= (documentSize - sizeWindow ) ) {
			$( ".menina_1" ).css( "display", "block" );
    }else{
         $( ".menina_1" ).css( "display", "none" );
    		}
	});
	
	$(window).resize(function() {
		posicaoAtual = $(window).scrollTop();
		documentSize = $(document).height();
		sizeWindow = $(window).height();
	});
	
	
});