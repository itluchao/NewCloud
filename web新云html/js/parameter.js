$(document).ready(function() {
	var bOk_01 = false;
	var bOk_02 = false;
	$(".hidden_arr_btn").eq(0).on('touchstart',function(event) {
		if(!bOk_01){
			$(this).css({
				WebkitTransition:'1s all ease',
				WebkitTransform: 'rotate(180deg)'
			});
			$(".content_05 > div").slideDown('slow');
			$(".hidden_arr_btn").eq(1).css({
				WebkitTransition:'1s all ease',
				WebkitTransform: 'rotate(0deg)'
			});
			$(".content_06 > div").slideUp('slow');
			bOk_01 = true;
			bOk_02 = false;
		}else{
			$(this).css({
				WebkitTransition:'1s all ease',
				WebkitTransform: 'rotate(0deg)'
			});
			$(".content_05 > div").slideUp('slow');
			bOk_01 = false;
		}
	});
	$(".hidden_arr_btn").eq(1).on('touchstart',function(event) {
		if(!bOk_02){
			$(this).css({
				WebkitTransition:'1s all ease',
				WebkitTransform: 'rotate(180deg)'
			});
			$(".content_06 > div").slideDown('slow');
			$(".hidden_arr_btn").eq(0).css({
				WebkitTransition:'1s all ease',
				WebkitTransform: 'rotate(0deg)'
			});
			$(".content_05 > div").slideUp('slow');
			bOk_02 = true;
			bOk_01 = false;
		}else{
			$(this).css({
				WebkitTransition:'1s all ease',
				WebkitTransform: 'rotate(0deg)'
			});
			$(".content_06 > div").slideUp('slow');
			bOk_02 = false;
		}
	});	
	/*点击显示下拉框*/
	$(".masking").css('height', $(window).height()); 
	$(".empty_btn").click(function(event) {
		$(".shopcar_buynow_btn_box").show();
		$(".foot_buy").fadeOut('slow');
		$(document.body).css({
		   	"overflow-x":"auto",
		   	"overflow-y":"auto"
		});
	});
	$(".shopcar_buynow_btn_box span").click(function(event) {
		$(".shopcar_buynow_btn_box").hide();
		$(".foot_buy").fadeIn('slow');
		/*$('body').bind('touchmove',function(event){event.preventDefault();});*/
		$(document.body).css({
		  "overflow-x":"hidden",
		  "overflow-y":"hidden"
		});
	});
	$(".close_btn").click(function(event) {
		$(".shopcar_buynow_btn_box").show();
		$(".foot_buy").fadeOut('slow');
		/*$('body').unbind('touchmove');*/
		$(document.body).css({
		   "overflow-x":"auto",
		   "overflow-y":"auto"
		 });
	});
	/*点击下部显示*/
	$(".zhuji_color_box span").each(function(index, el) {
		$(this).click(function(event) {
			$(this).addClass('on').siblings('span').removeClass('on');
			$(".zhuti_color_value").attr('value',$(".zhuji_color_box .on").attr('color_value'));
		});
	});
	/*$(".tiepian_color_box span").each(function(index, el) {
		$(this).click(function(event) {
			$(this).addClass('on').siblings('span').removeClass('on');
			$(".tiepian_color_value").attr('value',$(".tiepian_color_box .on").attr('color_value'));
		});
	});*/
	/*获取订单颜色*/
	var count = 1;
	$(".count").html(count);
	$(".minus").click(function(event) {
		count--;
		if (count <= 1) {
			count = 1;
			$(".minus").css('background-image', 'url(img/red_bkd.png)');
		}else if(count > 1){
			$(".minus").css('background-image', 'url(img/red_kd.png)');
		}
		$(".count").html(count);
		$(".num input").val(count)
	});
	$(".add").click(function(event) {
		count++;
		$(".count").html(count);
		if(count > 1){
			$(".minus").css('background-image', 'url(img/red_kd.png)');
		}
		$(".num input").val(count)
	});	
	/*获取数量*/
	$(".top").each(function(index, el) {
		$(this).on('touchstart',function(index, el){
			$(this).addClass('on').siblings('.top').removeClass('on');
			$(".con_box").eq($(this).index()-1).show().siblings('div').hide();
		})
	});
});