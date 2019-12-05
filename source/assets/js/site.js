// lazysizes
document.addEventListener('DOMContentLoaded', function() {

  window.lazySizesConfig = window.lazySizesConfig || {};
  window.lazySizesConfig.requireJs = function(modules, cb){
    window.require(modules, cb);
  };



// navbar
$(".nav-burger").click(function(){
  $(".nav-link-list").toggleClass("nav-link-list-active");
  $("nav .overlay").toggleClass("active");
});

$("nav .overlay").click(function(){
  $(".nav-link-list").removeClass("nav-link-list-active");
  $(this).toggleClass("active");
});

$(document).ready(function(){

  var nav_height = $('nav').outerHeight();

  function windowSize(){
    if($(window).width() < 768){
      // console.log(nav_height);
      $('.nav-link-list').css('top',nav_height-4);
    }else{
      // console.log(nav_height);
      $('.nav-link-list').css('top','0px');
    }
  };
  windowSize();

  $(window).resize(function(){
  windowSize();
  });
});

  // smooth scrollTo
$('a[href*="#"]:not([href="#"])').click(function(){
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
  var target = $(this.hash);
  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
  if (target.length) {
  $('html, body').stop(0,1).animate({
  scrollTop: target.offset().top-70
  }, 800);
  return;
  }
  }
});

});
