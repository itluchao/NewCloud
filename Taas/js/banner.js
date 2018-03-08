$(document).ready(function() {
	$(".banner_box a img").each(function(index, el) {
		var len = $(".banner_box a img").length;
		$(this).css('width',$(window).width())
		$(".banner_box").height($(this).height())
		$(".banner_img_box").width(len*$(window).width())
		$(".banner_page_box").css('marginLeft',-$(".banner_page_box").width()/2+'px')
		$(window).resize(function(event) {
			$(".banner_box a img").width($(window).width())
			$(".banner_img_box").width(len*$(window).width())
			$(".banner_box").height($(".banner_img_box").height())
			$(".banner_page_box").css('marginLeft',-$(".banner_page_box").width()/2+'px')
		});
	});
	/*banner宽度自适应*/
	var timer01 = null;
	var timer02 = null;
	var iSpeed = 0;
	var n = 0;
	function move(){
		n++;
		var count = n%$(".banner_img_box a").length;
		$(".banner_page_box span").eq(count).addClass('on').siblings('span').removeClass('on');
		clearInterval(timer02)
		timer02 = setInterval(function(){	
			iSpeed += Math.round((count*$(".banner_img_box a").eq(0).width() + $(".banner_img_box").position().left)/5);
			iSpeed *= 0.5;
			$(".banner_img_box").css('left',-iSpeed+$(".banner_img_box").position().left);
			if(count*$(".banner_img_box a").eq(0).width()+$(".banner_img_box").position().left <= 1){
				$(".banner_img_box").css('left',-count*$(".banner_img_box a").eq(0).width());
			}
			if(Math.round(iSpeed) == 0 && -$(".banner_img_box").position().left == $(".banner_img_box a").eq(0).width()*($(".banner_img_box a").length-1)){	
				clearInterval(timer02);
				$(".banner_img_box").css('left',0);
				n = 0;
			}
			$(".banner_page_box span").eq(n).addClass('on').siblings('span').removeClass('on');
		},16);
	}
	clearInterval(timer01);
	timer01 = setInterval(move,3000);
	$(".banner_box").mouseover(function(){
		clearInterval(timer01);
		$(".banner_page_box span").each(function(index, el) {
			$(this).click(function(event) {
				$(this).addClass('on').siblings('span').removeClass('on');
				$(".banner_img_box").css('left',-index*$(".banner_img_box a").width());
				clearInterval(timer02);
			});
		});
	})
	$(".banner_box").mouseout(function(){
		clearInterval(timer01);
		timer01 = setInterval(move,3000);
	})
});