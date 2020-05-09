$(function() {
	//导航菜单 移入移除
	$('.header-nav ul li').hover(function() {
		// $(this).siblings().children('.nav-title').removeClass('nav-active');
		// $(this).find('.nav-title').addClass('nav-active');
		$(this).find('.second-menu').stop().slideDown('fast');
	}, function() {
		$(this).find('.second-menu').stop().slideUp('fast');
	})

	var flage = true;
	//点击向上
	$('.dowicon').click(function() {

		if (flage) {
			$(this).parents('.btn-fix-jisuan').animate({
				'bottom': '0px'
			}, function() {
				$(this).find('.dowicon').removeClass('animatedown')
				flage = !flage;
				console.log(flage)
			})
		} else {
			$(this).parents('.btn-fix-jisuan').animate({
				'bottom': '-376px'
			}, function() {
				$(this).find('.dowicon').addClass('animatedown')
				flage = !flage;
			})
		}

	})

	//底部固定验证
	$('.jsbuttom').click(function() {
		layui.use('layer', function() {
			var layer = layui.layer;
			var $username = $('.b-fix-form .fixusername').val(),
				$userarea = $('.b-fix-form .fixuserarea').val(),
				$userphone = $('.b-fix-form .fixuserphone').val();

			if ($username == '') {
				layer.tips('请输入您的昵称', '.fixusername', {
					tips: [1, '#279b6c'] //还可配置颜色
				});
				return
			}
			if ($userarea == '') {
				layer.tips('请输入房屋面积', '.fixuserarea', {
					tips: [1, '#279b6c'] //还可配置颜色
				});
				return
			}
			if ($userphone == '') {
				layer.tips('请输入手机号', '.fixuserphone', {
					tips: [1, '#279b6c'] //还可配置颜色
				});
				return
			}else{
				var test = /^[1]([3-9])[0-9]{9}$/.test($userphone);
				if(!test){
					layer.tips('请输入正确的手机号', '.fixuserphone', {
						tips: [1, '#279b6c'] //还可配置颜色
					});
					return
				}
				layer.msg('感谢您的提交！', {icon: 6},function(){
					$('.b-fix-form .fixusername').val('');
					$('.b-fix-form .fixuserarea').val('');
					$('.b-fix-form .fixuserphone').val('');
				});
			}
		});
	});
	
	//设计师详情页面提交表单
	$('.yybtn').click(function(){
		
	})

})
