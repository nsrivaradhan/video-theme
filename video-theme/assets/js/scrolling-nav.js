//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    
    if ($(".navbar").offset().top > 40) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        //$("div#nav_WD").addClass("ul_wd_scroll");
        //$("div#nav_WD").removeClass("ul_wd");
    }
   // console.log($(".navbar").offset());
});

$(window).on("load",function(){
    if ($(".navbar").offset().top > 40){
     $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
}
    
});
//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        //console.log($anchor);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
        //console.log($('html,body'));
    });
    $("a.home_WD").click(function(){
        console.log("hello");
        $("html,body").animate({scrollTop:0},1500);
    });
});
