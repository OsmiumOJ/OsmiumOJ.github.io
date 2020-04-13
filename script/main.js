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

const languageLibrary = $.getJSON('/script/json/lang.json');

let languageModifier = new Vue({
	el: '*',
	data: localStorage.getItem('language-library') === undefined ? languageLibrary.simplifyChinese : JSON.parse(localStorage.getItem('language-library'))
});

function modifyLanguage(lang) {
	if (localStorage.getItem('language') === lang) {
		return;
	}
	let tmp;
	if (lang === 'simplify-chinese') {
		tmp = languageLibrary.simplifyChinese;
	}
	if (lang === 'traditional-chinese') {
		tmp = languageLibrary.traditionalChinese;
	}
	if (lang === 'english') {
		tmp = languageLibrary.english;
	}
	localStorage.setItem('language-library', JSON.stringify(tmp));
}