function DomLoaded() {
	document.addEventListener('deviceready',phonegapLoaded,false);
	
}

function phonegapLoaded() {
	
	var element = document.getElementById('deviceInfo');
	element.innerHTML = 'Device name '+ device.name + '</br />'+ 
						'Phonegap version '	+ device.phonegap  	+ '</br />'+
						'Platform '	+ device.platform  	+ '</br />'+
						'Device UUID '	+ device.uuid  	+ '</br />'+
						'OS version '	+ device.version  	+ '</br />';
						
	networkConnection();							
						
}

function beep() { navigator.notification.beep(4);}

function vibrate() { navigator.notification.vibrate(2000);}

function networkConnection() {
	var networkState = navigator.network.connection.type;
	alert('Network states ' + networkState);
}
/*
function alert() {
	navigator.notification.alert(
		'Hello world',
		dismissed,
		'Archana',
		'Done'
	);
} */

function demo1() {
	navigator.notification.confirm(
		'Hello world',
		onCofirm,
		'Archana',
		'Done1,Done2'
	);
}



function dismissed() {
	$(function() {
		$("body").html("<h1>Dismissed</h1>");
	});
}

function onCofirm(button) {
	$(function() {
		$("#result").html('puneet');
	});
}