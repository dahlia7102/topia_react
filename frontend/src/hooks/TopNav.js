import React from "react";
import $ from 'jquery';

$(document).ready(function(){
	$('#topnav li').mous(function() {
		$('div', this).slideDown(200);
	}, function() {
		$('div', this).slideUp(100);
	});
	
	if('${LOGIN_ID}'==null || '${LOGIN_ID}'==""){
		alert("세션이 종료되었습니다. 메인으로 이동 후 재로그인하시기 바랍니다.");
		window.location = "${pageContext.request.contextPath}";
	}
});