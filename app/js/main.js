(function (appl) {
  'use strict';

  console.log('main.js');

// -----------------------------------------------------------------------------
// drodDown
// -----------------------------------------------------------------------------
// drodDownCity
$(document).click(function(){

  if ($('.dropDownCity').hasClass('active')){
    $(".wrappDropDown").hide();
    $('.dropDownCity').removeClass('active');
  }else{
    return;
  }
});

$(".dropDownCity").click(function(e){
  $(this).toggleClass('active');
  $(".wrappDropDown").toggle();
  e.stopPropagation();
});
// drodDownMenu
// var overlay = $('.overlayDropDown');
var catalogProductsMenu = false;
  $('.wrappMenu .dropDown, .dropDownTopMenu').click(function(e){

    $(this).toggleClass('active');
    $('.catalogProductsMenu').toggle();
    $('.catalogProductsMenu').height($('.has-class .wrapp-ul').eq(0).height());
    // overlay.addClass('active');
    catalogProductsMenu = true;
    e.stopPropagation();
    });
     $('.has-sub').hover(function(e){

        $('.has-sub').removeClass('active');
        $(this).addClass('active');
        $('.wrapp-ul').removeClass('active')
        $(this).find('.wrapp-ul').addClass('active')
        $('.catalogProductsMenu').height($(this).find('.wrapp-ul').height());

        console.log($(this).find('.wrapp-ul').height())

    })
  // drodDownMenu close
  $(document).click( function(e){

    if($(e.target).closest('.catalogProductsMenu').length == 0){
      $('.catalogProductsMenu').hide();
      catalogProductsMenu = false;
    }else{
      return;
    }

  });

  // ----------
  $('.contentDropDown a').click(function(){

    $('.contentDropDown a').removeClass('active');
    $(this).addClass('active');

  });

  // Cart ---------------------------------------------------------

  var smallPopupCart = false;
  $('.btnBuy').click(function(e){
    smallPopupCart = true;
    $('.smallPopupCart').show();
    e.stopPropagation();
  });

  $(document).click( function(e){

    if($(e.target).closest('.smallPopupCart').length == 0){
      $('.smallPopupCart').hide();
      smallPopupCart = false;
    }else{
      return;
    }
  });

  // searchLetter---------------------------------------------------------------
  $('.lettersLink').eq(0).addClass('active');

  $('.lettersLink').click(function(){

    if(!$(this).hasClass('active')){
      $('.lettersLink').removeClass('active');
      $(this).addClass('active');
    }
  });

  // ---------------------------------------------------------------------------
  // Modal
  // ---------------------------------------------------------------------------
  $('.modal-trigger').leanModal({
    starting_top: '10%',
  });
  // $('#modalMenu').openModal();
  // FormModla-----------------------------------------------------
  $('.loginBtnModal').click(function(e){

    if($(this).hasClass('active')){
      return;
    }
    else{
      $('.authorization .btn').removeClass('active');
      $(this).addClass('active');
      $('.registration').removeClass('active');
      $('.forgotPwd').removeClass('active');
      $('.signIn').addClass('active');
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
      $('.signIn').removeClass('active');
      $('.registration').addClass('active');
    }
  });
  // ////////////////////////////////////////////////////////////////
  $('.fogotPassword').click(function(e){

   $('.authorization .btn').removeClass('active');


    $('.signIn').removeClass('active');
    $('.forgotPwd').addClass('active');

  });

/*
--------------------------------------------------------------------------------
  Simlebar Scroll
--------------------------------------------------------------------------------
*/
  // mini Cart
  // $('.wrappSmallPopupCartScrool').simplebar();
  var el = document.querySelector('.wrappSmallPopupCartScrool');
  var serchScroll = document.querySelector('.scrollSeacrh');
  Ps.initialize(el);
  Ps.initialize(serchScroll);

  // search-------------------------------------------------------------------
  // $('.scrollSeacrh').simplebar();
    var isOpenSeacrh = false;
    $('.navbar-form-search').keyup(function(){
      if($(this).find('.search').val().length >= 1){
        isOpenSeacrh = true;
        console.log(isOpenSeacrh)
        $('.searchContent').fadeIn(300);
        if(isOpenSeacrh){
            $(document).click(function(){
              $('.searchContent').fadeOut(300);
            });
          }
      }else{
        $('.searchContent').fadeOut(300);
        isOpenSeacrh = false;
        console.log(isOpenSeacrh)
      }

    });


// Fix Menu-----------------------------------------------------------------------
  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();

    if(scroll > 32){
      $('.middle, .catalogProductsMenu').addClass('fixed');
    }
    else{
      $('.middle, .catalogProductsMenu').removeClass('fixed');
    }

  });

/*
--------------------------------------------------------------------------------
  Acardion Menu
--------------------------------------------------------------------------------
*/

  $(".burger-menu").click(function () {

    if($(this).hasClass('menu-on')){
      $(this).removeClass('menu-on');
      $('#modalMenu').closeModal();
    }else{
      $(this).addClass('menu-on');
      $('#modalMenu').openModal();
    }
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

  $(".acardionFarmia a").click(function() {
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

/*
--------------------------------------------------------------------------------
  baner
--------------------------------------------------------------------------------
*/
  function resizeWindow(){
    // console.log('resizeWindow work')
    var large, meddium, viewWindow;
    viewWindow = $( window ).width(); large = 1024; meddium = 768;
    if (viewWindow >= large) {
      $('.banerReclame').attr('src', 'images/upload/sectionOne/baner-1.jpg');
      //console.log('Large: '+ viewWindow)
    }else if(viewWindow >= meddium){
     // console.log('meddium: '+ viewWindow)
      $('.banerReclame').attr('src', 'images/upload/sectionOne/baner_tablet.jpg');
    }else{
      //console.log('small: '+ viewWindow)
      $('.banerReclame').attr('src', 'images/upload/sectionOne/baner_mobile.jpg');
    }
  };
  resizeWindow();
    $( window ).resize(function() {

      // resizeWindow();

    });

/*
--------------------------------------------------------------------------------
  pagination
--------------------------------------------------------------------------------
*/
  // function simpleTemplating(data) {
  //     var html = '<ul>';
  //     $.each(data, function(index, item){
  //         html += '<li>'+ item +'</li>';
  //     });
  //     html += '</ul>';
  //     return html;
  // }
    // var sources = function () {

    // }();
  //   $('#pagination-container').pagination({
  //     dataSource: (function(){
  //       var result = [];
  //       for (var i = 1; i < 196; i++) {
  //           result.push(i);
  //       }
  //       return result;
  //     })(),
  //     prevText: '<< назад ',
  //     nextText: ' вперед >>',
  //     pageSize: 1,
  //     callback: function(data, pagination) {
  //         var html = simpleTemplating(data);
  //         $('#data-container').html(html);
  //     }
  // })

})(window);
