function DomLoaded() {
	document.addEventListener('deviceready',phonegapLoaded,false);
}

function phonegapLoaded() {
	$(function() {
		$('body').append('<h1>Device is Ready</h1>')
	});
	
}