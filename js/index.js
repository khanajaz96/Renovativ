



// $(document).ready(function(){
    
//   // Menu Function
 
  
//   // Window scroll function
  
  
// });
(function () {
  $('.nav-button').click(function(){ 
    $('.nav-button, .side-nav, .nav-header, .nav-options').toggleClass('nav-open'); 
    return false;
});

// Food Menu function
$('.nav-link.the-menu').click(function(){
    $('.nav-button, .side-nav, .nav-header, .nav-options').removeClass('nav-open');
    $('.menu-container').addClass('displayed');
    return false;
});

// closing the menu-overlay
$('.close, .menu-container').click(function(){ $('.menu-container').removeClass('displayed'); return false;});
// preventing clicks on the menu closing it for now because there is nothing inside yet.
$('.tab.menu-tab').click(function(){ return false; }); 
    "use strict";
  
    var car = function () {
      $(".owl-carousel1").owlCarousel({
        loop: true,
        center: true,
        margin: 0,
        responsiveClass: true,
        nav: false,
        autoplay:true,
      autoplayTimeout:2800,
      autoplayHoverPause:true,
        responsive: {
          0: {
            items: 1,
            nav: false
          },
          680: {
            items: 2,
            nav: false,
            loop: true,
          },
          1000: {
            items: 3,
            nav: true
          }
        }
      });
    };
  
    (function ($) {
      car();
    })(jQuery);
  })();

  jQuery(document).ready(function(){
    $(".dropdown").hover(
        function() { $('.dropdown-menu', this).fadeIn("fast");
        },
        function() { $('.dropdown-menu', this).fadeOut("fast");
    });
});