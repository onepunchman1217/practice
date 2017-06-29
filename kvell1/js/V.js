//左右的按钮动作
//logo运动以及标题运动
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
},200)
timer3 = setTimeout(function(){
	$('.text-word-2').html('designed');
	$('.text-word-2').css({
		'top':'0',
		'transition':'1s',
		'opacity':1
	});
},500)
timer4 = setTimeout(function(){
	$('.text-word-3').html('for');
	$('.text-word-3').css({
		'top':'0',
		'transition':'1s',
		'opacity':1
	});
},1000)
timer5 = setTimeout(function(){
	$('.text-word-4').html('everyday');
	$('.text-word-4').css({
		'top':'60px',
		'transition':'1s',
		'opacity':1
	});
},1500)
timer6 = setTimeout(function(){
	$('.text-word-5').html('living.');
	$('.text-word-5').css({
		'top':'60px',
		'transition':'1s',
		'opacity':1
	});
},2000)
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
},3000)
//按钮的hover
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
	}),
	$('.button-menu img').css({
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
	}),
	$('.button-menu img').css({
		transition:'0.4s',
		'transform':'rotate(0)'
	})
})
//hover loolbook
$('.button-lookbook').hover(function(){
	$('.button-Lookbook_circle_move').css({
		transition:'0.4s',
		'opacity':'0.5'
	}),
	$('.button-Lookbook_circle_word').css({
		transition:'0.4s',
		'opacity':'1'	,
		right:'60px'
	}),
	$('.button-lookbook_circle_icon').css({
		transition:'0.4s',
		'transform':'rotate(-90deg)'
	})
},
function(){
	$('.button-Lookbook_circle_move').css({
		transition:'0.4s',
		'opacity':'0'
	}),
	$('.button-Lookbook_circle_word').css({
		transition:'0.4s',
		'opacity':'0'	,
		right:'10px'
	}),
	$('.button-lookbook_circle_icon').css({
		transition:'0.4s',
		'transform':'rotate(0)'
	})
})
//点击左侧按钮效果
var onOff = true;
$('.button-menu').click(function(){
	if(onOff){
		$('.c-nav').css('left','0');
		$('.c-nav').css('zIndex','100');
		$('.btn-and-word').css('display','none');
		$('.button-menu_circle_b').css('display','block');
		$('.button-menu_circle_b').css('background','#101010');
		$('.button-menu_circle_icon').css('display','none');
		$('.button-menu_circle_b img').css('display','block');
		onOff = false;
	}else{
		$('.c-nav').css('left','-50%');
		$('.btn-and-word').css('display','block');
		$('.button-menu_circle_b').css('display','none');
		$('.button-menu_circle_icon').css('display','block');
		$('.button-menu_circle_b img').css('display','none');
		onOff = true;
	}
})
//hover .button-discover
$('.button-discover').hover(function(){
	$(this).css({
		'transform':'scale(1.3)',
		'transition':' 0.4s'
	})
},
function(){
	$(this).css({
		'transform':'scale(1)',
		'transition':' 0.4s'
	})
})
//click lookbook跳转
$('.button-lookbook').click(function(){
	window.location.href = 'lookbook/lookbook.html';
})