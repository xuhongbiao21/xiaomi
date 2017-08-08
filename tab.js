/**
 * Created by TCKJ on 2017/6/15.
 */

//tab切换开始
$(function(){
//	给li加鼠标移入事件

    $("#tab .remen .jiadian").mouseenter(function(){
//		获得序号
        var xh = $(this).index();
//		让xh号con显示,兄弟隐藏
        $('.qiehuanqu').eq(xh).show().siblings().hide()

        $('.jiadian a').css({'color':'#424242'})

        $('.jiadian a').eq(xh).css({'color':'#FF6700'})

        $('.jiadian').eq(xh).fadeIn(400).css({'border-bottom':'2px solid #FF6700'}).siblings().css({'border-bottom':'0'})

    })

})
