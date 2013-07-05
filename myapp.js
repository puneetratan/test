function DomLoaded() {
	alert("Hi Archana, this app dedicated to u")
	document.addEventListener('deviceready', phonegapLoaded,false);
}

function phonegapLoaded() {
	$(function() {
		$("body").append("<h1>Device is Ready</h1>");
	});
	
}