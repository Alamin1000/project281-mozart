(function ($) {
  "use strict";

  // offcanvas-js
  $(".offcanvas-open").click(function () {
    $(".offcanvas-menu").addClass("active");
    $(".offcanvas-overlay").addClass("active");
  });
  $(".offcanvas-menu a").click(function () {
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(".close-offcanvas").click(function () {
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(document).mouseup(function (e) {
    var container = $(".offmenu");

    // If the target of the click isn't the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $(".offcanvas-menu").removeClass("active");
      $(".offcanvas-overlay").removeClass("active");
    }
  });

  // owl-carousel
  $(".hero-slider-active").owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    nav: false,
    dots: false,
    items: 1,
    navText: [
      '<span class="fas fa-chevron-left fa-2x"></span>',
      '<span class="fas fa-chevron-right fa-2x"></span>',
    ],
  });
  function owlInitialize() {
    let slider = $(".remixed__mobile__slider");
    if ($(window).width() < 767) {
      slider.addClass("owl-carousel");
      slider.owlCarousel({
        loop: true,
        margin: 19,
        responsiveClass: true,
        nav: false,
        dots: false,
        navText: [
          '<span class="fas fa-chevron-left fa-2x"></span>',
          '<span class="fas fa-chevron-right fa-2x"></span>',
        ],
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
        },
      });
    } else {
      slider.owlCarousel("destroy");
      slider.removeClass("owl-carousel");
    }
  }
  $(document).ready(function (e) {
    owlInitialize();
  });
  $(window).resize(function () {
    owlInitialize();
  });

  $(".beforeAfter").beforeAfter({
    movable: true,
    clickMove: true,
    position: 60,
    separatorColor: "#fafafa",
    bulletColor: "#fafafa",
    onMoveStart: function (e) {
      console.log(event.target);
    },
    onMoving: function () {
      console.log(event.target);
    },
    onMoveEnd: function () {
      console.log(event.target);
    },
  });
})(jQuery);

$(document).ready(function () {
  // scroll up
  $(function () {
    $.scrollUp();
  });

  // preloader
  $("#preloader").fadeOut(500);
});
