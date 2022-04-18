AOS.init();
$(".step").click(function () {
    $(this).addClass("active").prevAll().addClass("active");
    $(this).nextAll().removeClass("active");
});

$(".step01").click(function () {
    $("#line-progress").css("width", "100%");
    $(".discovery").addClass("active1").siblings().removeClass("active1");
});

$(".step02").click(function () {
    $("#line-progress").css("width", "50%");
    $(".strategy").addClass("active1").siblings().removeClass("active1");
});

$(".step03").click(function () {
    $("#line-progress").css("width", "100%");
    $(".creative").addClass("active1").siblings().removeClass("active1");
});

$(".step04").click(function () {
    $("#line-progress").css("width", "75%");
    $(".production").addClass("active1").siblings().removeClass("active1");
});

$(".step05").click(function () {
    $("#line-progress").css("width", "100%");
    $(".analysis").addClass("active1").siblings().removeClass("active1");
});