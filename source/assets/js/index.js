$(document).ready(function(){
      // banner
      $('.js-banner').owlCarousel({
        loop   : true,
        margin : 0,
        nav    : false,
        items  : 1,
        autoplay: true
      });

      // news
      $("#news button").click(function(){
          $(".news-item").addClass("active");
          $(this).hide();
      });

      // popup
      var body  = $("body");
      var popup = $(".popup");
      $(".js-popup-open").click(function(){
        var targetBox = "#" + $(this).data("target");
        console.log(targetBox);
        $(targetBox).parent( ".popup" ).fadeIn(100);
        $(targetBox).fadeIn(100).siblings(".popup-box").fadeOut(0);
        body.css("overflow-y","hidden");
      });

      $(".popup .overlay").click(function(){
        popup.fadeOut(0);
        body.css("overflow-y","auto");
      });
      popup.on('click','.popup-close-icon',function(){
        popup.fadeOut(0);
        body.css("overflow-y","auto");
      });

      // support tab 切換
      function clickTab(){
         $('.tab-title').on('click',function(){
          $(this).addClass('tab-tile-active').siblings().removeClass('tab-tile-active');
          $(this).parentsUntil('body').find('.support-cover').eq($(this).index()).addClass('support-active')
          .siblings().removeClass('support-active');
          });

        $(".support-cover").click(function(){
            console.log($(this).index());
          });

      };

      function windowSize(){
        if($(window).width() < 768){
          $('.support-cover').removeClass('support-active');
          $('.support-cover').first().addClass('support-active');
          $('.tab-title').siblings().removeClass('tab-tile-active');
          $('.tab-title').first().addClass('tab-tile-active');
        }else{
          clickTab();
          }
        };
        windowSize();
        $('.support-cover').first().addClass('support-active');
        $('.tab-title').first().addClass('tab-tile-active');

        $(window).resize(function(){
         windowSize();
        });


      // 推動法案
      $('.js-promote-bill-group').owlCarousel({
        loop   : false,
        margin : 0,
        autoWidth: true,
        nav    : false,
        smartSpeed: 100,
        responsive:{
          0   : {
            items: 1,
            center: true },
          480 : {
            items: 2,
            autoWidth: false
            },
          768 : {
            items: 3,
            autoWidth: false},
          },
      });


      // 各地行動
      $('.js-promote-local-group').owlCarousel({
        loop   : false,
        margin : 0,
        nav    : false,
        autoWidth: true,
        smartSpeed: 100,
        responsive:{
          0   : {
            items: 1,
            center: true },
          480 : {
            items: 2,
            autoWidth: false
             },
          768 : {
            items: 4,
            pullDrag: false,
            autoWidth: false,
            mouseDrag: false},
          },
      });



      // 不分區立委
      $('.js-candidate-large-group').owlCarousel({
        loop   : false,
        margin : 0,
        nav    : false,
        autoWidth: true,
        smartSpeed: 100,
        responsive:{
          0   : {
            items: 1,
            center : true },
          768 : {
            items: 6,
            pullDrag: false,
            autoWidth: false,
            mouseDrag: false},
          },
      });


      // 區域立委
      $('.js-candidate-main-group').owlCarousel({
        loop   : false,
        margin : 0,
        nav    : false,
        autoWidth: true,
        smartSpeed: 100,
        responsive:{
          0   : {
            items  : 1,
            center : true },
          768 : {
            items: 3,
            pullDrag: false,
            autoWidth: false,
            mouseDrag: false
            },
          },
      });

    });