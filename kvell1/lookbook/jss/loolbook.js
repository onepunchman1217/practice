//生成图片
$.ajax({
	url:'jss/M.js',
	success:function(data){
		var str = eval('('+data+')')
		//console.log(eval(str)[0])
		var Data = eval(str);
		console.log(Data)
		$('a').each((i,el)=>{
		$(el).append($(`<img src=${Data[i].imglook} class="img-responsive" />
				<div class="info-size${i}">
					<span class="info-font1">${Data[i].font1}</span>
					<span class="info-font2">${Data[i].font2}</span>
				</div>`));
	})
	}
})
//鼠标移入与移出
$('.container a').mouseover(function(){
	$('.container div').eq($(this).index('a')).css({
		'transition':'.8s',
		'transform':'scale(1.3)',
		'opacity':1
	});
	$('.info-font1').eq($(this).index('a')).css({
		'transition':'.8s',
		'transform':'translateY(-134px)',
		'opacity':1
	});
		$('.info-font2').eq($(this).index('a')).css({
		'transition':'.8s',
		'transform':'translateY(-140px)',
		'opacity':1
		})

})
$('.container a').mouseout(function(){
	$('.container div').eq($(this).index('a')).css({
		'transition':'.8s',
		'transform':'scale(1)',
		'opacity':0
	});
	$('.info-font1').eq($(this).index('a')).css({
		'transition':'.8s',
		'transform':'translateY(50px)',
		'opacity':0
	});
	$('.info-font2').eq($(this).index('a')).css({
		'transition':'.8s',
		'transform':'translateY(70px)',
		'opacity':1
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
	$('.button-lookbook_circle img').css({
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
	$('.button-lookbook_circle img').css({
		transition:'0.4s',
		'transform':'rotate(0)'
	})
}
)