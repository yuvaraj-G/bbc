$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $("header").addClass("sticky");
        $(".scroll_top").addClass("show_top");
    } else {
        $("header").removeClass("sticky");
        $(".scroll_top").removeClass("show_top");
    }
});

$(".scroll_top a").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

$("a.open").click(function(){
    $(".menus").addClass("res_menu")
});

$("a.close").click(function(){
    $(".menus").removeClass("res_menu")
});


AOS.init({
    duration: 1200,
    once: true,
    duration: 1500
 })