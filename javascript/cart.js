
function constructCart() {
    let $noProductsInCartYet = $('.no-products-in-cart-message');
    let $freeShippingAndReturns = $('.shipping_returns_cta.slideout');
    let $buttonToCart = $('.button-checkout.slideout')
    let $buttonToCartLink = $('.Slideout__cart-footer a');

    if (CartJS.cart.item_count == 0) {
        $noProductsInCartYet.text("You don't have anything in your bag yet!");
        //Write that they don't have anything in their bag yet
        $noProductsInCartYet.css("display", "none", );
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
        $buttonToCartLink.attr("href","/cart");

        console.log("this is option number two");
    }
}



//$(document).on('cart.requestComplete', function (event, cart) { });
function cartItemCounts() {
    if (CartJS.cart.item_count === 0) {
        $('.cart-navigation .item-count').removeClass('item-count-full');
    } else {
        $('.cart-navigation .item-count').addClass('item-count-full');
    }
    
    console.log(CartJS.cart.item_count);
    constructCart();
}

//$('.product-add-to-cart').click(function () { });
function slideOutContainer() {
    $('.Slideout__cart-container').addClass('Slideout__cart-hover');
    setTimeout(function () {
    $('.Slideout__cart-container').removeClass('Slideout__cart-hover');   
    }, 2000);
}


export { constructCart, cartItemCounts, slideOutContainer };

 
