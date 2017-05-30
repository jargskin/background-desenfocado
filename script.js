$(document).ready(function(){
	$('#inicio').on('click', function() {
		$('body').addClass("body2");/* para hacer que reemplace el fondo*/
		$('.content-menu').addClass('content-menu2');
		$('article').addClass('article-move');
	});
	
	$('.cerrar').on('click', function(){
		$('body').removeClass("body2");/* para hacer que reemplace el fondo*/
		$('.content-menu').removeClass('content-menu2');
		$('article').removeClass('article-move');
	});
});