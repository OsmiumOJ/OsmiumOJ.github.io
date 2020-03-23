$('#sign-in-button').click(() => {
	window.open(`/login?href=${encodeURIComponent(window.location.pathname)}`, '_self');
});

$('#sign-up-button').click(() => {
	window.open(`/register?href=${encodeURIComponent(window.location.pathname)}`, '_self');
});