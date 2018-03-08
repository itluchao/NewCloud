$(document).ready(function() {
	$(".long_input,.logon_yanzheng").focus(function(event) {
		$(this).css('border','1px solid #6fb3ff')
	});
	$(".long_input,.logon_yanzheng").blur(function(event) {
		$(this).css('border','1px solid #ccc')
	});
	/*---------------------验证码计时-----------------------*/
	var timer = null;
	$(".send_yanzheng_btn").click(function(event) {
		var time_num = 60;
		$(this).attr("disabled","disabled").css("color","#999");
		clearInterval(timer);
		timer = setInterval(function(){
			time_num--;
			$(".send_yanzheng_btn").val(time_num+"秒后重新获得");
			if (time_num ==0) {
				clearInterval(timer);
				$(".send_yanzheng_btn").css("color","#333").val('获取验证码').removeAttr("disabled");
			}
		},1000)
	});
	$(".bind_phone_yanzheng").click(function(event) {
		var time_num = 60;
		$(this).attr("disabled","disabled").css("background","#909090");
		clearInterval(timer);
		timer = setInterval(function(){
			time_num--;
			$(".bind_phone_yanzheng").val(time_num+"秒后重新获得");
			if (time_num ==0) {
				clearInterval(timer);
				$(".bind_phone_yanzheng").css("background","#2d8ff3").val('获取验证码').removeAttr("disabled");
			}
		},1000)
	});
	/*---------------------手机号格式验证-----------------------*/
	$(".logon_phone").focus(function(){
		$(".phone_info_msg").removeClass('error').html('')
	});
	$(".logon_phone").blur(function(){
		if (!(/^1[34578]\d{9}$/.test($(this).val()))) {
			$(".phone_info_msg").addClass('error').html('请输入正确的手机号')
		}
	});
	/*---------------------验证码不能为空验证-----------------------*/
	$(".logon_yanzheng").focus(function(){
		$(".yanzheng_info_msg").removeClass("error").html("")
	})
	$(".logon_yanzheng").blur(function(event) {
		if ($(this).val() == '') {
			$(".yanzheng_info_msg").addClass("error").html("请输入验证码")
		}
	});	
	/*---------------------账号密码格式验证-----------------------*/
	$(".logon_id").focus(function(event) {
		$(".id_info_msg").removeClass("error")
	});
	$(".logon_id").blur(function(event) {
		if(!(/^[a-zA-Z]+\w{7,14}$/.test($(this).val()))){
			$(".id_info_msg").addClass("error")
		}
	});
	$(".logon_password").focus(function(event) {
		$(".pasword_info_msg").removeClass("error")
	});
	$(".logon_password").blur(function(event) {
		if(!(/^\w{8,15}$/.test($(this).val()))){
			$(".pasword_info_msg").addClass("error")
		}
		if($(".logon_repassword").val()!= ''){
			$(".logon_repassword").blur()
		}
	});
	/*---------------------两次密码一致验证-----------------------*/
	$(".logon_repassword").blur(function(event) {
		if($(this).val() == ''){
			$(".repasword_info_msg").addClass("error").html("请再次输入密码")
		}else if($(this).val()!= $(".logon_password").val()) {
			$(".repasword_info_msg").addClass("error").html("两次密码不一致")
		}else{
			$(".repasword_info_msg").removeClass("error").html("")
		}
	});
	/*---------------------点击注册提交判断-----------------------*/
	$(".submit_btn").click(function(event) {
		$(".logon_content input").each(function(index, el) {
			$(this).blur();
		});
		if ($(".logon_content .error").length == 0) {
			alert(1)
		}
	});
});