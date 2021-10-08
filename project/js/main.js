$(function () {
  "use strict";

  new WOW().init();

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 500) {
      $(".nav").addClass("shadow-nav");
    } else {
      $(".nav").removeClass("shadow-nav");
    }
  });
});
