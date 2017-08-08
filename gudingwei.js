/**
 * Created by TCKJ on 2017/6/19.
 */
$(window).scroll(function () {
    if (parseInt(scrollY) > 650) {
        $(".guding").animate().fadeIn(200).css({'position': 'fixed', 'z-index': '100000', 'display': 'block','z-index': '66666666666'}, 1);
    } else {
        $(".guding").animate().fadeOut(200).css({'display': 'none'}, 1);
    }

})