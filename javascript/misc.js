
$(document).ready(function () {
    $('.productimage__thumbnail--list').slick({
        slidesToShow: 1,
        focusOnSelect: true,
        //centerMode: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
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
});


$('.productimage__thumbnail--list').on('click', function (event, slick, currentSlide, nextSlide) {
    var $selectedImageUrl = $('.slick-current div li a').attr('href');
    var $overlayImageMain = $('.productimage__container > img');
    var $overlay = $('.overlay');
    var $mainProductPhoto = $('ul.slick-slider img');
    
    // Set overlay image to selected image in slider
    $overlayImageMain.attr('src', $selectedImageUrl);

    //On main slider click, open overlay
    $mainProductPhoto.on('click', function (event) {
       $overlay.addClass("overlay-show");
       $('body').addClass("body__is-zoomed");
    });
    //On overlay click, close overlay
    $overlay.on('click', function (event) {
        $overlay.removeClass("overlay-show");
        $('body').removeClass("body__is-zoomed");
        $('.productimage__thumbnail--list').slick('setPosition');
    });
    
  
});



/*
$(document).ready(function () {
    var $mainProductPhoto = $('.productimage__thumbnail--list .slick-current>div>li');

   
    $mainProductPhoto.zoom({ on: "click" });

    $('.productimage__thumbnail--list').on('click', function (event, slick, currentSlide, nextSlide) {
        var $selectedImageUrl = $('.slick-current div li a').attr('href');
        var $overlayImageMain = $('.productimage__container > img');
        var $overlay = $('.overlay');
        var $mainProductPhoto = $('.productimage__thumbnail--list .slick-current>div>li');

        $mainProductPhoto.zoom({ on:"click" });

       
       

        });
      
  
});

*/

