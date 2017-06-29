//logo运动
var timer2 = null;
var timer3 = null;
var timer4 = null;
var timer5 = null;
var timer6 = null;
var timer7 = null;
timer2 = setTimeout(function(){
	//$('.logo').html('LOGO');
	$('.logo').css({
		'top':'50px',
		'transition':'1s'
	});
	$('.text-word-1').html('Proudly');
	$('.text-word-1').css({
		'top':'0',
		'transition':'1s',
		'opacity':1
	});
},2000)
timer3 = setTimeout(function(){
	$('.text-word-2').html('designed');
	$('.text-word-2').css({
		'top':'0',
		'transition':'1s',
		'opacity':1
	});
},2500)
timer4 = setTimeout(function(){
	$('.text-word-3').html('for');
	$('.text-word-3').css({
		'top':'0',
		'transition':'1s',
		'opacity':1
	});
},3000)
timer5 = setTimeout(function(){
	$('.text-word-4').html('everyday');
	$('.text-word-4').css({
		'top':'60px',
		'transition':'1s',
		'opacity':1
	});
},3500)
timer6 = setTimeout(function(){
	$('.text-word-5').html('living.');
	$('.text-word-5').css({
		'top':'60px',
		'transition':'1s',
		'opacity':1
	});
},4000)
timer7 = setTimeout(function(){
	$('.button-menu').css({
		'top':'50px',
		'transition':'1s',
		'opacity':1
	});
	$('.button-lookbook').css({
		'top':'50px',
		'transition':'1s',
		'opacity':1
	});
},4000)