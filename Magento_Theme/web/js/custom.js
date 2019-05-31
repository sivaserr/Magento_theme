// define([
//     "jquery",
//     "owlcarousel"
//   ], 
//   function($) {
//     "use strict";
  
//       $(document).ready(function($){

        console.log('hhh');
         
        /* HOME banner carousel */
jQuery(function($) {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1,
                nav:true,
                loop:true
            }
        }
    });
});

/* HOME second category carousel */
jQuery(function($) {

    function counter(event) {
        var element   = event.target;         // DOM element, in this example .owl-carousel
        var items     = event.item.count;     // Number of items
        var item      = event.item.index + 1;     // Position of the current item
        // it loop is true then reset counter from 1
        if(item > items) {
        item = item - items
        }
        $('#counter').html(""+item+"")
        }
    $('.single-slide-carousel').owlCarousel({
loop:true,
margin:10,
dots:true,
nav:false,
dotsEach:true,
responsiveClass:true,
onInitialized  : counter, //When the plugin has initialized.
onTranslated : counter, //When the translation of the stage has finished.
responsive:{
    0:{
        items:1,
        nav:false
    },
    600:{
        items:1,
        nav:false
    },
    1000:{
        items:1,
        loop:true,
        nav:false
    }
}

});

});


//       });
//       return;
//   });


