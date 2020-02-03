"use strict";
var alert1On = false;
function alert1(args) {
	if(alert1On) {
		return;
	}
	if(args === undefined) {
		$("#alert1Container").fadeIn();
		$("#alert1Container").css({display: "flex"});
		return;
	}
	var txt = Boolean(args.txt) ? String(args.txt) : "内容";
	var cap = Boolean(args.cap) ? String(args.cap) : "标题";
	var okTxt = Boolean(args.okTxt) ? String(args.okTxt) : "确&ensp;定";
	var hasCancel = Boolean(args.hasCancel);
	var cancelTxt = Boolean(args.cancelTxt) ? String(args.cancelTxt) : "取&ensp;消";
	var txtAlign = Boolean(args.txtAlign) ? String(args.txtAlign) : "center";
	var okDo = Boolean(args.okDo) ? String(args.okDo) : null;
	var doRemove = Boolean(args.doRemove) ? function() {
		$("#alert1Container").erase();
	} : null;
	var doShow = args.doShow == undefined ? true : Boolean(args.doShow);
	alert1On = doShow;
	$("#alert1Txt").css({textAlign: txtAlign});
	$("#alert1Txt").html(txt);
	$("#alert1Cap").html(cap);
	$("#alert1OkButton").html(okTxt);
	$("#alert1OkButton").click(function() {
		okDo;
		doRemove;
		$("#alert1Container").fadeOut();
		alert1On = false;
	});
	$("#alert1CancelButton").remove();
	if(hasCancel) {
		$("#alert1Body").append("<button id=\"alert1CancelButton\" class=\"static-shad fill-3 alert1-button\"<\/button>");
		$("#alert1CancelButton").html(cancelTxt);
		$("#alert1CancelButton").click(function() {
			doRemove;
			$("#alert1Container").fadeOut();
			alert1On = false;
		});
	}
	if(doShow) {
		$("#alert1Container").fadeIn();
		$("#alert1Container").css({display: "flex"});
	}
}
$(function() {
	window.alert = alert1;
});