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
/*
if (document.querySelector('.foo-button')) {
    mdc.ripple.MDCRipple.attachTo(document.querySelector('.foo-button'));
}

if (document.querySelector('.mdc-text-field')) {
    mdc.textField.MDCTextField.attachTo(document.querySelector('.mdc-text-field'));
}

if (document.querySelector('.mdc-floating-label')) {
    mdc.floatingLabel.MDCFloatingLabel.attachTo(document.querySelector('.mdc-floating-label'));
}

if (document.querySelector('.mdc-line-ripple')) {
    mdc.lineRipple.MDCLineRipple.attachTo(document.querySelector('.mdc-line-ripple'));
}
*/

window.mdc.autoInit();

