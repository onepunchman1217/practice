//页面加载
$(document).ready(function(){
  $('.title-contact').css({
		top:'100px',
		opacity:'1',
		transition:'2s'
	})
})
//menu
$('.button-menu').hover(function(){
	$('.button-menu_circle_move').css({
		transition:'0.4s',
		'opacity':'0.5'
	}),
	$('.button-menu_circle_word').css({
		transition:'0.4s',
		'opacity':'1'	,
		left:'75px'
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
//表单验证
////focus
//$('.inps-all .name').focus(function(){
//$('.sps').eq(0).css('width','100%');
//})
//$('.inps-all .name').blur(function(){
//  $('.sps').eq(0).css('width','0');
//})
//$('.inps-all .company').focus(function(){
//$('.sps').eq(1).css('width','100%');
//})
//$('.inps-all .company').blur(function(){
//  $('.sps').eq(1).css('width','0');
//  
//})
//$('.inps-all .Email').focus(function(){
//$('.sps').eq(2).css('width','100%');
//})
//$('.inps-all .Email').blur(function(){
//  $('.sps').eq(2).css('width','0');
//  
//})
//$('.inps-all .Phone').focus(function(){
//$('.sps').eq(3).css('width','100%');
//})
//$('.inps-all .Phone').blur(function(){
//  $('.sps').eq(3).css('width','0');
//  
//})
//click send  表单验证
$('.content2-btn3').click(function(){
	if($('#name').val() == ''){
      $('.txt').eq(0).css('display','block')
    }else{
      $('.txt').eq(0).css('display','none')
    }
    if($('#company').val() == ''){
      $('.txt').eq(1).css('display','block')
    }else{
      $('.txt').eq(1).css('display','none')
    }
    if($('#Email').val() == ''){
      $('.txt').eq(2).css('display','block')
    }else{
      $('.txt').eq(2).css('display','none')
    }
    if(!/^[a-zA-Z]\w{5,17}@[0-9a-zA-Z]{2,8}\.(com|cn|net)$/.test($('#Email').val())){
      $('.txt').eq(2).css('display','block')
    }
    if($('#Phone').val() == ''){
      $('.txt').eq(3).css('display','block')
    }else{
      $('.txt').eq(3).css('display','none')
    }
    if(!/^1[3|4|5|7|8][0-9]{9}$/.test($('#Phone').val())){
      $('.txt').eq(3).css('display','block')
    }
    if($('input').val()){
    	  window.location.href = '../firstpage/index.html';
    }
})
//click
$('.button-menu').click(function(){
	window.location.href = '../firstpage/index.html';
})
//点击 左侧的按钮
$('.content2-btn1').click(function(){
		$('.inps-all1').css('top','280px');
		$('.inps-all').css('top','100%');
})
$('.content2-btn2').click(function(){
	$('.inps-all').css('top','280px');
	$('.inps-all1').css('top','100%');
})