(function (appl) {
  'use strict';

  console.log('main.js');

// -----------------------------------------------------------------------------
// drodDown
// -----------------------------------------------------------------------------
// drodDownCity
$(document).click(function(){

  $(".wrappDropDown").hide();
  // $('.catalogProductsMenu').hide();
  $('.smallPopupCart').hide();

  if ($('.dropDownCity, .wrappMenu .dropDown').hasClass('active')){
    $('.dropDownCity, .wrappMenu .dropDown').removeClass('active');
  }
});

$(".dropDownCity").click(function(e){
  $(this).addClass('active');
  $(".wrappDropDown").show();
  e.stopPropagation();
});
// drodDownMenu
var overlay = $('.overlayDropDown');

  $('.wrappMenu .dropDown, .dropDownTopMenu').click(function(e){
    $(this).addClass('active');
    $('.catalogProductsMenu').show();
    overlay.addClass('active');

  });
   $('.has-sub').hover(function(e){

      $('.has-sub').removeClass('active');
      $(this).addClass('active');
      $('.wrapp-ul').removeClass('active')
      $(this).find('.wrapp-ul').addClass('active')
      $('.catalogProductsMenu').height($(this).find('.wrapp-ul').height());

      console.log($(this).find('.wrapp-ul').height())

   })

  overlay.click(function(){

    $(this).removeClass('active')
    $('.catalogProductsMenu').hide()

    });

  // ----------
  $('.contentDropDown a').click(function(){

    $('.contentDropDown a').removeClass('active');
    $(this).addClass('active');

  });

  // Cart ---------------------------------------------------------


  $('.btnBuy').click(function(e){

    $('.smallPopupCart').fadeIn(300);
    e.stopPropagation();

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
  // $('#modal2').openModal();
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


// cart Delete
  // $('.delete').click(function(){

  //   $(this).parent().html('');
  // })
/*
--------------------------------------------------------------------------------
  Acardion Menu
--------------------------------------------------------------------------------
*/
  // $(".burger-menu").click(function () {
  //   $(this).toggleClass("menu-on");
  // });
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
  pagination
--------------------------------------------------------------------------------
*/
  function simpleTemplating(data) {
      var html = '<ul>';
      $.each(data, function(index, item){
          html += '<li>'+ item +'</li>';
      });
      html += '</ul>';
      return html;
  }
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
