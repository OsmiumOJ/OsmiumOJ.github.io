"use strict";
$(document).ready(() => {
	$('#sign-in-button').click((event) => { 
		event.preventDefault();
		window.open(`/login?href=${window.location.pathname}`, '_self');
	});
	$('#sign-up-button').click((event) => { 
		event.preventDefault();
		window.open(`/register?href=${window.location.pathname}`, '_self');
	});
});