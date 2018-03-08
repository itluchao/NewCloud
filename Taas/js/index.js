$(document).ready(function() {
	$(".system_content_box").css('minHeight', $(window).height());
	$(".no_msg_box").css('height', $(window).height());
	$(window).resize(function(event) {
		$(".system_content_box").css('minHeight', $(window).height());
		$(".no_msg_box").css('height', $(window).height());
	});
	$(".href_btn,.page_num_btn").each(function(index, el) {
		$(this).mouseover(function(event) {
			$(this).addClass('hover');
		});
		$(this).mouseout(function(event) {
			$(this).removeClass('hover')
		});
	});
	$(".page_box").css('marginLeft', -$(".page_box").width()/2);
	
	if ($(".head_my_msg_box .msg_num").html() <= 0) {
		$(".head_my_msg_box .msg_num").css('display', 'none');
	}else if ($(".head_my_msg_box .msg_num").html() >= 99) {
		$(".head_my_msg_box .msg_num").html('99');
	}
});