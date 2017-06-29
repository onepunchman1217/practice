
//获取屏幕宽度
var docWidth = document.documentElement.clientWidth;
//获取屏幕高度
var docHeight = document.documentElement.clientHeight;

//获取轮播文字
var buttonWords = document.getElementsByClassName('button_words')[0];
//获取轮播按钮及白线的父亲
var pointLineBox = document.getElementsByClassName('point-line_box')[0];
//获取小白点上面的border，hover的时候border变大
var buttonBorder = document.getElementsByClassName('button-border');
//图片数组
var arrUlimg = ["img/ulImg/9.jpg","img/ulImg/10.jpg","img/ulImg/1.jpg","img/ulImg/2.jpg","img/ulImg/3.jpg","img/ulImg/4.jpg","img/ulImg/5.jpg","img/ulImg/6.jpg","img/ulImg/7.jpg","img/ulImg/8.jpg","img/ulImg/9.jpg","img/ulImg/10.jpg","img/ulImg/1.jpg"];

//获取轮播图ul
var ulImg = document.getElementsByClassName('slider-ul')[0];
var str = '';

//生成li到轮播图ul
for(var i=0;i<arrUlimg.length;i++){
	str += '<li class="slider-li"></li>';
}
ulImg.innerHTML = str;

//获取li
var liImg = ulImg.getElementsByClassName('slider-li');
console.log(liImg)

//轮播图li添加属性
for(var i=0;i<arrUlimg.length;i++){
	liImg[i].style.cssText = 'left:'+i*docWidth+'px;background:url('+arrUlimg[i]+');background-size:cover;'
}

//轮播图第一张第二张隐藏
liImg[0].style.display = 'none';
liImg[1].style.display = 'none';

//设置hover时候开关
var onOffSlide = true;
liImg[2].onmouseenter = function(){
	if(!onOffSlide)return;
	Mtween({
		el:ulImg,
		target:{
			left:-docWidth*1.7
		},
		time:500,
		fx:'linear'
	})
}
liImg[2].onmouseleave = function(){
	if(!onOffSlide)return;
	Mtween({
		el:ulImg,
		target:{
			left:-docWidth*1.5
		},
		time:500,
		fx:'linear'
	})
}

var timerSlide = null;
var numSlide = 0;
liImg[2].onclick = function(){
	onOffSlide = false;
	pointLineBox.style.left = -162+'px';
	Mtween({
		el:buttonWords,
		target:{
			left:0
		},
		time:500,
		fx:'linear'
	})
	Mtween({
		el:pointLineBox,
		target:{
			top:0
		},
		time:500,
		fx:'linear'
	})
	Mtween({
		el:ulImg,
		target:{
			left:-docWidth*2
		},
		time:500,
		fx:'linear',
		callBack:function(){
			liImg[0].style.display = 'block';
			liImg[1].style.display = 'block';
			timerSlide = setInterval(function(){
				numSlide++;
				if(numSlide < 11){
					Mtween({
						el:pointLineBox,
						target:{
							left:-148*numSlide-14
						},
						time:500,
						fx:'linear'
					})
					Mtween({
						el:buttonWords,
						target:{
							left:-160*(numSlide-1)
						},
						time:500,
						fx:'linear'
					})
					Mtween({
						el:ulImg,
						target:{
							left:-docWidth*(numSlide+1)
						},
						time:500,
						fx:'linear',
						callBack:function(){}
					})
				}
				else{
					ulImg.style.left = -docWidth + 'px';
					numSlide=0;
				}
			},1000)
		}
	});
	//拖拽
//	ulImg.onmousedown = function(ev){
//		clearInterval(timerSlide);
//		ev.preventDefault();
//		var oldx = ev.clientX;
//		var oldUlimg = ulImg.offsetLeft;
//		console.log(oldUlimg);
//		console.log(numSlide);
//		document.onmousemove = function(ev){
//			var newx = ev.clientX;
//			var disx = oldx-newx;
//			ulImg.style.left = oldUlimg-(oldx-newx)+'px';
//		}
//		document.onmouseup = function(ev){
//			var evUp = ev.clientX;
//			var disUp = oldx-evUp;
//			if(disUp>50){
//				numSlide--;
//				console.log(numSlide);
//				Mtween({
//					el:ulImg,
//					target:{
//						left:(numSlide-2)*docWidth
//					},
//					time:500,
//					fx:'linear',
//					callBack:function(){}
//				})
//				Mtween({
//					el:pointLineBox,
//					target:{
//						left:-162-(148*-numSlide)-14
//					},
//					time:500,
//					fx:'linear',
//					callBack:function(){}
//				})
//				Mtween({
//					el:buttonWords,
//					target:{
//						left:-160*(-numSlide)
//					},
//					time:500,
//					fx:'linear'
//				})
//			}
//			if(disUp<-50){
//				numSlide++;
//				console.log(numSlide);
//				Mtween({
//					el:ulImg,
//					target:{
//						left:(numSlide-2)*docWidth
//					},
//					time:500,
//					fx:'linear',
//					callBack:function(){}
//				})
//				Mtween({
//					el:pointLineBox,
//					target:{
//						left:-162-(148*-numSlide)-14
//					},
//					time:500,
//					fx:'linear',
//					callBack:function(){}
//				})
//				Mtween({
//					el:buttonWords,
//					target:{
//						left:-160*(-numSlide)
//					},
//					time:500,
//					fx:'linear'
//				})
//
//			}
//			document.onmousemove = null;
//			document.onmouseup = null;
//		}
//	}
	
	
	
	liImg[2].onclick = null;
}

for(var i=0;i<buttonBorder.length;i++){
	buttonBorder[i].index = i;
	buttonBorder[i].onmouseenter = function(){
		this.style.cssText = 'width:48px;height:48px'
	}
	buttonBorder[i].onmouseleave = function(){
		this.style.cssText = '';
	}
	buttonBorder[i].onclick = function(){
		clearInterval(timerSlide);
		ulImg.style.left = -(this.index+2)*docWidth + 'px';
		Mtween({
			el:pointLineBox,
			target:{
				left:-162-148*this.index-14
			},
			time:500,
			fx:'linear',
			callBack:function(){}
		})
	}
}

































































































