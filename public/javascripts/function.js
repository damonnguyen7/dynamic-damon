// When DOM is fully loaded
jQuery(document).ready(function ($) {
  "use strict";


  /* -------------------------------------------------------- */
  /* Owl carousel */
  /* -------------------------------------------------------- */

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    items: 1,
    navText: [],
    smartSpeed: 650
  });


  /* ------------------------------------------------------- */
  /* Mobile menu */
  /* ------------------------------------------------------- */

  selectnav('nav', {
    label: 'Navigate to...',
    nested: true,
    indent: '-'
  });


  /* ------------------------------------------------------- */
  /* Isotope */
  /* ------------------------------------------------------- */


  $('.blog-masonry-container').isotope({
    itemSelector: '.blog-masonry-post',
    layoutMode: 'masonry'
  });

  /* ------------------------------------------------------- */
  /* Magnific Popup */
  /* ------------------------------------------------------- */


  $('.popup-with-form').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#name',

    // When elemened is focused, some mobile browsers in some cases zoom in
    // It looks not nice, so we disable it:
    callbacks: {
      beforeOpen: function () {
        if ($(window).width() < 700) {
          this.st.focus = false;
        } else {
          this.st.focus = '#name';
        }
      }
    }
  });


  /* ------------------------------------------------------- */
  /* Custom scrollbar bar */
  /* ------------------------------------------------------- */

  if ($('.scroll-media').height() > 0 && $(window).width() > 971) {
    $('.scroll-content').css({
      'height': $('.scroll-media').height()
    });
  }


  $(".scroll-content").mCustomScrollbar({
    mouseWheel: {
      enable: true
    },
    theme: "dark",
    scrollButtons: {
      enable: false
    },
    mouseWheel: {
      scrollAmount: 400
    },
    advanced: {
      updateOnContentResize: true
    }
  });


  $(window).on('resize', function (e) {
    e.preventDefault();
    if ($('.scroll-media').height() > 0 && $(window).width() > 971) {
      $('.scroll-content').css({
        'height': $('.scroll-media').height()
      });
    }


  });


  /* --------------------------------------------------------	
  	 Color picker - demo only
     --------------------------------------------------------	*/

  (function () {
    $('<div class="color-picker"><a href="#" class="handle"><i class="fa fa-cog"></i></a><div class="settings-header"><h3>Setting panel</h3></div><div class="section"><h4 class="color"><i class="icon-tint"></i> Color schemes:</h4><div class="colors"><a href="#" class="color-1" ></a><a href="#" class="color-2"></a><a href="#" class="color-3"></a><a href="#" class="color-4"></a><a href="#" class="color-5" ></a></div></div></div>').appendTo($('body'));
  })();


  $(".color-1").click(function () {
    $("#color").attr("href", "css/color/color-1.css");
    return false;
  });


  $(".color-2").click(function () {
    $("#color").attr("href", "css/color/color-2.css");
    return false;
  });

  $(".color-3").click(function () {
    $("#color").attr("href", "css/color/color-3.css");
    return false;
  });

  $(".color-4").click(function () {
    $("#color").attr("href", "css/color/color-4.css");
    return false;
  });

  $(".color-5").click(function () {
    $("#color").attr("href", "css/color/color-5.css");
    return false;
  });


  $('.color-picker').animate({
    left: '-239px'
  });

  $('.color-picker a.handle').click(function (e) {
    e.preventDefault();
    var div = $('.color-picker');
    if (div.css('left') === '-239px') {
      $('.color-picker').animate({
        left: '0px'
      });
    } else {
      $('.color-picker').animate({
        left: '-239px'
      });
    }
  });

});