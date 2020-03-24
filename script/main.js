$('#sign-in-button').click(function (e) { 
	e.preventDefault();
	window.open(`/login?href=${encodeURIComponent(window.location.pathname)}`, '_self');
});

$('#sign-up-button').click(function (e) { 
	e.preventDefault();
	window.open(`/register?href=${encodeURIComponent(window.location.pathname)}`, '_self');
});