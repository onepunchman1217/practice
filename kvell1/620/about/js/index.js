//logo
$(document).ready(function(){
	$('.title-about').css({
		top:'100px',
		opacity:'1',
		transition:'2s'
	}),
	setTimeout(function(){
		$('.text-word').css({
			top:'310px',
			transition:'2s'
		})
	},500)
})
//menu  hover
$('.button-menu').hover(function(){
	$('.button-menu_circle_move').css({
		transition:'0.4s',
		'opacity':'0.5'
	}),
	$('.button-menu_circle_word').css({
		transition:'0.4s',
		'opacity':'1'	,
		left:'70px'
	}),
	$('.button-menu_circle_icon').css({
		transition:'0.4s',
		'transform':'rotate(90deg)'
	})
},
function(){
	$('.button-menu_circle_move').css({
		transition:'0.4s',
		'opacity':'0'
	}),
	$('.button-menu_circle_word').css({
		transition:'0.4s',
		'opacity':'0'	,
		left:'30px'
	}),
	$('.button-menu_circle_icon').css({
		transition:'0.4s',
		'transform':'rotate(0)'
	})
})
//滚轮效果
$word = $('.word-dec');
window.onscroll = function(){
	if($(window).scrollTop()>90){
		$word.css({
			transition:'1s',
			top:'650px'
		})
	}
}
//click
$('.button-menu').click(function(){
	window.location.href = '../firstpage/index.html';
})
//click 下面的按钮
$('.content2-btn1').click(function(){
	window.location.href = '../contact/contact.html';
})
