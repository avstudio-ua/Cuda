$(document).ready(function(){
	$('.menu').click(function(){
		$('nav ul').toggleClass("hiden");
	});
	$('nav a').click(function(){
		$('nav ul').toggleClass("hiden");
	});
});