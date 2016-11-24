/**
 * @author    	AxingPlus
 * @date    	2016-11-24
 * @info    	Background
 * @blog		http://www.meowv.com
 */
function Background($move,$sudu){
	var $img_num=$('#Background').children('img').length;
	var $img_show=1;
	switch($move){
		case 1:
			$("#Background img").css({width:"120%",height:"120%",top:"-10%",left:"-10%"});
			$("#Background img[name='1']").css({display:"block"})
			.animate({width:"100%",height:"100%",top:"0",left:"0"},$sudu-1000);
			setInterval(function(){
				$("#Background img[name='"+$img_show+"']").fadeOut(100);
				$img_show++;$img_show=$img_show>$img_num?'1':$img_show;
				$("#Background img[name='"+$img_show+"']").css({width:"120%",height:"120%",top:"-10%",left:"-10%"}).fadeIn(1000)
				.animate({width:"100%",height:"100%",top:"0",left:"0"},$sudu-1000);
			},$sudu);
		break;
		case 2:
			$("#Background img[name='1']").css({display:"block"})
			.animate({width:"120%",height:"120%",top:"-10%",left:"-10%"},$sudu-1000);
			setInterval(function(){
				$("#Background img[name='"+$img_show+"']").fadeOut(100);
				$img_show++;$img_show=$img_show>$img_num?'1':$img_show;
				$("#Background img[name='"+$img_show+"']").css({width:"100%",height:"100%",top:"0%",left:"0%"}).fadeIn(1000)
				.animate({width:"120%",height:"120%",top:"-10%",left:"-10%"},$sudu-1000);
			},$sudu);
		break;
		case 3:
			$("#Background img[name='1']").css({display:"block"});
			setInterval(function(){
				$("#Background img[name='"+$img_show+"']").fadeOut($sudu);
				$img_show++;$img_show=$img_show>$img_num?'1':$img_show;
				$("#Background img[name='"+$img_show+"']").fadeIn($sudu);
			},$sudu);
		break;
	}
}