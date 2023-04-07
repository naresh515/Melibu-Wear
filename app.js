$(document).ready(function () {
    $('.carousel').slick({
        variableWidth: true,
        arrows: true,
        slidesToScroll: 1,
        infinite: true,
        slidesToShow: 1,
        dots: false,
        autoplay: false,
        speed: 800,
    })

    $(".next-btn").click(function () {
        var currentSlide = $(this).closest(".first-img-slider");
        var nextSlide = currentSlide.next(".first-img-slider");
        nextSlide.show();
        currentSlide.hide();
    });

    $('.popup').click(function () {
        $(".img-overlay").addClass("img-overlay-open");
        $(this).clone().appendTo(".zoom-img");
        $("body").addClass("removeScroll")
    });

    $(".close-btn").click(function () {
        $(".img-overlay").removeClass("img-overlay-open");
        $(".zoom-img").empty();
        $("body").removeClass("removeScroll")
    });
})
