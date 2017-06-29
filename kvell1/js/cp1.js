//大图数组
var arrcp1fd = ["img/cp1/big/1.jpg","img/cp1/big/2.jpg","img/cp1/big/3.jpg","img/cp1/big/4.jpg","img/cp1/big/5.jpg","img/cp1/big/6.jpg"];
var arrcp1 = ["img/cp1/1.png","img/cp1/2.png","img/cp1/3.png","img/cp1/4.png","img/cp1/5.png","img/cp1/6.png"];
//获取屏幕高度
var docHeight = document.documentElement.clientHeight;

console.log(docHeight)
//console.log(docWidth)

var picture = document.getElementsByClassName('picture')[0];
var str = '';
for(var i=0;i<arrcp1.length/2;i++){
	str += `<div class="picture-floor1">
				<div class="picture-floor1-box1">
					<p class="picture-floor1-box1-zz"></p>
					<img _src="${arrcp1[i*2]}"/>
				</div>
				<div class="picture-floor1-box2">
					<p class="picture-floor1-box2-zz"></p>
					<img _src="${arrcp1[i*2+1]}"/>
				</div>
			</div>`
}

picture.innerHTML = str;




$('.picture-floor1-box1').css({'height':'400','width':'600'})
$('.picture-floor1-box1-zz').css({'height':'400','width':'600'})
$('.picture-floor1-box1 img').css({'height':'400','width':'600'})

$('.picture-floor1-box2').css({'height':'400','width':'600'})
$('.picture-floor1-box2-zz').css({'height':'400','width':'600'})
$('.picture-floor1-box2 img').css({'height':'400','width':'600'})
	


//获取所有装着图片的盒子
var $boxs = $('div[class*="picture-floor1-box"]');
console.log($boxs);
//懒加载
function fnbox(){
	$boxs.each(function(i,elem){
		if(elem.getBoundingClientRect().top<=docHeight){
			//console.log($(elem).find('img').attr('_src'))
			if($(elem).find('img').attr('_src')){
				$(elem).find('img').attr('src',$(elem).find('img').attr('_src'));
				$(elem).find('img').css('opacity',1);
				$(elem).find('img').removeAttr('_src')
			}
		}
//		console.log(elem)
		$(elem).mouseenter(function(){
			$(elem).find('p').css('opacity',0.5);
		});
		$(elem).mouseleave(function(){
			$(elem).find('p').css('opacity',0);
		});
	})
}
fnbox();
$(window).scroll(fnbox);

//获取长度，让i>len的时候等于0
var len = $boxs.length-1;
console.log(len)
$boxs.each(function(i,elem){
	//点击出现大图遮罩层
	$(elem).click(function(){
		$('.bigzhezhao').css('display','block');
		console.log(arrcp1fd[i])
		$('.bigzhezhaodatu').attr('src',arrcp1fd[i]);
	})
	$('.bigzhezhaoLeft').click(function(){
		i--;
		if(i<0){
			i = 5;
		}
//		console.log(i)
		$('.bigzhezhaodatu').attr('src',arrcp1fd[i]);
	})
	$('.bigzhezhaoRight').click(function(){
		i++;
		if(i>len){
			i = 0;
		}
		$('.bigzhezhaodatu').attr('src',arrcp1fd[i]);
	})
})

$('.beijing').click(function(){
	$('.bigzhezhao').css('display','none');
})
