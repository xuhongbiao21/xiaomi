/**
 * Created by TCKJ on 2017/6/15.
 */
//		为你推荐开始
$(function(){
    q = 0;//大总管变量默认0

    $("#dierkuang2 .mxdptitle .wntjdianji1").click(function() {//给a标签加点击事件
        q--;
        if(q<=0){
            q=0;
        }
        var l = q * -1226;
        $("#dierkuang2 .weinituijian").stop().animate({ "left": l + "px" },500);//计算C号图片移动的left
    });
    $("#dierkuang2 .mxdptitle .wntjdianji2").click(function() { //给a标签加点击事件
        q++;
        if(q>=3){
            q=3;
        }
        var l = q * -1226;
        $("#dierkuang2 .weinituijian").stop().animate({ "left": l + "px" },500)//计算C号图片移动的left
    });

})