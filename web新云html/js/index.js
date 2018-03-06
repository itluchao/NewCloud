;(function(win,doc){
	function change (){
		doc.documentElement.style.fontSize = 20*doc.documentElement.clientWidth/750+'px';
	}
	change();
	win.addEventListener('resize',change,false);
})(window,document);

$(document).ready(function() {
	var h=$(window).height();
    $(window).resize(function() {
        if($(window).height()<h){
            $('.foot').hide();
        }
        if($(window).height()>=h){
            $('.foot').show();
        }
    });
});
document.addEventListener('DOMContentLoaded',function(ev){
	var oMenu = document.querySelector('.menu');
	var oM_box = document.querySelector('.menu_box');
	oMenu.addEventListener('touchstart',function(ev){
		oM_box.style.transition = '.5s all ease';
		oM_box.style.WebkitTransform = 'translate3d(0,0,0)';
	})
	/*点击换出菜单键*/
	var oB = document.querySelector("body")
	var oContent = document.querySelector(".content");
	var FZ = parseInt(window.getComputedStyle(oB).fontSize);
	var x = 0;

	oM_box.addEventListener('touchstart',function(ev){
		var downX = ev.targetTouches[0].pageX;
		function move(ev){
			var moveX = ev.targetTouches[0].pageX;
			x = -(downX-moveX)/FZ;
			if(x<0){
				oM_box.style.transition = '0s all ease';
				oM_box.style.WebkitTransform = 'translate3d('+x+'rem,0,0)';
			}
		}
		function end(ev){
			if(x>-4){
				oM_box.style.transition = '.5s all ease';
				oM_box.style.WebkitTransform = 'translate3d(0,0,0)';
			}else{
				oM_box.style.transition = '.5s all ease';	
				oM_box.style.WebkitTransform = 'translate3d(-30rem,0,0)';
			}

			document.removeEventListener('touchmove',move,false);
			document.removeEventListener('touchend',end,false);
		}
		document.addEventListener('touchmove',move,false);
		document.addEventListener('touchend',end,false);
	})
	oContent.addEventListener('touchstart', function(ev){
		oM_box.style.transition = '.5s all ease';	
		oM_box.style.WebkitTransform = 'translate3d(-30rem,0,0)';
	})
})
	


















