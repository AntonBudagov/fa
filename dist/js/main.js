(function(mainCarusel) {
    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    sync1.owlCarousel({
        singleItem: true,
        slideSpeed: 1e3,
        navigation: false,
        pagination: false,
        addClassActive: true,
        autoHeight: true,
        afterAction: syncPosition,
        responsiveRefreshRate: 200
    });
    sync2.owlCarousel({
        items: 3,
        itemsDesktop: [ 1199, 3 ],
        itemsDesktopSmall: [ 979, 2 ],
        itemsTablet: [ 768, 2 ],
        itemsMobile: false,
        pagination: false,
        responsiveRefreshRate: 100,
        afterInit: function(el) {
            el.find(".owl-item").eq(0).addClass("synced");
        }
    });
    function syncPosition(el) {
        var current = this.currentItem;
        $("#sync2").find(".owl-item").removeClass("synced").eq(current).addClass("synced");
        if ($("#sync2").data("owlCarousel") !== undefined) {
            center(current);
        }
    }
    $("#sync2").on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).data("owlItem");
        sync1.trigger("owl.goTo", number);
    });
    function center(number) {
        var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
        var num = number;
        var found = false;
        for (var i in sync2visible) {
            if (num === sync2visible[i]) {
                var found = true;
            }
        }
        if (found === false) {
            if (num > sync2visible[sync2visible.length - 1]) {
                sync2.trigger("owl.goTo", num - sync2visible.length + 2);
            } else {
                if (num - 1 === -1) {
                    num = 0;
                }
                sync2.trigger("owl.goTo", num);
            }
        } else if (num === sync2visible[sync2visible.length - 1]) {
            sync2.trigger("owl.goTo", sync2visible[1]);
        } else if (num === sync2visible[0]) {
            sync2.trigger("owl.goTo", num - 1);
        }
    }
    var sliderReclama;
    sliderReclama = {
        navigation: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        autoPlay: true
    };
    $(".sliderReclama").owlCarousel(sliderReclama);
    function mobile() {
        var presonalWrapp = {
            navigation: false,
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true
        };
        $(".presonalWrapp").owlCarousel(presonalWrapp);
        var owl = $(".owl-carousel").data("owlCarousel");
        var banner = $(".presonalWrapp");
        var viewWindow = $(window).width();
        if (viewWindow > 480) {
            if (typeof banner.data("owlCarousel") != "undefined") {
                banner.data("owlCarousel").destroy();
                banner.removeClass("owl-carousel");
            }
        }
    }
    mobile();
    $(window).resize(function() {
        mobile();
    });
})(window);
(function(appl) {
    "use strict";
    console.log("main.js");
    $(document).click(function() {
        $(".wrappDropDown").hide();
        $(".smallPopupCart").hide();
        if ($(".dropDownCity, .wrappMenu .dropDown").hasClass("active")) {
            $(".dropDownCity, .wrappMenu .dropDown").removeClass("active");
        }
    });
    $(".dropDownCity").click(function(e) {
        $(this).toggleClass("active");
        $(".wrappDropDown").toggle();
        e.stopPropagation();
    });
    var overlay = $(".overlayDropDown");
    $(".wrappMenu .dropDown, .dropDownTopMenu").click(function(e) {
        $(this).addClass("active");
        $(".catalogProductsMenu").show();
        $(".catalogProductsMenu").height($(this).parent().find(".wrapp-ul").height());
        overlay.addClass("active");
    });
    $(".has-sub").hover(function(e) {
        $(".has-sub").removeClass("active");
        $(this).addClass("active");
        $(".wrapp-ul").removeClass("active");
        $(this).find(".wrapp-ul").addClass("active");
        $(".catalogProductsMenu").height($(this).find(".wrapp-ul").height());
        console.log($(this).find(".wrapp-ul").height());
    });
    overlay.click(function() {
        $(this).removeClass("active");
        $(".catalogProductsMenu").hide();
    });
    $(".contentDropDown a").click(function() {
        $(".contentDropDown a").removeClass("active");
        $(this).addClass("active");
    });
    $(".btnBuy").click(function(e) {
        $(".smallPopupCart").fadeIn(300);
        e.stopPropagation();
    });
    $(".lettersLink").eq(0).addClass("active");
    $(".lettersLink").click(function() {
        if (!$(this).hasClass("active")) {
            $(".lettersLink").removeClass("active");
            $(this).addClass("active");
        }
    });
    $(".modal-trigger").leanModal({
        starting_top: "10%"
    });
    $(".loginBtnModal").click(function(e) {
        if ($(this).hasClass("active")) {
            return;
        } else {
            $(".authorization .btn").removeClass("active");
            $(this).addClass("active");
            $(".registration").removeClass("active");
            $(".forgotPwd").removeClass("active");
            $(".signIn").addClass("active");
        }
    });
    $(".rigisterBtnModal").click(function(e) {
        console.log(e.target.parentNode);
        if (e.target.parentNode.className == "active") {
            return;
        } else {
            $(".authorization .btn").removeClass("active");
            $(this).addClass("active");
            $(".forgotPwd").removeClass("active");
            $(".signIn").removeClass("active");
            $(".registration").addClass("active");
        }
    });
    $(".fogotPassword").click(function(e) {
        $(".authorization .btn").removeClass("active");
        $(".signIn").removeClass("active");
        $(".forgotPwd").addClass("active");
    });
    $("#wrappScroll").simplebar();
    $(".scrollSeacrh").simplebar();
    $("#search").keyup(function() {
        if ($("#search").val().length >= 1) {
            $(".searchContent").fadeIn(300);
        } else {
            $(".searchContent").fadeOut(300);
        }
    });
    $(window).scroll(function(event) {
        var scroll = $(window).scrollTop();
        if (scroll > 32) {
            $(".middle, .catalogProductsMenu").addClass("fixed");
        } else {
            $(".middle, .catalogProductsMenu").removeClass("fixed");
        }
    });
    $(".burger-menu").click(function() {
        if ($(this).hasClass("menu-on")) {
            $(this).removeClass("menu-on");
            $("#modalMenu").closeModal();
        } else {
            $(this).addClass("menu-on");
            $("#modalMenu").openModal();
        }
    });
    $("#accordian a").click(function() {
        var link = $(this);
        var closest_ul = link.closest("ul");
        var parallel_active_links = closest_ul.find(".active");
        var closest_li = link.closest("li");
        var link_status = closest_li.hasClass("active");
        var count = 0;
        closest_ul.find("ul").slideUp(function() {
            if (++count == closest_ul.find("ul").length) parallel_active_links.removeClass("active");
        });
        if (!link_status) {
            closest_li.children("ul").slideDown();
            closest_li.addClass("active");
        }
    });
    $(".acardionFarmia a").click(function() {
        var link = $(this);
        var closest_ul = link.closest("ul");
        var parallel_active_links = closest_ul.find(".active");
        var closest_li = link.closest("li");
        var link_status = closest_li.hasClass("active");
        var count = 0;
        closest_ul.find("ul").slideUp(function() {
            if (++count == closest_ul.find("ul").length) parallel_active_links.removeClass("active");
        });
        if (!link_status) {
            closest_li.children("ul").slideDown();
            closest_li.addClass("active");
        }
    });
    function resizeWindow() {
        var large, meddium, viewWindow;
        viewWindow = $(window).width();
        large = 1024;
        meddium = 768;
        if (viewWindow >= large) {
            $(".banerReclame").attr("src", "images/upload/sectionOne/baner-1.jpg");
        } else if (viewWindow >= meddium) {
            $(".banerReclame").attr("src", "images/upload/sectionOne/baner_tablet.jpg");
        } else {
            $(".banerReclame").attr("src", "images/upload/sectionOne/baner_mobile.jpg");
        }
    }
    resizeWindow();
    $(window).resize(function() {});
    function simpleTemplating(data) {
        var html = "<ul>";
        $.each(data, function(index, item) {
            html += "<li>" + item + "</li>";
        });
        html += "</ul>";
        return html;
    }
})(window);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tY2FydXNlbC5qcyIsIm1haW4uanMiXSwibmFtZXMiOlsibWFpbkNhcnVzZWwiLCJzeW5jMSIsIiQiLCJzeW5jMiIsIm93bENhcm91c2VsIiwic2luZ2xlSXRlbSIsInNsaWRlU3BlZWQiLCJuYXZpZ2F0aW9uIiwicGFnaW5hdGlvbiIsImFkZENsYXNzQWN0aXZlIiwiYXV0b0hlaWdodCIsImFmdGVyQWN0aW9uIiwic3luY1Bvc2l0aW9uIiwicmVzcG9uc2l2ZVJlZnJlc2hSYXRlIiwiaXRlbXMiLCJpdGVtc0Rlc2t0b3AiLCJpdGVtc0Rlc2t0b3BTbWFsbCIsIml0ZW1zVGFibGV0IiwiaXRlbXNNb2JpbGUiLCJhZnRlckluaXQiLCJlbCIsImZpbmQiLCJlcSIsImFkZENsYXNzIiwiY3VycmVudCIsInRoaXMiLCJjdXJyZW50SXRlbSIsInJlbW92ZUNsYXNzIiwiZGF0YSIsInVuZGVmaW5lZCIsImNlbnRlciIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwibnVtYmVyIiwidHJpZ2dlciIsInN5bmMydmlzaWJsZSIsIm93bCIsInZpc2libGVJdGVtcyIsIm51bSIsImZvdW5kIiwiaSIsImxlbmd0aCIsInNsaWRlclJlY2xhbWEiLCJwYWdpbmF0aW9uU3BlZWQiLCJhdXRvUGxheSIsIm1vYmlsZSIsInByZXNvbmFsV3JhcHAiLCJiYW5uZXIiLCJ2aWV3V2luZG93Iiwid2luZG93Iiwid2lkdGgiLCJkZXN0cm95IiwicmVzaXplIiwiYXBwbCIsImNvbnNvbGUiLCJsb2ciLCJkb2N1bWVudCIsImNsaWNrIiwiaGlkZSIsImhhc0NsYXNzIiwidG9nZ2xlQ2xhc3MiLCJ0b2dnbGUiLCJzdG9wUHJvcGFnYXRpb24iLCJvdmVybGF5Iiwic2hvdyIsImhlaWdodCIsInBhcmVudCIsImhvdmVyIiwiZmFkZUluIiwibGVhbk1vZGFsIiwic3RhcnRpbmdfdG9wIiwidGFyZ2V0IiwicGFyZW50Tm9kZSIsImNsYXNzTmFtZSIsInNpbXBsZWJhciIsImtleXVwIiwidmFsIiwiZmFkZU91dCIsInNjcm9sbCIsImV2ZW50Iiwic2Nyb2xsVG9wIiwiY2xvc2VNb2RhbCIsIm9wZW5Nb2RhbCIsImxpbmsiLCJjbG9zZXN0X3VsIiwiY2xvc2VzdCIsInBhcmFsbGVsX2FjdGl2ZV9saW5rcyIsImNsb3Nlc3RfbGkiLCJsaW5rX3N0YXR1cyIsImNvdW50Iiwic2xpZGVVcCIsImNoaWxkcmVuIiwic2xpZGVEb3duIiwicmVzaXplV2luZG93IiwibGFyZ2UiLCJtZWRkaXVtIiwiYXR0ciIsInNpbXBsZVRlbXBsYXRpbmciLCJodG1sIiwiZWFjaCIsImluZGV4IiwiaXRlbSJdLCJtYXBwaW5ncyI6IkNBQUEsU0FBV0E7SUFFVCxJQUFJQyxRQUFRQyxFQUFFO0lBQ2QsSUFBSUMsUUFBUUQsRUFBRTtJQUVkRCxNQUFNRztRQUNKQyxZQUFhO1FBQ2JDLFlBQWE7UUFDYkMsWUFBWTtRQUNaQyxZQUFZO1FBQ1pDLGdCQUFnQjtRQUNoQkMsWUFBWTtRQUNaQyxhQUFjQztRQUNkQyx1QkFBd0I7O0lBYTFCVixNQUFNQztRQUNKVSxPQUFRO1FBQ1JDLGdCQUFxQixNQUFLO1FBQzFCQyxxQkFBeUIsS0FBSTtRQUM3QkMsZUFBcUIsS0FBSTtRQUN6QkMsYUFBb0I7UUFDcEJWLFlBQVk7UUFDWkssdUJBQXdCO1FBRXhCTSxXQUFZLFNBQVNDO1lBQ25CQSxHQUFHQyxLQUFLLGFBQWFDLEdBQUcsR0FBR0MsU0FBUzs7O0lBS3hDLFNBQVNYLGFBQWFRO1FBQ3BCLElBQUlJLFVBQVVDLEtBQUtDO1FBQ25CeEIsRUFBRSxVQUNDbUIsS0FBSyxhQUNMTSxZQUFZLFVBQ1pMLEdBQUdFLFNBQ0hELFNBQVM7UUFDWixJQUFHckIsRUFBRSxVQUFVMEIsS0FBSyxtQkFBbUJDLFdBQVU7WUFDL0NDLE9BQU9OOzs7SUFJWHRCLEVBQUUsVUFBVTZCLEdBQUcsU0FBUyxhQUFhLFNBQVNDO1FBQzVDQSxFQUFFQztRQUNGLElBQUlDLFNBQVNoQyxFQUFFdUIsTUFBTUcsS0FBSztRQUMxQjNCLE1BQU1rQyxRQUFRLFlB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RSxRQUFRO1FBQzlCLElBQUlHLGNBQWNELFdBQVc1QixTQUFTO1FBQ3RDLElBQUk4QixRQUFRO1FBRVpMLFdBQVdoRSxLQUFLLE1BQU1zRSxRQUFRO1lBQzFCLE1BQU1ELFNBQVNMLFdBQVdoRSxLQUFLLE1BQU1xQixRQUNqQzZDLHNCQUFzQjVELFlBQVk7O1FBRzFDLEtBQUs4RCxhQUFhO1lBQ2RELFdBQVdJLFNBQVMsTUFBTUM7WUFDMUJMLFdBQVdqRSxTQUFTOzs7SUFTMUIsU0FBU3VFO1FBRVAsSUFBSUMsT0FBT0MsU0FBUy9DO1FBQ3BCQSxhQUFhL0MsRUFBR2dELFFBQVNDO1FBQVM0QyxRQUFRO1FBQU1DLFVBQVU7UUFDMUQsSUFBSS9DLGNBQWM4QyxPQUFPO1lBQ3ZCN0YsRUFBRSxpQkFBaUIrRixLQUFLLE9BQU87ZUFFM0IsSUFBR2hELGNBQWMrQyxTQUFRO1lBRTdCOUYsRUFBRSxpQkFBaUIrRixLQUFLLE9BQU87ZUFDNUI7WUFFSC9GLEVBQUUsaUJBQWlCK0YsS0FBSyxPQUFPOzs7SUFHbkNIO0lBQ0U1RixFQUFHZ0QsUUFBU0csT0FBTztJQVdyQixTQUFTNkMsaUJBQWlCdEU7UUFDdEIsSUFBSXVFLE9BQU87UUFDWGpHLEVBQUVrRyxLQUFLeEUsTUFBTSxTQUFTeUUsT0FBT0M7WUFDekJILFFBQVEsU0FBUUcsT0FBTTs7UUFFMUJILFFBQVE7UUFDUixPQUFPQTs7R0FzQlZqRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIChtYWluQ2FydXNlbCkge1xuXG4gIHZhciBzeW5jMSA9ICQoXCIjc3luYzFcIik7XG4gIHZhciBzeW5jMiA9ICQoXCIjc3luYzJcIik7XG5cbiAgc3luYzEub3dsQ2Fyb3VzZWwoe1xuICAgIHNpbmdsZUl0ZW0gOiB0cnVlLFxuICAgIHNsaWRlU3BlZWQgOiAxMDAwLFxuICAgIG5hdmlnYXRpb246IGZhbHNlLFxuICAgIHBhZ2luYXRpb246IGZhbHNlLFxuICAgIGFkZENsYXNzQWN0aXZlOiB0cnVlLFxuICAgIGF1dG9IZWlnaHQ6IHRydWUsXG4gICAgYWZ0ZXJBY3Rpb24gOiBzeW5jUG9zaXRpb24sXG4gICAgcmVzcG9uc2l2ZVJlZnJlc2hSYXRlIDogMjAwXG4gICAgLy8gYWZ0ZXJBY3Rpb24gOiBmdW5jdGlvbiAoZWxlbSkge1xuICAgIC8vICAgICAvLyB2YXIgbGVnID0gZWxlbS5maW5kKCcucGhvdG9zZWN0aW9uT25lJyk7XG4gICAgLy8gICAgIC8vIGxlZy5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgLy8gICAgIC8vY29uc29sZS5sb2coZWxlbSk7XG4gICAgLy8gICB9LFxuICAgIC8vIGJlZm9yZU1vdmU6IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgLy8gICAgIC8vIHZhciBsZWcgPSBlbGVtLmZpbmQoJy5waG90b3NlY3Rpb25PbmUnKTtcbiAgICAvLyAgICAgLy8gbGVnLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAvLyAgICAgLy9jb25zb2xlLmxvZyhlbGVtKTtcbiAgICAvLyAgIH1cbiAgfSk7XG5cbiAgc3luYzIub3dsQ2Fyb3VzZWwoe1xuICAgIGl0ZW1zIDogMyxcbiAgICBpdGVtc0Rlc2t0b3AgICAgICA6IFsxMTk5LDNdLFxuICAgIGl0ZW1zRGVza3RvcFNtYWxsICAgICA6IFs5NzksMl0sXG4gICAgaXRlbXNUYWJsZXQgICAgICAgOiBbNzY4LDJdLFxuICAgIGl0ZW1zTW9iaWxlICAgICAgIDogZmFsc2UsXG4gICAgcGFnaW5hdGlvbjogZmFsc2UsXG4gICAgcmVzcG9uc2l2ZVJlZnJlc2hSYXRlIDogMTAwLFxuXG4gICAgYWZ0ZXJJbml0IDogZnVuY3Rpb24oZWwpe1xuICAgICAgZWwuZmluZChcIi5vd2wtaXRlbVwiKS5lcSgwKS5hZGRDbGFzcyhcInN5bmNlZFwiKTtcblxuICAgIH1cbiAgfSk7XG5cbiAgZnVuY3Rpb24gc3luY1Bvc2l0aW9uKGVsKXtcbiAgICB2YXIgY3VycmVudCA9IHRoaXMuY3VycmVudEl0ZW07XG4gICAgJChcIiNzeW5jMlwiKVxuICAgICAgLmZpbmQoXCIub3dsLWl0ZW1cIilcbiAgICAgIC5yZW1vdmVDbGFzcyhcInN5bmNlZFwiKVxuICAgICAgLmVxKGN1cnJlbnQpXG4gICAgICAuYWRkQ2xhc3MoXCJzeW5jZWRcIilcbiAgICBpZigkKFwiI3N5bmMyXCIpLmRhdGEoXCJvd2xDYXJvdXNlbFwiKSAhPT0gdW5kZWZpbmVkKXtcbiAgICAgIGNlbnRlcihjdXJyZW50KVxuICAgIH1cbiAgfVxuXG4gICQoXCIjc3luYzJcIikub24oXCJjbGlja1wiLCBcIi5vd2wtaXRlbVwiLCBmdW5jdGlvbihlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIG51bWJlciA9ICQodGhpcykuZGF0YShcIm93bEl0ZW1cIik7XG4gICAgc3luYzEudHJpZ2dlcihcIm93bC5nb1RvXCIsbnVtYmVyKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gY2VudGVyKG51bWJlcil7XG4gICAgdmFyIHN5bmMydmlzaWJsZSA9IHN5bmMyLmRhdGEoXCJvd2xDYXJvdXNlbFwiKS5vd2wudmlzaWJsZUl0ZW1zO1xuICAgIHZhciBudW0gPSBudW1iZXI7XG4gICAgdmFyIGZvdW5kID0gZmFsc2U7XG4gICAgZm9yKHZhciBpIGluIHN5bmMydmlzaWJsZSl7XG4gICAgICBpZihudW0gPT09IHN5bmMydmlzaWJsZVtpXSl7XG4gICAgICAgIHZhciBmb3VuZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoZm91bmQ9PT1mYWxzZSl7XG4gICAgICBpZihudW0+c3luYzJ2aXNpYmxlW3N5bmMydmlzaWJsZS5sZW5ndGgtMV0pe1xuICAgICAgICBzeW5jMi50cmlnZ2VyKFwib3dsLmdvVG9cIiwgbnVtIC0gc3luYzJ2aXNpYmxlLmxlbmd0aCsyKVxuICAgICAgfWVsc2V7XG4gICAgICAgIGlmKG51bSAtIDEgPT09IC0xKXtcbiAgICAgICAgICBudW0gPSAwO1xuICAgICAgICB9XG4gICAgICAgIHN5bmMyLnRyaWdnZXIoXCJvd2wuZ29Ub1wiLCBudW0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZihudW0gPT09IHN5bmMydmlzaWJsZVtzeW5jMnZpc2libGUubGVuZ3RoLTFdKXtcbiAgICAgIHN5bmMyLnRyaWdnZXIoXCJvd2wuZ29Ub1wiLCBzeW5jMnZpc2libGVbMV0pXG4gICAgfSBlbHNlIGlmKG51bSA9PT0gc3luYzJ2aXNpYmxlWzBdKXtcbiAgICAgIHN5bmMyLnRyaWdnZXIoXCJvd2wuZ29Ub1wiLCBudW0tMSlcbiAgICB9XG5cbiAgfVxuICAvLyBzbGlkZXItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdmFyIHNsaWRlclJlY2xhbWE7XG4gICAgc2xpZGVyUmVjbGFtYSA9IHtcbiAgICAgIG5hdmlnYXRpb24gOiBmYWxzZSxcbiAgICAgIHNsaWRlU3BlZWQgOiAzMDAsXG4gICAgICBwYWdpbmF0aW9uU3BlZWQgOiA0MDAsXG4gICAgICBzaW5nbGVJdGVtOiB0cnVlLFxuICAgICAgYXV0b1BsYXk6IHRydWVcbiAgICB9O1xuXG4gICQoJy5zbGlkZXJSZWNsYW1hJykub3dsQ2Fyb3VzZWwoc2xpZGVyUmVjbGFtYSk7XG4gIC8vIHNsaWRlclByZXNvbmUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZnVuY3Rpb24gbW9iaWxlKCkge1xuICAgIHZhciBwcmVzb25hbFdyYXBwID0ge1xuICAgICAgbmF2aWdhdGlvbiA6IGZhbHNlLFxuICAgICAgc2xpZGVTcGVlZCA6IDMwMCxcbiAgICAgIHBhZ2luYXRpb25TcGVlZCA6IDQwMCxcbiAgICAgIHNpbmdsZUl0ZW06IHRydWUsXG4gICAgfTtcbiAgICAkKCcucHJlc29uYWxXcmFwcCcpLm93bENhcm91c2VsKHByZXNvbmFsV3JhcHApO1xuICAgIHZhciBvd2wgPSAkKFwiLm93bC1jYXJvdXNlbFwiKS5kYXRhKCdvd2xDYXJvdXNlbCcpO1xuICAgIHZhciBiYW5uZXIgPSAkKCcucHJlc29uYWxXcmFwcCcpO1xuICAgIHZhciB2aWV3V2luZG93ID0gJCggd2luZG93ICkud2lkdGgoKTtcblxuICAgIGlmKHZpZXdXaW5kb3cgPiA0ODApe1xuICAgICAgLy8gb3dsLmRlc3Ryb3koKTtcbiAgICAgIGlmKHR5cGVvZiBiYW5uZXIuZGF0YSgnb3dsQ2Fyb3VzZWwnKSAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICBiYW5uZXIuZGF0YSgnb3dsQ2Fyb3VzZWwnKS5kZXN0cm95KCk7XG4gICAgICAgIGJhbm5lci5yZW1vdmVDbGFzcygnb3dsLWNhcm91c2VsJyk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cbiAgbW9iaWxlKCk7XG4gICQoIHdpbmRvdyApLnJlc2l6ZShmdW5jdGlvbigpIHtcbiAgICAgbW9iaWxlKCk7XG4gIH0pXG5cbn0pKHdpbmRvdyk7XG5cbiIsIihmdW5jdGlvbiAoYXBwbCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgY29uc29sZS5sb2coJ21haW4uanMnKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGRyb2REb3duXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gZHJvZERvd25DaXR5XG4kKGRvY3VtZW50KS5jbGljayhmdW5jdGlvbigpe1xuXG4gICQoXCIud3JhcHBEcm9wRG93blwiKS5oaWRlKCk7XG4gIC8vICQoJy5jYXRhbG9nUHJvZHVjdHNNZW51JykuaGlkZSgpO1xuICAkKCcuc21hbGxQb3B1cENhcnQnKS5oaWRlKCk7XG5cbiAgaWYgKCQoJy5kcm9wRG93bkNpdHksIC53cmFwcE1lbnUgLmRyb3BEb3duJykuaGFzQ2xhc3MoJ2FjdGl2ZScpKXtcbiAgICAkKCcuZHJvcERvd25DaXR5LCAud3JhcHBNZW51IC5kcm9wRG93bicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgfVxufSk7XG5cbiQoXCIuZHJvcERvd25DaXR5XCIpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgJChcIi53cmFwcERyb3BEb3duXCIpLnRvZ2dsZSgpO1xuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xufSk7XG4vLyBkcm9kRG93bk1lbnVcbnZhciBvdmVybGF5ID0gJCgnLm92ZXJsYXlEcm9wRG93bicpO1xuXG4gICQoJy53cmFwcE1lbnUgLmRyb3BEb3duLCAuZHJvcERvd25Ub3BNZW51JykuY2xpY2soZnVuY3Rpb24oZSl7XG4gICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgJCgnLmNhdGFsb2dQcm9kdWN0c01lbnUnKS5zaG93KCk7XG4gICAgJCgnLmNhdGFsb2dQcm9kdWN0c01lbnUnKS5oZWlnaHQoJCh0aGlzKS5wYXJlbnQoKS5maW5kKCcud3JhcHAtdWwnKS5oZWlnaHQoKSk7XG4gICAgb3ZlcmxheS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgfSk7XG4gICAkKCcuaGFzLXN1YicpLmhvdmVyKGZ1bmN0aW9uKGUpe1xuXG4gICAgICAkKCcuaGFzLXN1YicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgJCgnLndyYXBwLXVsJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAkKHRoaXMpLmZpbmQoJy53cmFwcC11bCcpLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgICAgJCgnLmNhdGFsb2dQcm9kdWN0c01lbnUnKS5oZWlnaHQoJCh0aGlzKS5maW5kKCcud3JhcHAtdWwnKS5oZWlnaHQoKSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKCQodGhpcykuZmluZCgnLndyYXBwLXVsJykuaGVpZ2h0KCkpXG5cbiAgIH0pXG5cbiAgb3ZlcmxheS5jbGljayhmdW5jdGlvbigpe1xuXG4gICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAkKCcuY2F0YWxvZ1Byb2R1Y3RzTWVudScpLmhpZGUoKVxuXG4gICAgfSk7XG5cbiAgLy8gLS0tLS0tLS0tLVxuICAkKCcuY29udGVudERyb3BEb3duIGEnKS5jbGljayhmdW5jdGlvbigpe1xuXG4gICAgJCgnLmNvbnRlbnREcm9wRG93biBhJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gIH0pO1xuXG4gIC8vIENhcnQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuICAkKCcuYnRuQnV5JykuY2xpY2soZnVuY3Rpb24oZSl7XG5cbiAgICAkKCcuc21hbGxQb3B1cENhcnQnKS5mYWRlSW4oMzAwKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gIH0pO1xuXG4gIC8vIHNlYXJjaExldHRlci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAkKCcubGV0dGVyc0xpbmsnKS5lcSgwKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgJCgnLmxldHRlcnNMaW5rJykuY2xpY2soZnVuY3Rpb24oKXtcblxuICAgIGlmKCEkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSl7XG4gICAgICAkKCcubGV0dGVyc0xpbmsnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBNb2RhbFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgJCgnLm1vZGFsLXRyaWdnZXInKS5sZWFuTW9kYWwoe1xuICAgIHN0YXJ0aW5nX3RvcDogJzEwJScsXG4gIH0pO1xuICAvLyAkKCcjbW9kYWxNZW51Jykub3Blbk1vZGFsKCk7XG4gIC8vIEZvcm1Nb2RsYS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICQoJy5sb2dpbkJ0bk1vZGFsJykuY2xpY2soZnVuY3Rpb24oZSl7XG5cbiAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSl7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAkKCcuYXV0aG9yaXphdGlvbiAuYnRuJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkKCcucmVnaXN0cmF0aW9uJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgJCgnLmZvcmdvdFB3ZCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICQoJy5zaWduSW4nKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgfVxuICB9KTtcbiAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAkKCcucmlnaXN0ZXJCdG5Nb2RhbCcpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnBhcmVudE5vZGUpXG4gICAgaWYoZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc05hbWUgPT0gJ2FjdGl2ZScpe1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgJCgnLmF1dGhvcml6YXRpb24gLmJ0bicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgJCgnLmZvcmdvdFB3ZCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICQoJy5zaWduSW4nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkKCcucmVnaXN0cmF0aW9uJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH1cbiAgfSk7XG4gIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgJCgnLmZvZ290UGFzc3dvcmQnKS5jbGljayhmdW5jdGlvbihlKXtcblxuICAgJCgnLmF1dGhvcml6YXRpb24gLmJ0bicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblxuXG4gICAgJCgnLnNpZ25JbicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAkKCcuZm9yZ290UHdkJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gIH0pO1xuXG4vKlxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgU2ltbGViYXIgU2Nyb2xsXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbiAgLy8gbWluaSBDYXJ0XG4gICQoJyN3cmFwcFNjcm9sbCcpLnNpbXBsZWJhcigpO1xuICAvLyBzZWFyY2gtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICQoJy5zY3JvbGxTZWFjcmgnKS5zaW1wbGViYXIoKTtcblxuICAkKCcjc2VhcmNoJykua2V5dXAoZnVuY3Rpb24oKXtcblxuICAgIGlmKCQoJyNzZWFyY2gnKS52YWwoKS5sZW5ndGggPj0gMSl7XG4gICAgICAgICQoJy5zZWFyY2hDb250ZW50JykuZmFkZUluKDMwMCk7XG4gICAgfWVsc2V7XG4gICAgICAkKCcuc2VhcmNoQ29udGVudCcpLmZhZGVPdXQoMzAwKTtcbiAgICB9XG5cbiAgfSk7XG5cbi8vIEZpeCBNZW51LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB2YXIgc2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG4gICAgaWYoc2Nyb2xsID4gMzIpe1xuICAgICAgJCgnLm1pZGRsZSwgLmNhdGFsb2dQcm9kdWN0c01lbnUnKS5hZGRDbGFzcygnZml4ZWQnKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICQoJy5taWRkbGUsIC5jYXRhbG9nUHJvZHVjdHNNZW51JykucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgfVxuXG4gIH0pO1xuXG5cbi8vIGNhcnQgRGVsZXRlXG4gIC8vICQoJy5kZWxldGUnKS5jbGljayhmdW5jdGlvbigpe1xuXG4gIC8vICAgJCh0aGlzKS5wYXJlbnQoKS5odG1sKCcnKTtcbiAgLy8gfSlcbi8qXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBBY2FyZGlvbiBNZW51XG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cblxuICAkKFwiLmJ1cmdlci1tZW51XCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcblxuICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoJ21lbnUtb24nKSl7XG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdtZW51LW9uJyk7XG4gICAgICAkKCcjbW9kYWxNZW51JykuY2xvc2VNb2RhbCgpO1xuICAgIH1lbHNle1xuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnbWVudS1vbicpO1xuICAgICAgJCgnI21vZGFsTWVudScpLm9wZW5Nb2RhbCgpO1xuICAgIH1cbiAgfSk7XG5cblxuICAgJChcIiNhY2NvcmRpYW4gYVwiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICB2YXIgbGluayA9ICQodGhpcyk7XG4gICAgdmFyIGNsb3Nlc3RfdWwgPSBsaW5rLmNsb3Nlc3QoXCJ1bFwiKTtcbiAgICB2YXIgcGFyYWxsZWxfYWN0aXZlX2xpbmtzID0gY2xvc2VzdF91bC5maW5kKFwiLmFjdGl2ZVwiKVxuICAgIHZhciBjbG9zZXN0X2xpID0gbGluay5jbG9zZXN0KFwibGlcIik7XG4gICAgdmFyIGxpbmtfc3RhdHVzID0gY2xvc2VzdF9saS5oYXNDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICB2YXIgY291bnQgPSAwO1xuXG4gICAgY2xvc2VzdF91bC5maW5kKFwidWxcIikuc2xpZGVVcChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCsrY291bnQgPT0gY2xvc2VzdF91bC5maW5kKFwidWxcIikubGVuZ3RoKVxuICAgICAgICAgICAgcGFyYWxsZWxfYWN0aXZlX2xpbmtzLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgIH0pO1xuXG4gICAgaWYgKCFsaW5rX3N0YXR1cykge1xuICAgICAgICBjbG9zZXN0X2xpLmNoaWxkcmVuKFwidWxcIikuc2xpZGVEb3duKCk7XG4gICAgICAgIGNsb3Nlc3RfbGkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgfVxuICB9KTtcblxuICAkKFwiLmFjYXJkaW9uRmFybWlhIGFcIikuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxpbmsgPSAkKHRoaXMpO1xuICAgIHZhciBjbG9zZXN0X3VsID0gbGluay5jbG9zZXN0KFwidWxcIik7XG4gICAgdmFyIHBhcmFsbGVsX2FjdGl2ZV9saW5rcyA9IGNsb3Nlc3RfdWwuZmluZChcIi5hY3RpdmVcIilcbiAgICB2YXIgY2xvc2VzdF9saSA9IGxpbmsuY2xvc2VzdChcImxpXCIpO1xuICAgIHZhciBsaW5rX3N0YXR1cyA9IGNsb3Nlc3RfbGkuaGFzQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgdmFyIGNvdW50ID0gMDtcblxuICAgIGNsb3Nlc3RfdWwuZmluZChcInVsXCIpLnNsaWRlVXAoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICgrK2NvdW50ID09IGNsb3Nlc3RfdWwuZmluZChcInVsXCIpLmxlbmd0aClcbiAgICAgICAgICAgIHBhcmFsbGVsX2FjdGl2ZV9saW5rcy5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICB9KTtcblxuICAgIGlmICghbGlua19zdGF0dXMpIHtcbiAgICAgICAgY2xvc2VzdF9saS5jaGlsZHJlbihcInVsXCIpLnNsaWRlRG93bigpO1xuICAgICAgICBjbG9zZXN0X2xpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSk7XG5cbi8qXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBiYW5lclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG4gIGZ1bmN0aW9uIHJlc2l6ZVdpbmRvdygpe1xuICAgIC8vIGNvbnNvbGUubG9nKCdyZXNpemVXaW5kb3cgd29yaycpXG4gICAgdmFyIGxhcmdlLCBtZWRkaXVtLCB2aWV3V2luZG93O1xuICAgIHZpZXdXaW5kb3cgPSAkKCB3aW5kb3cgKS53aWR0aCgpOyBsYXJnZSA9IDEwMjQ7IG1lZGRpdW0gPSA3Njg7XG4gICAgaWYgKHZpZXdXaW5kb3cgPj0gbGFyZ2UpIHtcbiAgICAgICQoJy5iYW5lclJlY2xhbWUnKS5hdHRyKCdzcmMnLCAnaW1hZ2VzL3VwbG9hZC9zZWN0aW9uT25lL2JhbmVyLTEuanBnJyk7XG4gICAgICAvL2NvbnNvbGUubG9nKCdMYXJnZTogJysgdmlld1dpbmRvdylcbiAgICB9ZWxzZSBpZih2aWV3V2luZG93ID49IG1lZGRpdW0pe1xuICAgICAvLyBjb25zb2xlLmxvZygnbWVkZGl1bTogJysgdmlld1dpbmRvdylcbiAgICAgICQoJy5iYW5lclJlY2xhbWUnKS5hdHRyKCdzcmMnLCAnaW1hZ2VzL3VwbG9hZC9zZWN0aW9uT25lL2JhbmVyX3RhYmxldC5qcGcnKTtcbiAgICB9ZWxzZXtcbiAgICAgIC8vY29uc29sZS5sb2coJ3NtYWxsOiAnKyB2aWV3V2luZG93KVxuICAgICAgJCgnLmJhbmVyUmVjbGFtZScpLmF0dHIoJ3NyYycsICdpbWFnZXMvdXBsb2FkL3NlY3Rpb25PbmUvYmFuZXJfbW9iaWxlLmpwZycpO1xuICAgIH1cbiAgfTtcbiAgcmVzaXplV2luZG93KCk7XG4gICAgJCggd2luZG93ICkucmVzaXplKGZ1bmN0aW9uKCkge1xuXG4gICAgICAvLyByZXNpemVXaW5kb3coKTtcblxuICAgIH0pO1xuXG4vKlxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcGFnaW5hdGlvblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG4gIGZ1bmN0aW9uIHNpbXBsZVRlbXBsYXRpbmcoZGF0YSkge1xuICAgICAgdmFyIGh0bWwgPSAnPHVsPic7XG4gICAgICAkLmVhY2goZGF0YSwgZnVuY3Rpb24oaW5kZXgsIGl0ZW0pe1xuICAgICAgICAgIGh0bWwgKz0gJzxsaT4nKyBpdGVtICsnPC9saT4nO1xuICAgICAgfSk7XG4gICAgICBodG1sICs9ICc8L3VsPic7XG4gICAgICByZXR1cm4gaHRtbDtcbiAgfVxuICAgIC8vIHZhciBzb3VyY2VzID0gZnVuY3Rpb24gKCkge1xuXG4gICAgLy8gfSgpO1xuLy8gICAkKCcjcGFnaW5hdGlvbi1jb250YWluZXInKS5wYWdpbmF0aW9uKHtcbi8vICAgICBkYXRhU291cmNlOiAoZnVuY3Rpb24oKXtcbi8vICAgICAgIHZhciByZXN1bHQgPSBbXTtcbi8vICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgMTk2OyBpKyspIHtcbi8vICAgICAgICAgICByZXN1bHQucHVzaChpKTtcbi8vICAgICAgIH1cbi8vICAgICAgIHJldHVybiByZXN1bHQ7XG4vLyAgICAgfSkoKSxcbi8vICAgICBwcmV2VGV4dDogJzw8INC90LDQt9Cw0LQgJyxcbi8vICAgICBuZXh0VGV4dDogJyDQstC/0LXRgNC10LQgPj4nLFxuLy8gICAgIHBhZ2VTaXplOiAxLFxuLy8gICAgIGNhbGxiYWNrOiBmdW5jdGlvbihkYXRhLCBwYWdpbmF0aW9uKSB7XG4vLyAgICAgICAgIHZhciBodG1sID0gc2ltcGxlVGVtcGxhdGluZyhkYXRhKTtcbi8vICAgICAgICAgJCgnI2RhdGEtY29udGFpbmVyJykuaHRtbChodG1sKTtcbi8vICAgICB9XG4vLyB9KVxuXG59KSh3aW5kb3cpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
