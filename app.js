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
    })

    $(".next-btn").click(function () {
        $(".carousel").slick("slickNext");
    });

    $('.popup').on('click', function () {
        $('.img-overlay').addClass('img-overlay-open');
        var $clone = $(this).clone();
        $('.zoom-img').empty().append($clone);
        $('body').addClass('removeScroll');

        setTimeout(function () {
            $clone.find('.carousel').slick('unslick');
            $clone.find('.carousel').slick({
                slidesToScroll: 1,
                infinite: false,
                slidesToShow: 4,
                dots: true,
                autoplay: true,
                autoplaySpeed: 5000
            });
        }, 500);
    });

    $(".close-btn").click(function () {
        $(".img-overlay").removeClass("img-overlay-open");
        $(".zoom-img").empty();
        $("body").removeClass("removeScroll")
    });
})
