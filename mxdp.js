/**
 * Created by TCKJ on 2017/6/15.
 */
//		明星单品开始
$(function(){
    var d= 0;
    //      定时器函数
    function foo() {
        d++;
        d = d == 2 ? 0 : d;
        //              计算c号图片对应的left
        var l = d * -1226;
        //	                      让大div移动到指定位置
        $("#dakuang  .mxdpul").stop().animate({ "left": l + "px"}, 1000);
        //             让c号a标签变样式
        $("#dakuang .title a").eq(d).css({ 'color': "#BFB4B0" }).siblings('a').css({ 'color': "#E1DDDC" })
    }
    //                	定时器函数结束
    //			定时器
    var timer = setInterval(foo, 4000);
    //		给a标签加点击事件
    $("#dakuang .title .dianji1").click(function() {
        //			获得点击a标签的序号
//            q = $(this).index();
        //				计算C号图片移动的left
        d--;
        if(d<=0){
            d=0;
        }
        var l = d * -1226;
        $("#dakuang  .mxdpul").stop().animate({ "left": l + "px"},500)
        $("#dakuang .title a").eq(d).css({ 'color': "#BFB4B0" }).siblings('a').css({ 'color': "#E1DDDC" })
    });
    $("#dakuang .title .dianji2").click(function() {
        //			获得点击a标签的序号
//            q = $(this).index();
        //				计算C号图片移动的left
        d++;
        if(d<=2){
            d=1;
        }
        var l =d * -1226;
        $("#dakuang  .mxdpul").stop().animate({ "left": l + "px" },500)
        $("#dakuang .title a").eq(d).css({ 'color': "#BFB4B0" }).siblings('a').css({ 'color': "#E1DDDC" })
    });
    //
    $("#dakuang .title a").hover(function() {
        //			移入时清理定时器
        clearInterval(timer);
    }, function() {
        //			移出时恢复定时器
        timer = setInterval(foo, 4000)
    })
})
//		明星单品结束