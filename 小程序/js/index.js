;(function(win,doc){
	function change (){
		doc.documentElement.style.fontSize = 20*doc.documentElement.clientWidth/750+'px';
	}
	change();
	win.addEventListener('resize',change,false);
})(window,document);
$(document).ready(function() {
	$(".close_btn").click(function(event) {
		$(".down_app_box").hide()
	});
});

















