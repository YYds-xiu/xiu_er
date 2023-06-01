$(function(){
	//----------------一键三连----------------
	var dz = 0;
	var sc = 0;
	var tb = 0;
	var pd1 = 0;
	var pd2 = 0;
	var pd3 = 0;
		//点赞
		$(".sl-dzz").click(function(){
			if(pd1 == 0){
				dz++;
				$(this).children("span").html("<span>"+dz+"</span>");
				$(this).children(".sl-box-dz").attr("src","../img/qita/sl-dz1.png")
				pd1=1;
			}
			else{
				dz=dz-1;
				if(dz <= 0){dz=0;}
				$(this).children("span").html("<span>"+dz+"</span>");
				$(this).children(".sl-box-dz").attr("src","../img/qita/sl-dz.png")
				pd1=0;
			}
			
		});
		//收藏
		$(".sl-scc").click(function(){
			if(pd2 == 0){
				sc++;
				$(this).children("span").html("<span>"+sc+"</span>");
				$(this).children(".sl-box-sc").attr("src","../img/qita/sl-sc1.png")
				pd2=1;
			}
			else{
				sc=sc-1;
				if(sc <= 0){sc=0;}
				$(this).children("span").html("<span>"+sc+"</span>");
				$(this).children(".sl-box-sc").attr("src","../img/qita/sl-sc.png")
				pd2=0;
			}
			
		});
		//投币
		$(".sl-tbb").click(function(){
			if(pd3 == 0){
				tb++;
				$(this).children("span").html("<span>"+tb+"</span>");
				$(this).children(".sl-box-tb").attr("src","../img/qita/sl-tb1.png")
				pd3=1;
			}
			else{
				tb=tb-1;
				if(tb <= 0){tb=0;}
				$(this).children("span").html("<span>"+tb+"</span>");
				$(this).children(".sl-box-tb").attr("src","../img/qita/sl-tb.png")
				pd3=0;
			}
			
		});
	
	
	//点击QQ图标时
	$(".zf-tb-qq").click(function(){
		$(this).attr("src","../img/index-qqz.png")
		$(this).parent("li").parent(".zf-tou-lb").parent(".zf-tou").parent(".zfye").siblings(".zf-ts").html("<h3>老板都点了 不会就看看而已吧 不要让作者寒心啊 （T_T）</h3>")
		$(this).parent("li").parent(".zf-tou-lb").parent(".zf-tou").siblings(".zf-ewm-xs").children("img").attr("src","../img/qita/qq-skm.png");
		$(this).parent("li").parent(".zf-tou-lb").parent(".zf-tou").siblings(".zf-wz").children("img").attr("src","../img/qita/xxlb.gif");
		$(this).parent("li").siblings("li").children(".zf-tb-wx").attr("src","../img/qita/sl-zfb.png")
		$(this).parent("li").siblings("li").children(".zf-tb-wx").attr("src","../img/WeiXing.png")
	});
	//点击wx图标时
	$(".zf-tb-wx").click(function(){
		$(this).attr("src","../img/index-wxz.png")
		$(this).parent("li").parent(".zf-tou-lb").parent(".zf-tou").siblings(".zf-ewm-xs").children("img").attr("src","../img/qita/wx-skm.png");
		$(this).parent("li").parent(".zf-tou-lb").parent(".zf-tou").siblings(".zf-wz").children("img").attr("src","../img/qita/xxlb.gif");
		$(this).parent("li").siblings("li").children(".zf-tb-qq").attr("src","../img/QQ.png")
		$(this).parent("li").siblings("li").children(".zf-tb-wx").attr("src","../img/qita/sl-zfb.png")
	});
	//点击zfb图标时
	$(".zf-tb-zfb").click(function(){
		$(this).attr("src","../img/qita/sl-zfb1.png")
		$(this).parent("li").parent(".zf-tou-lb").parent(".zf-tou").siblings(".zf-ewm-xs").children("img").attr("src","../img/qita/zfb-skm.jpg");
		$(this).parent("li").parent(".zf-tou-lb").parent(".zf-tou").siblings(".zf-wz").children("img").attr("src","../img/qita/xxlb.gif");
		$(this).parent("li").siblings("li").children(".zf-tb-qq").attr("src","../img/QQ.png")
		$(this).parent("li").siblings("li").children(".zf-tb-wx").attr("src","../img/WeiXing.png")
	});
	//鼠标移出zffffff之后
	$(".zffffff").mouseleave(function(){
		$(this).children(".zf-ts").html("<h3>自作不易啊 老板投点币啊</h3>")
		$(this).children(".zfye").children(".zf-tou").children(".zf-tou-lb").children("li").children(".zf-tb-qq").attr("src","../img/QQ.png")
		$(this).children(".zfye").children(".zf-tou").children(".zf-tou-lb").children("li").children(".zf-tb-wx").attr("src","../img/WeiXing.png")
		$(this).children(".zfye").children(".zf-tou").children(".zf-tou-lb").children("li").children(".zf-tb-zfb").attr("src","../img/qita/sl-zfb.png")
		$(this).children(".zfye").children(".zf-ewm-xs").children("img").attr("src","../img/qita/bbbt.jpeg")
		$(this).children(".zfye").children(".zf-wz").children("img").attr("src","../img/qita/jjbq.jpeg")
		
	});
	/*人工智能 ai页 人工智能发展历程js*/
	$(".sjd1").mouseenter(function(){
		$(this).parent(".ai-fz-sj-jd").siblings(".ai-fz-jd-text").children(".ai-fzlc-text").html("<b>起步发展期:人工智能概念提出后，相继取得了一批令人瞩目的研究成果，如机器定理证明、跳棋程序等，掀起人工智能发展的第一个高潮。</b>");
	})
	$(".sjd2").mouseenter(function(){
		$(this).parent(".ai-fz-sj-jd").siblings(".ai-fz-jd-text").children(".ai-fzlc-text").html("<b>反思发展期:人工智能发展初期的突破性进展大大提升了人们对人工智能的期望，人们开始尝试更具挑战性的任务，并提出了一些不切实际的研发目标。然而，接二连三的失败和预期目标的落空（例如，无法用机器证明两个连续函数之和还是连续函数、机器翻译闹出笑话等），使人工智能的发展走入低谷。</b>");
	})
	$(".sjd3").mouseenter(function(){
		$(this).parent(".ai-fz-sj-jd").siblings(".ai-fz-jd-text").children(".ai-fzlc-text").html("<b>应用发展期:20世纪70年代出现的专家系统模拟人类专家的知识和经验解决特定领域的问题，实现了人工智能从理论研究走向实际应用、从一般推理策略探讨转向运用专门知识的重大突破。专家系统在医疗、化学、地质等领域取得成功，推动人工智能走入应用发展的新高潮。</b>");
	})
	$(".sjd4").mouseenter(function(){
		$(this).parent(".ai-fz-sj-jd").siblings(".ai-fz-jd-text").children(".ai-fzlc-text").html("<b>低迷发展期:随着人工智能的应用规模不断扩大，专家系统存在的应用领域狭窄、缺乏常识性知识、知识获取困难、推理方法单一、缺乏分布式功能、难以与现有数据库兼容等问题逐渐暴露出来。</b>");
	})
	$(".sjd5").mouseenter(function(){
		$(this).parent(".ai-fz-sj-jd").siblings(".ai-fz-jd-text").children(".ai-fzlc-text").html("<b>稳步发展期:由于网络技术特别是互联网技术的发展，加速了人工智能的创新研究，促使人工智能技术进一步走向实用化。1997年国际商业机器公司（简称IBM）深蓝超级计算机战胜了国际象棋世界冠军卡斯帕罗夫，2008年IBM提出“智慧地球”的概念。以上都是这一时期的标志性事件。</b>");
	})
	$(".sjd6").mouseenter(function(){
		$(this).parent(".ai-fz-sj-jd").siblings(".ai-fz-jd-text").children(".ai-fzlc-text").html("<b>蓬勃发展期:随着大数据、云计算、互联网、物联网等信息技术的发展，泛在感知数据和图形处理器等计算平台推动以深度神经网络为代表的人工智能技术飞速发展，大幅跨越了科学与应用之间的“技术鸿沟”，诸如图像分类、语音识别、知识问答、人机对弈、无人驾驶等人工智能技术实现了从“不能用、不好用”到“可以用”的技术突破，迎来爆发式增长的新高潮。</b>");
	})
	//移出变原样
	$(".ai-fz-jd-sj").mouseleave(function(){
		$(this).parent(".ai-fz-sj-jd").siblings(".ai-fz-jd-text").children(".ai-fzlc-text").html("<b>想知道人工智能的发展历程吗？点上面时间（->_<-）</b>");
	})
	
	/*班级详情简介页 banjijianjie页 班级发展历程js*/
	$(".js-ks").click(function(){
		$(this).parent(".bjxq-fz-nr-ti").siblings(".bjxq-fz-nr-text").html("<span>2023年6月毕业季。所以我们要各自奔赴自己的未来了。是结束-也是新的开始。</span>")
	})
	$(".qd-xy").click(function(){
		$(this).parent(".bjxq-fz-nr-ti").siblings(".bjxq-fz-nr-text").html("<span>2020年10月开学。我们经历了高考延迟，但丝毫不影响我们万年不变的成绩（ ^ _ ^ ）。我们到了这里。是新的起点-也是缘分的相遇</span>")
	})
	$(".bjxq-fzlc").mouseleave(function(){
		$(this).children(".bjxq-fz-nr").children(".bjxq-fz-nr-text").html("<span>再见啦 故事里的人</span>")
	})
})