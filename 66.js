$(function () {
    q=0;//大总管变量
$("#dakuang .dianji1").click(function () {//a标签加上点击事件
    q--;
    if(q<=0){
        q=0;
    }
    var l=q*-300;
    $("#dakuang ul").stop().animate({'left':l+'px'},400)//计算left值

    $("#dakuang .dian .heidian").eq(q).css({'background':'#FBF3EE'}).siblings('.heidian').css({'background':'greenyellow'});
})


    $("#dakuang .dianji2").click(function () {//a标签加上点击事件
        q++;
        if(q>3){
            q=3;
        }
        var l=q*-300;
        $("#dakuang ul").stop().animate({'left':l+'px'},400)//计算left值

        $("#dakuang .dian .heidian").eq(q).css({'background':'#FBF3EE'}).siblings('.heidian').css({'background':'greenyellow'});
    })


    $("#dakuang .dian .heidian").click(function () {//给小圆点加点击事件
        q=$(this).index();//当前的序号
        var l=q*-300;
        $("#dakuang ul").stop().animate({'left':l+'px'},400)//计算left值
        $("#dakuang .dian .heidian").eq(q).css({'background':'#FBF3EE'}).siblings('.heidian').css({'background':'greenyellow'});

    })

})