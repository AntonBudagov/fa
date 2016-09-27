(function (mainCarusel) {

  var sync1 = $("#sync1");
  var sync2 = $("#sync2");

  sync1.owlCarousel({
    singleItem : true,
    slideSpeed : 1000,
    navigation: false,
    pagination: false,
    addClassActive: true,
    afterAction : syncPosition,
    responsiveRefreshRate : 200
    // afterAction : function (elem) {
    //     // var leg = elem.find('.photosectionOne');
    //     // leg.addClass('active');
    //     //console.log(elem);
    //   },
    // beforeMove: function (elem) {
    //     // var leg = elem.find('.photosectionOne');
    //     // leg.removeClass('active');
    //     //console.log(elem);
    //   }
  });

  sync2.owlCarousel({
    items : 3,
    itemsDesktop      : [1199,3],
    itemsDesktopSmall     : [979,2],
    itemsTablet       : [768,1],
    itemsMobile       : [479,1],
    pagination: false,
    responsiveRefreshRate : 100,

    afterInit : function(el){
      el.find(".owl-item").eq(0).addClass("synced");

    }
  });

  function syncPosition(el){
    var current = this.currentItem;
    $("#sync2")
      .find(".owl-item")
      .removeClass("synced")
      .eq(current)
      .addClass("synced")
    if($("#sync2").data("owlCarousel") !== undefined){
      center(current)
    }
  }

  $("#sync2").on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).data("owlItem");
    sync1.trigger("owl.goTo",number);
  });

  function center(number){
    var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
    var num = number;
    var found = false;
    for(var i in sync2visible){
      if(num === sync2visible[i]){
        var found = true;
      }
    }

    if(found===false){
      if(num>sync2visible[sync2visible.length-1]){
        sync2.trigger("owl.goTo", num - sync2visible.length+2)
      }else{
        if(num - 1 === -1){
          num = 0;
        }
        sync2.trigger("owl.goTo", num);
      }
    } else if(num === sync2visible[sync2visible.length-1]){
      sync2.trigger("owl.goTo", sync2visible[1])
    } else if(num === sync2visible[0]){
      sync2.trigger("owl.goTo", num-1)
    }

  }
  // slider------------------------------------------------------------------
  var sliderReclama;
    sliderReclama = {
      navigation : false,
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem: true,
      autoPlay: true
    };

  $('.sliderReclama').owlCarousel(sliderReclama);

})(window);

