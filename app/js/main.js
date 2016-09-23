(function (appl) {
  'use strict';

  console.log('mai1n.js');



  // drodDownCity----------
  var overlay = $('.overlayDropDown');

  $('.dropDownCity').click(function(){

    $(this).toggleClass('active');
    $('.wrappDropDown').slideToggle(300);
    overlay.addClass('active')

  });
  overlay.click(function(){
      $(this).removeClass('active')
     $('.wrappDropDown').slideUp(300)
     $('.dropDownCity').removeClass('active')

      $('.smallPopupCart').fadeOut('slow')
      $('.smallPopupCartScrool').fadeOut('slow')

      $('.catalogProductsMenu').slideUp(300)

  });
  // ----------
  $('.contentDropDown a').click(function(){

    $('.contentDropDown a').removeClass('active');
    $(this).addClass('active');

  });

  // Cart ---------------------------------------------------------
  var cartOpen = false;
  $('.btnCart').hover(function(){

    // $('.smallPopupCart').fadeIn(300);
    $('.smallPopupCartScrool').fadeIn(300);
    overlay.addClass('active')

  });

  $('.btnBuy').click(function(){

    $('.smallPopupCart').fadeIn(300);
    overlay.addClass('active')

  });




  // searchLetter---------------------------------------------------------------
  $('.lettersLink').eq(0).addClass('active');

  $('.lettersLink').click(function(){

    if(!$(this).hasClass('active')){
      $('.lettersLink').removeClass('active');
      $(this).addClass('active');
    }
  });

  // Menu dropDown
   $('.wrappMenu .dropDown').click(function(){
    $(this).toggleClass('active');
    $('.catalogProductsMenu').slideToggle(300);
     overlay.addClass('active');
  })


  // Slider---------------------------------------------------------------------
  var sliderReclama;
    sliderReclama = {
      items:1,
      loop:true,
      margin:0,
      nav:false,
      dots:true,
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:true
    };
  var sliderSectionOne = {
    items:1,
    loop:true,
    margin:0,
    nav:false,
    dotData:true,
    dots:true
    // autoplay:true,
    // autoplayTimeout:5000,
    // autoplayHoverPause:true
  }

  $('.sliderReclama').owlCarousel(sliderReclama);
  // $('.sliderSectionOne').owlCarousel(sliderSectionOne);

  // ---------------------------------------------------------------------------
  // Modal
  // ---------------------------------------------------------------------------
  $('.modal-trigger').leanModal({
    starting_top: '10%',
  });

  $('#modal2').openModal();
  // /////////////////////////////////////////////////
  $('.loginBtnModal').click(function(e){

    if($(this).hasClass('active')){
      return;
    }
    else{
      $('.authorization .btn').removeClass('active');
      $(this).addClass('active');
      $('.registration').removeClass('active');
      $('.forgotPwd').removeClass('active');
      $('.sigin').addClass('active');
    }
  });
  // ////////////////////////////////////////////////////////////////
  $('.rigisterBtnModal').click(function(e){
    console.log(e.target.parentNode)
    if(e.target.parentNode.className == 'active'){
      return;
    }
    else{
      $('.authorization .btn').removeClass('active');
      $(this).addClass('active');
      $('.forgotPwd').removeClass('active');
      $('.sigin').removeClass('active');
      $('.registration').addClass('active');
    }
  });
  // ////////////////////////////////////
  $('.fogotPassword').click(function(e){

   $('.authorization .btn').removeClass('active');


    $('.sigin').removeClass('active');
    $('.forgotPwd').addClass('active');

  });

  // Simlebar Scroll
  // mini Cart
  $('#wrappScroll').height(180);
  $('#wrappScroll').simplebar();
  // search-------------------------------------------------------------------
  $('.scrollSeacrh').simplebar();

  $('#search').keyup(function(){

    if($('#search').val().length >= 1){
        $('.searchContent').fadeIn(300);
    }else{
      $('.searchContent').fadeOut(300);
    }

  });


// scroll-----------------------------------------------------------------------
// $(window).scroll(function (event) {
//     var scroll = $(window).scrollTop();

//     if(scroll > 32){
//       $('.middle').addClass('fixed')
//     }
//     else{
//       $('.middle').removeClass('fixed')
//     }

// });


// cart Delete
  // $('.delete').click(function(){

  //   $(this).parent().html('');
  // })
// Acardion Menu

  $(".burger-menu").click(function () {
    $(this).toggleClass("menu-on");
  });

  $("#accordian a").click(function() {
    var link = $(this);
    var closest_ul = link.closest("ul");
    var parallel_active_links = closest_ul.find(".active")
    var closest_li = link.closest("li");
    var link_status = closest_li.hasClass("active");
    var count = 0;

    closest_ul.find("ul").slideUp(function() {
        if (++count == closest_ul.find("ul").length)
            parallel_active_links.removeClass("active");
    });

    if (!link_status) {
        closest_li.children("ul").slideDown();
        closest_li.addClass("active");
    }
  });
})(window);
