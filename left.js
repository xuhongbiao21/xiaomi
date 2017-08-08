/**
 * Created by TCKJ on 2017/6/19.
 */

$(function () {
//				为了让他在页面一进来的时候就让定位到我规定位置
    var l = $('.jingshuiqi').offset().left;//获得图片距离左边的距离
    // alert(l)

    $('.left').css({'left': l - 100 + 'px'});//之后把它赋给楼层

    $(window).resize(function () {//让Window自动变化
//					获得box距离左侧的距离
        var l = $('.jingshuiqi').offset().left;
        // console.log(l)
        $('.left').css({'left': l - 100 + 'px'});


    })

})

$(window).scroll(function () {
    // offset().top;//元素距离顶部的距离
    // offset().left;//元素距离左边的距离
    var STop = $('#lunbotu').offset().top;//轮播图距离顶部的距离
    // console.log(STop)
    var NTop = $(window).scrollTop();//滚动条距离顶部的距离

    if (NTop >= STop) {//当滚动条大于明星单品距离顶部的高度就让他显示，小于它让它隐藏；
        $('.left').show();
    } else {//否则隐藏
        $('.left').hide();




    }

    var lunbotu = $('#lunbotu').offset().top;//轮播图距离顶部的高度
    var mingxingdanpin = $('#dakuang').offset().top;//明星单品距离顶部的高度
    var zhinengyingjian = $('#tab').offset().top;//智能硬件距离顶部的高度
    var weinituijian = $('#dierkuang2').offset().top;//你的推荐距离顶部的高度
    var neirong = $('#dkneirong').offset().top;//内容距离顶部的高度
    var dibu = $('#dibu').offset().top;//底部距离顶部的高度
// var jiadian=$('#dibu').offset().top;//底部距离顶部的高度


    $('.left .one').click(function () {
        $(this).index();

        lunbotu = $('#daohang').offset().top;

        $('body').stop().animate({'scrollTop': lunbotu}, 300);

    })

    $('.left .two').click(function () {
        $(this).index();

        mingxingdanpin = $('.title').offset().top-50;

        $('body').stop().animate({'scrollTop': mingxingdanpin}, 300);

    })

    $('.left .there').click(function () {
        $(this).index();

        zhinengyingjian = $('#tab').offset().top-50;
        // alert(t)
        $('body').stop().animate({'scrollTop': zhinengyingjian}, 300);

    })


    $('.left .four').click(function () {
        $(this).index();

        weinituijian = $('#dierkuang2').offset().top-50;

        $('body').stop().animate({'scrollTop': weinituijian}, 300);

    })

    $('.left .five').click(function () {
        $(this).index();

        neirong = $('#dkneirong').offset().top-50;

        $('body').stop().animate({'scrollTop': neirong}, 300);

    })

    $('.left .six').click(function () {
        $(this).index();

        dibu = $('#dibu').offset().top-50;

        $('body').stop().animate({'scrollTop': dibu}, 300);

    })

    $('.left .seven').click(function () {

        $('body').stop().animate({'scrollTop': 0}, 300);



    })



    // $(this).index();

//						如果当前的滚动条高度在i号元素与i+1元素之间
    if (NTop > lunbotu && mingxingdanpin) {

        // console.log(i);

        $('.left li').eq(0).css({'background': '#D70B1C'}).siblings('li').css({'background': '#918888'});
        console.log(lunbotu)
        console.log(NTop)
        // alert(2)
    }


    if (NTop > mingxingdanpin - 51 && zhinengyingjian) {

        // console.log(i);

        $('.left li').eq(1).css({'background': '#D70B1C'}).siblings('li').css({'background': '#918888'});
        // console.log(p)
        // alert(2)
    }

    if (NTop > zhinengyingjian - 51) {

        // console.log(i);

        $('.left li').eq(2).css({'background': '#D70B1C'}).siblings('li').css({'background': '#918888'});
        // console.log(p)
        // alert(2)
    }

    if (NTop > weinituijian - 51) {

        // console.log(i);

        $('.left li').eq(3).css({'background': '#D70B1C'}).siblings('li').css({'background': '#918888'});
        // console.log(p)
        // alert(2)
    }

    if (NTop > neirong - 51) {

        // console.log(i);

        $('.left li').eq(4).css({'background': '#D70B1C'}).siblings('li').css({'background': '#918888'});
        // console.log(p)
        // alert(2)
    }

    if (NTop > neirong + 51) {

        // console.log(i);

        $('.left li').eq(5).css({'background': '#D70B1C'}).siblings('li').css({'background': '#918888'});
        // console.log(p)
        // alert(2)
    }

})