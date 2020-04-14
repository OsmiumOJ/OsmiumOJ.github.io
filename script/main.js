"use strict";

$(() => {
	$('#sign-in-button').click((event) => { 
		event.preventDefault();
		window.open(`/login?href=${encodeURIComponent(window.location.pathname)}`, '_self');
	});
	$('#sign-up-button').click((event) => { 
		event.preventDefault();
		window.open(`/register?href=${encodeURIComponent(window.location.pathname)}`, '_self');
	});
});