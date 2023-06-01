$(function(){
	//鼠标移入导航栏时
	$(".nav-link").mouseenter(function(){
		
		var ycq = $(this)
		var ycTime01 = setTimeout(yrFun,500);
		function yrFun(){
			clearTimeout(ycTime01)
			ycq.siblings(".extend").css("display","block")
		}
		
	})
	//鼠标移出
	$(".nav-item").mouseleave(function(){
		$(this).children("div").children(".extend").css("display","none")
	})
	$(".nav").mouseleave(function(){
		$(".extend").css("display","none")
	})
	
	
})
//鼠标移入加入我们图标时
$(".lxfs-wx").mouseenter(function(){
	$(this).attr("src","img/index-wxz.png");
	//微信二维码出
	$(this).parent(".lx-tu").siblings(".ewm-xs").css({"display":"block","background":"url(img/weixinlxfs.png) no-repeat 0 0/100% 100%"})
})
$(".lxfs-qq").mouseenter(function(){
	$(this).attr("src","img/index-qqz.png");
	//qq二维码出
	$(this).parent(".lx-tu").siblings(".ewm-xs").css({"display":"block","background":"url(img/qqlxfs.jpg) no-repeat 0 0/100% 100%"})
})
//鼠标移出加入我们图标时
$(".lxfs-wx").mouseleave(function(){
	$(this).attr("src","img/WeiXing.png");
	$(this).parent(".lx-tu").siblings(".ewm-xs").css("display","none")
})
$(".lxfs-qq").mouseleave(function(){
	$(this).attr("src","img/QQ.png");
		$(this).parent(".lx-tu").siblings(".ewm-xs").css("display","none")
})

//鼠标移入圆图标时
$(".yyqq").mouseenter(function(){
	$(this).css({"background":"blue","border":"none"})
	$(this).children("img").attr("src","img/xaingshang.png")
})
//鼠标移出圆图标时
$(".yyqq").mouseleave(function(){
	$(this).css({"background":"none","border":"solid 1px rgb(19,34,122)"})
	$(this).children("img").attr("src","img/xiangshang1.png")
})
//鼠标移入san_he_yi 时 line事件
$(".san_he_yi").mouseenter(function(){
	$(this).siblings(".line").css("border-top","solid 3px #100aab")
	$(this).siblings(".line").children("h2").css({"color":"#555555","margin-left":"90%"})
})
//鼠标移出san_he_yi 时 line事件
$(".san_he_yi").mouseleave(function(){
	$(this).siblings(".line").css("border-top","solid 2px #d0d0d0")
	$(this).siblings(".line").children("h2").css({"color":"#4f0fcf","margin-left":"3%"})
})
