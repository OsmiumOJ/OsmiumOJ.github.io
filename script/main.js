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

const languageLibrary = {
	"simplifyChinese": {
		"mainPage": "首页",
		"公告": "公告",
		"近期比赛": "近期比赛",
		"比赛列表": "比赛列表",
		"一言": "一言",
		"加载中……": "加载中……",
		"——加载中……": "——加载中……",
		"当前rating：": "当前rating：",
		"最高rating：": "最高rating：",
		"私信": "私信",
		"通知": "通知",
		"收藏": "收藏",
		"博客": "博客",
		"Rating变化": "Rating变化",
		"设置": "设置"
	},
	"traditionalChinese": {
		"mainPage": "首頁",
		"公告": "公告",
		"近期比赛": "近期比賽",
		"比赛列表": "比賽列表",
		"一言": "一言",
		"加载中……": "加載中……",
		"——加载中……": "——加載中……",
		"当前rating：": "當前rating：",
		"最高rating：": "最高rating：",
		"私信": "私信",
		"通知": "通知",
		"收藏": "收藏",
		"博客": "博客",
		"Rating变化": "Rating變化",
		"设置": "設置"
	},
	"english": {
		"mainPage": "Main page",
		"公告": "Announcement",
		"近期比赛": "Upcoming contests",
		"比赛列表": "Contest List",
		"一言": "Hitokoto",
		"加载中……": "Loading...",
		"——加载中……": "- Loading...",
		"当前rating：": "Current rating：",
		"最高rating：": "Highest rating：",
		"私信": "Message",
		"通知": "Notification",
		"收藏": "Favorite",
		"博客": "Blog",
		"Rating变化": "Rating changes",
		"设置": "Settings"
	}
};

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