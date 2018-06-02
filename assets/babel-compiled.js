'use strict';

function constructCart() {
    var $noProductsInCartYet = $('.no-products-in-cart-message');
    var $freeShippingAndReturns = $('.shipping_returns_cta.slideout');
    var $buttonToCart = $('.button-checkout.slideout');
    var $buttonToCartLink = $('.Slideout__cart-footer a');

    if (CartJS.cart.item_count == 0) {
        $noProductsInCartYet.text("You don't have anything in your bag yet!");
        //Write that they don't have anything in their bag yet
        $noProductsInCartYet.css("display", "inline-block");
        //Display the Nothing in your bag message
        $freeShippingAndReturns.hide();
        //Hide the free shipping CTA
        $buttonToCartLink.attr("href", "/collections");
        $buttonToCart.html("Shop All");

        console.log("youpicked option #1");
    } else {

        //If there are items in cart:
        $noProductsInCartYet.css("display", "none");
        //Do not show the 'no items in bag' message
        $freeShippingAndReturns.css("display", "block");
        //Show Free Shipping CTA
        $buttonToCart.html("Continue to Checkout");
        $buttonToCartLink.attr("href", "/cart");

        console.log("this is option number two");
    }
}

$(document).on('cart.requestComplete', function (event, cart) {
    if (CartJS.cart.item_count === 0) {
        $('.cart-navigation .item-count').removeClass('item-count-full');
    } else {
        $('.cart-navigation .item-count').addClass('item-count-full');
    }

    console.log(CartJS.cart.item_count);
    constructCart();
});

$('.product-add-to-cart').click(function () {
    $('.Slideout__cart-container').addClass('Slideout__cart-hover');
    setTimeout(function () {
        $('.Slideout__cart-container').removeClass('Slideout__cart-hover');
    }, 2000);
});
'use strict';

$(document).ready(function () {
    $('.productimage__thumbnail--list').slick({
        slidesToShow: 1,
        focusOnSelect: true,
        arrows: false,
        //centerMode: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                arrows: false,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                arrows: false,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                arrows: false,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        }],
        infinite: true,
        dots: true
    });
});

$('.button-slider-next').on('click', function (e) {
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
"use strict";