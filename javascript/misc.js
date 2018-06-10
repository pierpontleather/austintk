
function slickActive() {   
    $('.productimage__thumbnail--list').slick({});
    $('.productimage__thumbnail--list').slickLightbox({
        src: 'src',
        itemSelector: '.image-item > img',
        background: 'rgba(255,255,255,.9)'
    });

}


function slickZoom() {
    $('.button-slider-next').on('click', function(e) {
        $('.productimage__thumbnail--list').slick('slickNext');
    });
    $('.button-slider-previous').on('click', function (e) {
        $('.productimage__thumbnail--list').slick('slickPrev');
    });

/*    $('.productimage__thumbnail--list').on('click', function (event, slick, currentSlide, nextSlide) {
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
    }); */
} 

export { slickZoom, slickActive };