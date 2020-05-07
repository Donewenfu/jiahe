$(function(){
	//导航菜单 移入移除
	$('.header-nav ul li').hover(function(){
		$(this).siblings().children('.nav-title').removeClass('nav-active');
		$(this).find('.nav-title').addClass('nav-active');
		$(this).find('.second-menu').stop().slideDown('fast');
	},function(){
		$(this).find('.second-menu').stop().slideUp('fast');
	})
	
	
	
	
})