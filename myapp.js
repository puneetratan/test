function DomLoaded() {
	document.addEventListener('deviceready',phonegapLoaded,false);
}

function phonegapLoaded() {
}

function alert() {
	navigator.notification.alert(
		'Hello world',
		dismissed,
		'Archana',
		'Done'
	);
}

function dismissed() {
	$(function() {
		$("body").append("<h1>Dismissed</h1>");
	});
}