(function (appl) {
  'use strict';

  console.log('mai1n.js');

  // searchLetter---------------------------------------------------------------
  $('.lettersLink').eq(0).addClass('active');

  $('.lettersLink').click(function(){

    if(!$(this).hasClass('active')){
      $('.lettersLink').removeClass('active');
      $(this).addClass('active');
    }
  });

  // Slider---------------------------------------------------------------------
  var sliderReclama;
    sliderReclama = {
        loop: false,
        margin: 0,
        items: 1,
        nav: false,
        dots: true,
    };

    $('.sliderReclama').owlCarousel(sliderReclama);

})(window);
