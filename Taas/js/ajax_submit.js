function delete_ajax(obj,fn){
	var repasswordUrl = obj.attr('href');
	obj.parent().append('<div id="mask_confirm_box"><div class="confirm_box delete_box"><h3>确认'+obj.html()+'</h3><div class="con_cancel_box clearfix"><span class="sure fl">确定</span><span class="cancel fr">取消</span></div></div></div>');
	obj.parent().find('.sure').click(function(event) {
		$("#mask_confirm_box").remove();
		$.ajax({
			url: repasswordUrl,
			type: 'post',
			dataType: 'json',
			data: {param1: 'value1'},
		})
		.done(function(data) {
			if(data.status == '1'){
				fn(obj);
			}else{
				alert(data.info);
			}					
		})
		.fail(function(data) {
			//alert('请刷新重试');
		})
		.always(function() {
			fn(obj);
		});
	});
	$(".cancel").click(function(event) {
		$("#mask_confirm_box").remove();
	});
	
}
function repassOk(obj){
	obj.parent().append('<div id="mask_confirm_box"><div class="confirm_box repassword_complete_box"><span id="close"></span><h3>密码重置成功！</h3><p>重置密码为：111111</p></div></div>');
	obj.parent().find('#close').click(function(event) {
		$("#mask_confirm_box").remove();
	});
}	
function disable(){
	location.reload();   
}