//layui
layui.use('carousel', function() {
	var carousel = layui.carousel;
	//轮播图
	carousel.render({
		elem: '#test1',
		width: '100%',
		height: '600px',
		arrow: 'hover',
		autoplay: true,
		interval: 3000
	});
});

//表单
layui.use('form', function() {
	var form = layui.form;
	//监听提交
	form.on('submit(formDemo)', function(data) {
		layer.msg(JSON.stringify(data.field));
		return false;
	});
});


$(function() {
	//价格随机数
	function numrandom() {
		var numRandom = Math.floor(Math.random() * (10 - 1) + 1);
		return numRandom
	}
	// 随机价格
	function jgrandom() {
		var jzys = ['108080', '56324', '85645', '76542', '65478', '28954', '95624'];
		var cljg = ['12000', '36452', '32154', '32166', '16666', '14525', '38545'];
		var gljg = ['4560', '2456', '3245', '1564', '5462', '4785', '1235', '1456'];
		setInterval(function() {
			//家装价格
			$('.jzys-01 .price-01').html(jzys[numrandom()]);
			//材料费
			$('.jzys-02 .price-02').html(cljg[numrandom()]);
			//人工费
			$('.jzys-03 .price-02').html(cljg[numrandom()]);
			//管理费
			$('.jzys-04 .price-02').html(gljg[numrandom()]);
			//管理费
			$('.jzys-05 .price-02').html(gljg[numrandom()]);
		}, 180)
	}
	jgrandom()
	
	//案例轮播图
	 var caseSwiper = new Swiper ('.swiper-case', {
	    loop: true,
	    pagination: {
	      el: '.swiper-pagination',
	    },
	    navigation: {
	      nextEl: '.swiper-button-next',
	      prevEl: '.swiper-button-prev',
	    },
	  });
		  
	  //新闻轮播图
	   var newsSwiper = new Swiper ('.swiper-news', {
	      loop: true, 
	      pagination: {
	        el: '.swiper-pagination',
	      },
	      navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev',
	      }
	    })   
			 
		//装修百科
		var zxbkSwiper = new Swiper ('.zxbk-swiper-c', {
	      loop: true,
	      pagination: {
	        el: '.swiper-pagination',
			clickable :true,
	      },
	    }) 
})




