import { constructCart, cartItemCounts, slideOutContainer } from './cart.js';
//import miscMode from './misc.js';
import { slickZoom, slickActive } from './misc.js';

$(document).ready(function() {
    slickActive();
});
slickZoom();

constructCart();

$(document).on('cart.requestComplete', function (event, cart) { 
    cartItemCounts();
});

$('.product-add-to-cart').click(function () { 
    slideOutContainer();
});