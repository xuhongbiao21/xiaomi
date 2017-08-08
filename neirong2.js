/**
 * Created by TCKJ on 2017/6/15.
 */
$(function () {
$('.neirong').each(function () {

    // var jqthis=$(this);//div序号

     var jsthis=$(this)[0];//原声写法
    // console.log(jqthis)
  //   console.log(jsthis)
    jsthis.n=0;
})



        $(".neirong").mouseenter(function () {//a标签加上点击事件
            var jsthis = $(this)[0];//原声写法
            // console.log($(this))

            // console.log($(this))

            var jqthis = $(this);//div序号

            // console.log(jsthis)

            // clearInterval(jsthis.timer);
            $(this).find('.dianji22').off('click');

            $(this).find('.dianji22').click(function(){

                jsthis.n++;//将每个js里n这个属性自增

                if (jsthis.n > 3) {

                    jsthis.n =3;
                }

                jqthis.find(".nrongul").stop().animate({'left': -300 * jsthis.n + 'px'}, 400);//计算left值//ul移动

                jqthis.find(".heidian").eq(jsthis.n).css({
                    'background': '#FBF3EE',
                    'box-sizing': 'border-box',
                    'border': '2px solid #F49D00'
                }).siblings('.heidian').css({'background': '#B0B0B0', 'border': '0'});//小点移动
            })
            $(this).find('.dianji11').off('click');

            $(this).find('.dianji11').click(function(){

                jsthis.n--;//将每个js里n这个属性自增

                if (jsthis.n<=-1) {

                    jsthis.n = 0;
                }

                jqthis.find(".nrongul").stop().animate({'left': -300 * jsthis.n + 'px'}, 400);//计算left值//ul移动

                jqthis.find(".heidian").eq(jsthis.n).css({
                    'background': '#FBF3EE',
                    'box-sizing': 'border-box',
                    'border': '2px solid #F49D00'
                }).siblings('.heidian').css({'background': '#B0B0B0', 'border': '0'});//小点移动
            })

            $(this).find('.heidian').click(function(){

                      jsthis.n=$(this).index();

                jqthis.find(".nrongul").stop().animate({'left': -300 * jsthis.n + 'px'}, 400);//计算left值//ul移动

                jqthis.find(".heidian").eq(jsthis.n).css({
                    'background': '#FBF3EE',
                    'box-sizing': 'border-box',
                    'border': '2px solid #F49D00'
                }).siblings('.heidian').css({'background': '#B0B0B0', 'border': '0'});//小点移动

            })
        })




});
