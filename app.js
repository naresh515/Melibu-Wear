$(document).ready(function () {
    $('.carousel').slick({
        variableWidth: true,
        arrows: false,
        slidesToScroll: 1,
        infinite: true,
        slidesToShow: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
    });

    $(".next-btn").click(function () {
        $('.carousel').slick("slickNext");
    });

    $('.popup').click(function () {
        $('.carousel').slick('unslick');

        $(".img-overlay").addClass("img-overlay-open");
        $(this).clone().appendTo(".zoom-img");
        $("body").addClass("removeScroll");

        $('.zoom-img .carousel').slick({
            variableWidth: true,
            arrows: false,
            slidesToScroll: 1,
            infinite: true,
            slidesToShow: 1,
            dots: true,
            autoplay: true,
            autoplaySpeed: 5000,
        });
        
        $(".next-btn").click(function () {
            $('.carousel').slick("slickNext");
        });
    });

    $(".close-btn").click(function () {
        $(".img-overlay").removeClass("img-overlay-open");
        $(".zoom-img").empty();
        $("body").removeClass("removeScroll");

        $('.carousel').slick({
            variableWidth: true,
            arrows: false,
            slidesToScroll: 1,
            infinite: true,
            slidesToShow: 1,
            dots: true,
            autoplay: true,
            autoplaySpeed: 5000,
        });
    });
});
