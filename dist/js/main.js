(function(mainCarusel) {
    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    sync1.owlCarousel({
        singleItem: true,
        slideSpeed: 1e3,
        navigation: false,
        pagination: false,
        addClassActive: true,
        afterAction: syncPosition,
        responsiveRefreshRate: 200
    });
    sync2.owlCarousel({
        items: 3,
        itemsDesktop: [ 1199, 3 ],
        itemsDesktopSmall: [ 979, 2 ],
        itemsTablet: [ 768, 1 ],
        itemsMobile: [ 479, 1 ],
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
})(window);
(function(appl) {
    "use strict";
    console.log("mai1n.js");
    $(document).click(function() {
        $(".wrappDropDown").hide();
        $(".catalogProductsMenu").hide();
        $(".smallPopupCart").hide();
        if ($(".dropDownCity, .wrappMenu .dropDown").hasClass("active")) {
            $(".dropDownCity, .wrappMenu .dropDown").removeClass("active");
        }
    });
    $(".dropDownCity").click(function(e) {
        $(this).addClass("active");
        $(".wrappDropDown").show();
        e.stopPropagation();
    });
    $(".wrappMenu .dropDown, .dropDownTopMenu").click(function(e) {
        $(this).addClass("active");
        $(".catalogProductsMenu").show();
        e.stopPropagation();
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
})(window);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tY2FydXNlbC5qcyIsIm1haW4uanMiXSwibmFtZXMiOlsibWFpbkNhcnVzZWwiLCJzeW5jMSIsIiQiLCJzeW5jMiIsIm93bENhcm91c2VsIiwic2luZ2xlSXRlbSIsInNsaWRlU3BlZWQiLCJuYXZpZ2F0aW9uIiwicGFnaW5hdGlvbiIsImFkZENsYXNzQWN0aXZlIiwiYWZ0ZXJBY3Rpb24iLCJzeW5jUG9zaXRpb24iLCJyZXNwb25zaXZlUmVmcmVzaFJhdGUiLCJpdGVtcyIsIml0ZW1zRGVza3RvcCIsIml0ZW1zRGVza3RvcFNtYWxsIiwiaXRlbXNUYWJsZXQiLCJpdGVtc01vYmlsZSIsImFmdGVySW5pdCIsImVsIiwiZmluZCIsImVxIiwiYWRkQ2xhc3MiLCJjdXJyZW50IiwidGhpcyIsImN1cnJlbnRJdGVtIiwicmVtb3ZlQ2xhc3MiLCJkYXRhIiwidW5kZWZpbmVkIiwiY2VudGVyIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJudW1iZXIiLCJ0cmlnZ2VyIiwic3luYzJ2aXNpYmxlIiwib3dsIiwidmlzaWJsZUl0ZW1zIiwibnVtIiwiZm91bmQiLCJpIiwibGVuZ3RoIiwic2xpZGVyUmVjbGFtYSIsInBhZ2luYXRpb25TcGVlZCIsImF1dG9QbGF5Iiwid2luZG93IiwiYXBwbCIsImNvbnNvbGUiLCJsb2ciLCJkb2N1bWVudCIsImNsaWNrIiwiaGlkZSIsImhhc0NsYXNzIiwic2hvdyIsInN0b3BQcm9wYWdhdGlvbiIsImZhZGVJbiIsImxlYW5Nb2RhbCIsInN0YXJ0aW5nX3RvcCIsInRhcmdldCIsInBhcmVudE5vZGUiLCJjbGFzc05hbWUiLCJzaW1wbGViYXIiLCJrZXl1cCIsInZhbCIsImZhZGVPdXQiLCJzY3JvbGwiLCJldmVudCIsInNjcm9sbFRvcCJdLCJtYXBwaW5ncyI6IkNBQUEsU0FBV0E7SUFFVCxJQUFJQyxRQUFRQyxFQUFFO0lBQ2QsSUFBSUMsUUFBUUQsRUFBRTtJQUVkRCxNQUFNRztRQUNKQyxZQUFhO1FBQ2JDLFlBQWE7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aUNvQixTQUFTO2VBRTFDO1lBQ0ZwQixFQUFFLGlDQUFpQ3dCLFlBQVk7OztHQXNDbERtQiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIChtYWluQ2FydXNlbCkge1xuXG4gIHZhciBzeW5jMSA9ICQoXCIjc3luYzFcIik7XG4gIHZhciBzeW5jMiA9ICQoXCIjc3luYzJcIik7XG5cbiAgc3luYzEub3dsQ2Fyb3VzZWwoe1xuICAgIHNpbmdsZUl0ZW0gOiB0cnVlLFxuICAgIHNsaWRlU3BlZWQgOiAxMDAwLFxuICAgIG5hdmlnYXRpb246IGZhbHNlLFxuICAgIHBhZ2luYXRpb246IGZhbHNlLFxuICAgIGFkZENsYXNzQWN0aXZlOiB0cnVlLFxuICAgIGFmdGVyQWN0aW9uIDogc3luY1Bvc2l0aW9uLFxuICAgIHJlc3BvbnNpdmVSZWZyZXNoUmF0ZSA6IDIwMFxuICAgIC8vIGFmdGVyQWN0aW9uIDogZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAvLyAgICAgLy8gdmFyIGxlZyA9IGVsZW0uZmluZCgnLnBob3Rvc2VjdGlvbk9uZScpO1xuICAgIC8vICAgICAvLyBsZWcuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIC8vICAgICAvL2NvbnNvbGUubG9nKGVsZW0pO1xuICAgIC8vICAgfSxcbiAgICAvLyBiZWZvcmVNb3ZlOiBmdW5jdGlvbiAoZWxlbSkge1xuICAgIC8vICAgICAvLyB2YXIgbGVnID0gZWxlbS5maW5kKCcucGhvdG9zZWN0aW9uT25lJyk7XG4gICAgLy8gICAgIC8vIGxlZy5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgLy8gICAgIC8vY29uc29sZS5sb2coZWxlbSk7XG4gICAgLy8gICB9XG4gIH0pO1xuXG4gIHN5bmMyLm93bENhcm91c2VsKHtcbiAgICBpdGVtcyA6IDMsXG4gICAgaXRlbXNEZXNrdG9wICAgICAgOiBbMTE5OSwzXSxcbiAgICBpdGVtc0Rlc2t0b3BTbWFsbCAgICAgOiBbOTc5LDJdLFxuICAgIGl0ZW1zVGFibGV0ICAgICAgIDogWzc2OCwxXSxcbiAgICBpdGVtc01vYmlsZSAgICAgICA6IFs0NzksMV0sXG4gICAgcGFnaW5hdGlvbjogZmFsc2UsXG4gICAgcmVzcG9uc2l2ZVJlZnJlc2hSYXRlIDogMTAwLFxuXG4gICAgYWZ0ZXJJbml0IDogZnVuY3Rpb24oZWwpe1xuICAgICAgZWwuZmluZChcIi5vd2wtaXRlbVwiKS5lcSgwKS5hZGRDbGFzcyhcInN5bmNlZFwiKTtcblxuICAgIH1cbiAgfSk7XG5cbiAgZnVuY3Rpb24gc3luY1Bvc2l0aW9uKGVsKXtcbiAgICB2YXIgY3VycmVudCA9IHRoaXMuY3VycmVudEl0ZW07XG4gICAgJChcIiNzeW5jMlwiKVxuICAgICAgLmZpbmQoXCIub3dsLWl0ZW1cIilcbiAgICAgIC5yZW1vdmVDbGFzcyhcInN5bmNlZFwiKVxuICAgICAgLmVxKGN1cnJlbnQpXG4gICAgICAuYWRkQ2xhc3MoXCJzeW5jZWRcIilcbiAgICBpZigkKFwiI3N5bmMyXCIpLmRhdGEoXCJvd2xDYXJvdXNlbFwiKSAhPT0gdW5kZWZpbmVkKXtcbiAgICAgIGNlbnRlcihjdXJyZW50KVxuICAgIH1cbiAgfVxuXG4gICQoXCIjc3luYzJcIikub24oXCJjbGlja1wiLCBcIi5vd2wtaXRlbVwiLCBmdW5jdGlvbihlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIG51bWJlciA9ICQodGhpcykuZGF0YShcIm93bEl0ZW1cIik7XG4gICAgc3luYzEudHJpZ2dlcihcIm93bC5nb1RvXCIsbnVtYmVyKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gY2VudGVyKG51bWJlcil7XG4gICAgdmFyIHN5bmMydmlzaWJsZSA9IHN5bmMyLmRhdGEoXCJvd2xDYXJvdXNlbFwiKS5vd2wudmlzaWJsZUl0ZW1zO1xuICAgIHZhciBudW0gPSBudW1iZXI7XG4gICAgdmFyIGZvdW5kID0gZmFsc2U7XG4gICAgZm9yKHZhciBpIGluIHN5bmMydmlzaWJsZSl7XG4gICAgICBpZihudW0gPT09IHN5bmMydmlzaWJsZVtpXSl7XG4gICAgICAgIHZhciBmb3VuZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoZm91bmQ9PT1mYWxzZSl7XG4gICAgICBpZihudW0+c3luYzJ2aXNpYmxlW3N5bmMydmlzaWJsZS5sZW5ndGgtMV0pe1xuICAgICAgICBzeW5jMi50cmlnZ2VyKFwib3dsLmdvVG9cIiwgbnVtIC0gc3luYzJ2aXNpYmxlLmxlbmd0aCsyKVxuICAgICAgfWVsc2V7XG4gICAgICAgIGlmKG51bSAtIDEgPT09IC0xKXtcbiAgICAgICAgICBudW0gPSAwO1xuICAgICAgICB9XG4gICAgICAgIHN5bmMyLnRyaWdnZXIoXCJvd2wuZ29Ub1wiLCBudW0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZihudW0gPT09IHN5bmMydmlzaWJsZVtzeW5jMnZpc2libGUubGVuZ3RoLTFdKXtcbiAgICAgIHN5bmMyLnRyaWdnZXIoXCJvd2wuZ29Ub1wiLCBzeW5jMnZpc2libGVbMV0pXG4gICAgfSBlbHNlIGlmKG51bSA9PT0gc3luYzJ2aXNpYmxlWzBdKXtcbiAgICAgIHN5bmMyLnRyaWdnZXIoXCJvd2wuZ29Ub1wiLCBudW0tMSlcbiAgICB9XG5cbiAgfVxuICAvLyBzbGlkZXItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdmFyIHNsaWRlclJlY2xhbWE7XG4gICAgc2xpZGVyUmVjbGFtYSA9IHtcbiAgICAgIG5hdmlnYXRpb24gOiBmYWxzZSxcbiAgICAgIHNsaWRlU3BlZWQgOiAzMDAsXG4gICAgICBwYWdpbmF0aW9uU3BlZWQgOiA0MDAsXG4gICAgICBzaW5nbGVJdGVtOiB0cnVlLFxuICAgICAgYXV0b1BsYXk6IHRydWVcbiAgICB9O1xuXG4gICQoJy5zbGlkZXJSZWNsYW1hJykub3dsQ2Fyb3VzZWwoc2xpZGVyUmVjbGFtYSk7XG5cbn0pKHdpbmRvdyk7XG5cbiIsIihmdW5jdGlvbiAoYXBwbCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgY29uc29sZS5sb2coJ21haTFuLmpzJyk7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBkcm9kRG93blxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGRyb2REb3duQ2l0eVxuJChkb2N1bWVudCkuY2xpY2soZnVuY3Rpb24oKXtcblxuICAkKFwiLndyYXBwRHJvcERvd25cIikuaGlkZSgpO1xuICAkKCcuY2F0YWxvZ1Byb2R1Y3RzTWVudScpLmhpZGUoKTtcbiAgJCgnLnNtYWxsUG9wdXBDYXJ0JykuaGlkZSgpO1xuXG4gIGlmICgkKCcuZHJvcERvd25DaXR5LCAud3JhcHBNZW51IC5kcm9wRG93bicpLmhhc0NsYXNzKCdhY3RpdmUnKSl7XG4gICAgJCgnLmRyb3BEb3duQ2l0eSwgLndyYXBwTWVudSAuZHJvcERvd24nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gIH1cbn0pO1xuXG4kKFwiLmRyb3BEb3duQ2l0eVwiKS5jbGljayhmdW5jdGlvbihlKXtcbiAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICQoXCIud3JhcHBEcm9wRG93blwiKS5zaG93KCk7XG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG59KTtcbi8vIGRyb2REb3duTWVudVxuICAgJCgnLndyYXBwTWVudSAuZHJvcERvd24sIC5kcm9wRG93blRvcE1lbnUnKS5jbGljayhmdW5jdGlvbihlKXtcbiAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAkKCcuY2F0YWxvZ1Byb2R1Y3RzTWVudScpLnNob3coKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9KTtcblxuXG4gIC8vIC0tLS0tLS0tLS1cbiAgJCgnLmNvbnRlbnREcm9wRG93biBhJykuY2xpY2soZnVuY3Rpb24oKXtcblxuICAgICQoJy5jb250ZW50RHJvcERvd24gYScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICB9KTtcblxuICAvLyBDYXJ0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbiAgJCgnLmJ0bkJ1eScpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuXG4gICAgJCgnLnNtYWxsUG9wdXBDYXJ0JykuZmFkZUluKDMwMCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICB9KTtcblxuICAvLyBzZWFyY2hMZXR0ZXItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgJCgnLmxldHRlcnNMaW5rJykuZXEoMCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICQoJy5sZXR0ZXJzTGluaycpLmNsaWNrKGZ1bmN0aW9uKCl7XG5cbiAgICBpZighJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpe1xuICAgICAgJCgnLmxldHRlcnNMaW5rJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgfVxuICB9KTtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gTW9kYWxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICQoJy5tb2RhbC10cmlnZ2VyJykubGVhbk1vZGFsKHtcbiAgICBzdGFydGluZ190b3A6ICcxMCUnLFxuICB9KTtcbiAgLy8gJCgnI21vZGFsMicpLm9wZW5Nb2RhbCgpO1xuICAvLyBGb3JtTW9kbGEtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAkKCcubG9naW5CdG5Nb2RhbCcpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuXG4gICAgaWYoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpe1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgJCgnLmF1dGhvcml6YXRpb24gLmJ0bicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgJCgnLnJlZ2lzdHJhdGlvbicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICQoJy5mb3Jnb3RQd2QnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkKCcuc2lnbkluJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH1cbiAgfSk7XG4gIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgJCgnLnJpZ2lzdGVyQnRuTW9kYWwnKS5jbGljayhmdW5jdGlvbihlKXtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5wYXJlbnROb2RlKVxuICAgIGlmKGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NOYW1lID09ICdhY3RpdmUnKXtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICQoJy5hdXRob3JpemF0aW9uIC5idG4nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICQoJy5mb3Jnb3RQd2QnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkKCcuc2lnbkluJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgJCgnLnJlZ2lzdHJhdGlvbicpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICB9XG4gIH0pO1xuICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICQoJy5mb2dvdFBhc3N3b3JkJykuY2xpY2soZnVuY3Rpb24oZSl7XG5cbiAgICQoJy5hdXRob3JpemF0aW9uIC5idG4nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cblxuICAgICQoJy5zaWduSW4nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgJCgnLmZvcmdvdFB3ZCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICB9KTtcblxuLypcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIFNpbWxlYmFyIFNjcm9sbFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG4gIC8vIG1pbmkgQ2FydFxuICAkKCcjd3JhcHBTY3JvbGwnKS5zaW1wbGViYXIoKTtcbiAgLy8gc2VhcmNoLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAkKCcuc2Nyb2xsU2VhY3JoJykuc2ltcGxlYmFyKCk7XG5cbiAgJCgnI3NlYXJjaCcpLmtleXVwKGZ1bmN0aW9uKCl7XG5cbiAgICBpZigkKCcjc2VhcmNoJykudmFsKCkubGVuZ3RoID49IDEpe1xuICAgICAgICAkKCcuc2VhcmNoQ29udGVudCcpLmZhZGVJbigzMDApO1xuICAgIH1lbHNle1xuICAgICAgJCgnLnNlYXJjaENvbnRlbnQnKS5mYWRlT3V0KDMwMCk7XG4gICAgfVxuXG4gIH0pO1xuXG4vLyBGaXggTWVudS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdmFyIHNjcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblxuICAgIGlmKHNjcm9sbCA+IDMyKXtcbiAgICAgICQoJy5taWRkbGUsIC5jYXRhbG9nUHJvZHVjdHNNZW51JykuYWRkQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAkKCcubWlkZGxlLCAuY2F0YWxvZ1Byb2R1Y3RzTWVudScpLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgIH1cblxuICB9KTtcblxuXG4vLyBjYXJ0IERlbGV0ZVxuICAvLyAkKCcuZGVsZXRlJykuY2xpY2soZnVuY3Rpb24oKXtcblxuICAvLyAgICQodGhpcykucGFyZW50KCkuaHRtbCgnJyk7XG4gIC8vIH0pXG4vKlxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgQWNhcmRpb24gTWVudVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG4gIC8vICQoXCIuYnVyZ2VyLW1lbnVcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAvLyAgICQodGhpcykudG9nZ2xlQ2xhc3MoXCJtZW51LW9uXCIpO1xuICAvLyB9KTtcblxuICAvLyAkKFwiI2FjY29yZGlhbiBhXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAvLyAgIHZhciBsaW5rID0gJCh0aGlzKTtcbiAgLy8gICB2YXIgY2xvc2VzdF91bCA9IGxpbmsuY2xvc2VzdChcInVsXCIpO1xuICAvLyAgIHZhciBwYXJhbGxlbF9hY3RpdmVfbGlua3MgPSBjbG9zZXN0X3VsLmZpbmQoXCIuYWN0aXZlXCIpXG4gIC8vICAgdmFyIGNsb3Nlc3RfbGkgPSBsaW5rLmNsb3Nlc3QoXCJsaVwiKTtcbiAgLy8gICB2YXIgbGlua19zdGF0dXMgPSBjbG9zZXN0X2xpLmhhc0NsYXNzKFwiYWN0aXZlXCIpO1xuICAvLyAgIHZhciBjb3VudCA9IDA7XG5cbiAgLy8gICBjbG9zZXN0X3VsLmZpbmQoXCJ1bFwiKS5zbGlkZVVwKGZ1bmN0aW9uKCkge1xuICAvLyAgICAgICBpZiAoKytjb3VudCA9PSBjbG9zZXN0X3VsLmZpbmQoXCJ1bFwiKS5sZW5ndGgpXG4gIC8vICAgICAgICAgICBwYXJhbGxlbF9hY3RpdmVfbGlua3MucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gIC8vICAgfSk7XG5cbiAgLy8gICBpZiAoIWxpbmtfc3RhdHVzKSB7XG4gIC8vICAgICAgIGNsb3Nlc3RfbGkuY2hpbGRyZW4oXCJ1bFwiKS5zbGlkZURvd24oKTtcbiAgLy8gICAgICAgY2xvc2VzdF9saS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgLy8gICB9XG4gIC8vIH0pO1xufSkod2luZG93KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
