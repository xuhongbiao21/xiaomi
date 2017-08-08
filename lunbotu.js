/**
 * Created by TCKJ on 2017/6/15.
 */
//轮播图开始
$(function () {
    var c = 0;



    function jbk() {
        $("#lunbotu .zz").eq(c).stop().fadeIn(400).siblings('img').stop().fadeOut(400);

//让c号li变色
        $("#lunbotu .lunbodian li").eq(c).stop().css({'background': '#FBF3EE'}).siblings('li').css({'background': '#7F6A53'})
    }
    var timer = setInterval(flash, 2000);//定时器调用

    function flash() {

        c++;
        if (c == 5) {
            c = 0
        }
        jbk();
    };

    $('#lunbotu').mouseenter(function () {
        clearInterval(timer)
    })
    $('#lunbotu').mouseleave(function () {
        timer = setInterval(flash, 2000)
    })
//给li加鼠标移入事件
    $("#lunbotu .lunbodian li").mouseenter(function () {
        clearInterval(timer);
        c =$(this).index();

        timeOUT = setTimeout(function(){
//			调用函数
            jbk();
        },500)
    });


//	移出事件
    $("#lunbotu .lunbodian li").mouseleave(function () {
        clearTimeout(timeOUT);
        timer = setInterval(flash, 2000)
    });


//             a标签点击事件1
    $("#lunbotu .dj1").click(function () {
        c--;
//			调用函数
        if (c == -1) {
            c = 4
        }
        jbk();
    })
    //             a标签点击事件2
    $("#lunbotu .dj2").click(function () {
        c++;
        if (c == 5) {
            c = 0
        }
        jbk();
    })

})