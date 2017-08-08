/**
 * Created by TCKJ on 2017/6/15.
 */
//		导航二级菜单开始
$(function () {

    var win_width=$(window).width();
    $("#daohang ul li .yinchangqu").css({'width':win_width+'px','margin-left':(-win_width/2)});

    //给当前、li加效果
    $("#daohang ul li").mouseenter(function () {
        $(this).find('.yinchangqu').show();//让其显示

        $(this).find('.yinchangqu').stop().animate({'height':'230px'},300);//当前li显示
        $(this).siblings('li').find('.yinchangqu').stop().css({'height':'230px'}).hide();
    })

    $(window).resize(function () {//.resize调整大小
        var win_width=$(window).width();
        $("#daohang ul li .yinchangqu").css({'width':win_width+'px','margin-left':(-win_width/2)});
    })

    //给li加鼠标移出效果
    $("#daohang ul li").mouseleave(function () {
        $(this).find('.yinchangqu').stop().animate({'height':'0px'},300);

    })
});

//导航二级菜单结束
