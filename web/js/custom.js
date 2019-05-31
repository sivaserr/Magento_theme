require(['jquery'],function($){

    $(document).ready(function(){
    var owl = $('#owlslider');
    owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
    });
    
});



$(document).ready(function(){

var menuLeft = document.getElementById('cbp-spmenu-s1'),
menuRight = document.getElementById('cbp-spmenu-s2'),
menuTop = document.getElementById('cbp-spmenu-s3'),
menuBottom = document.getElementById('cbp-spmenu-s4'),
showLeftPush = document.getElementById('showLeftPush'),
showRightPush = document.getElementById('showRightPush'),

body = document.body;

showLeftPush.onclick = function() {
classie.toggle(this, 'active');
classie.toggle(body, 'cbp-spmenu-push-toright');
classie.toggle(menuLeft, 'cbp-spmenu-open');

};
showRightPush.onclick = function() {

classie.toggle(body, 'cbp-spmenu-push-toleft');
classie.toggle(menuRight, 'cbp-spmenu-open');

};
showRightPush.onclick = function() {

classie.toggle(body, 'cbp-spmenu-push-toleft');
classie.toggle(menuRight, 'cbp-spmenu-open');

};
$(showLeftPush_2).click(function(){
	$("body").removeClass("cbp-spmenu-push-toright");
	$(".cbp-spmenu-left").removeClass("cbp-spmenu-open")
});
//showRightPush_2
$(showRightPush_2).click(function(){
	$("body").removeClass("cbp-spmenu-push-toleft");
	$(".cbp-spmenu-right").removeClass("cbp-spmenu-open")
});
});


});