"use strict";

$(() => {
	$('head').prepend(`
		<meta charset="utf-8"/>
		<meta name="keywords" content="OsmiumOJ,Osmium OJ,Osmium Online Judge,OOJ,OsmiumOnlinejudge"/>
		<meta name="description" content="OsmiumOJ，一个开源的算法竞赛在线评测平台"/>
		
		<link rel="shortcut icon" type="image/x-icon" href="/img/ooj.png"/>
		
		<link rel="stylesheet" href="/css/main.css"/>
		<link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/5.13.0/css/all.min.css"/>
		
		<script src="https://cdn.staticfile.org/vue/2.6.11/vue.min.js"></script>
		<script src="/script/main.js"></script>
	`);
	$('body').prepend(`
		<header unselectable="on" onselectstart="return false;">
			<a href="/">
				<img src="/img/ooj.png" alt="logo" style="height: 40px; margin: 5px;"/>
			</a>
			<a href="/" style="font-size: 30px; vertical-align: top; margin-left: -5px;" class="gradient-text">Osmium OJ</a>
			<span style="position: absolute; right: 0; height: 100%; margin-right: 10px;">
				<button id="sign-in-button"><span class="gradient-text">登录</span></button>
				<button id="sign-up-button">注册</button>
			</span>
		</header>
		
		<ul id="left-sidebar">
			<!-- <a href="/">
				<li>
					<i class="fas fa-home gradient-text"></i>
					<span class="gradient-text">主页</span>
				</li>
			</a> -->
			<a href="/problems">
				<li>
					<i class="fas fa-book gradient-text"></i>
					<span class="gradient-text">题库</span>
				</li>
			</a>
			<a href="/contests">
				<li>
					<i class="fas fa-trophy gradient-text"></i>
					<span class="gradient-text">比赛</span>
				</li>
			</a>
			<a href="/judgments">
				<li>
					<i class="fas fa-calendar-check gradient-text"></i>
					<span class="gradient-text">评测</span>
				</li>
			</a>
			<a href="/ladders">
				<li>
					<i class="fas fa-signal gradient-text"></i>
					<span class="gradient-text">天梯</span>
				</li>
			</a>
		</ul>
		<ul id="right-sidebar">
			<a href="/exercises">
				<li>
					<i class="fas fa-crosshairs gradient-text"></i>
					<span class="gradient-text">练习</span>
				</li>
			</a>
			<a href="/discussions">
				<li>
					<i class="fas fa-comments gradient-text"></i>
					<span class="gradient-text">讨论</span>
				</li>
			</a>
			<a href="/tools">
				<li>
					<i class="fas fa-drafting-compass gradient-text"></i>
					<span class="gradient-text">工具</span>
				</li>
			</a>
			<a href="/blogs">
				<li>
					<i class="fas fa-blog gradient-text"></i>
					<span class="gradient-text">博客</span>
				</li>
			</a>
		</ul>
	`);
	$('body').append(`
	<footer>
		OsmiumOJ Powered by <a href="https://github.com/ooj-dev">OOJ Develop Team</a>.
	</footer>
	`);
})