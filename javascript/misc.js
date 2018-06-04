
function slickActive() {
    $('.productimage__thumbnail--list').slick({
        slidesToShow: 1,
        focusOnSelect: true,
        arrows: false,
        //centerMode: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ], 
        infinite: true,
        dots: true
    });
}
function slickZoom() {
    $('.button-slider-next').on('click', function(e) {
        $('.productimage__thumbnail--list').slick('slickNext');
    });
    $('.button-slider-previous').on('click', function (e) {
        $('.productimage__thumbnail--list').slick('slickPrev');
    });

    $('.productimage__thumbnail--list').on('click', function (event, slick, currentSlide, nextSlide) {
        var $selectedImageUrl = $('.slick-current div li a').attr('href');
        var $overlayImageMain = $('.productimage__container > img');
        var $overlay = $('.overlay');
        var $mainProductPhoto = $('ul.slick-slider img');
        $overlayImageMain.attr('src', $selectedImageUrl);

        if ($overlay.hasClass("overlay-show")) {
            console.log("overlay-show");
            $overlay.removeClass("overlay-show");
            $('body').removeClass("body__is-zoomed");
            $('.productimage__thumbnail--list').slick('setPosition');
        } else {
            console.log("overlay not show");
            $overlay.addClass("overlay-show");
            $('body').addClass("body__is-zoomed");
        }
    });

    $('.overlay').on('click', function (event) {
        var $selectedImageUrl = $('.slick-current div li a').attr('href');
        var $overlayImageMain = $('.productimage__container > img');
        var $overlay = $('.overlay');
        var $mainProductPhoto = $('ul.slick-slider img');
        //console.log(event);
        // Set overlay image to selected image in slider
        $overlayImageMain.attr('src', $selectedImageUrl);

        if ($overlay.hasClass("overlay-show")) {
            console.log("overlay-show");
            $overlay.removeClass("overlay-show");
            $('body').removeClass("body__is-zoomed");
            $('.productimage__thumbnail--list').slick('setPosition');
        } else {
            console.log("overlay not show");
            $overlay.addClass("overlay-show");
            $('body').addClass("body__is-zoomed");
        }
    });
} 

export { slickZoom, slickActive };