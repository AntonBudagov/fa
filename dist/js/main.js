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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tY2FydXNlbC5qcyIsIm1haW4uanMiXSwibmFtZXMiOlsibWFpbkNhcnVzZWwiLCJzeW5jMSIsIiQiLCJzeW5jMiIsIm93bENhcm91c2VsIiwic2luZ2xlSXRlbSIsInNsaWRlU3BlZWQiLCJuYXZpZ2F0aW9uIiwicGFnaW5hdGlvbiIsImFkZENsYXNzQWN0aXZlIiwiYWZ0ZXJBY3Rpb24iLCJzeW5jUG9zaXRpb24iLCJyZXNwb25zaXZlUmVmcmVzaFJhdGUiLCJpdGVtcyIsIml0ZW1zRGVza3RvcCIsIml0ZW1zRGVza3RvcFNtYWxsIiwiaXRlbXNUYWJsZXQiLCJpdGVtc01vYmlsZSIsImFmdGVySW5pdCIsImVsIiwiZmluZCIsImVxIiwiYWRkQ2xhc3MiLCJjdXJyZW50IiwidGhpcyIsImN1cnJlbnRJdGVtIiwicmVtb3ZlQ2xhc3MiLCJkYXRhIiwidW5kZWZpbmVkIiwiY2VudGVyIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJudW1iZXIiLCJ0cmlnZ2VyIiwic3luYzJ2aXNpYmxlIiwib3dsIiwidmlzaWJsZUl0ZW1zIiwibnVtIiwiZm91bmQiLCJpIiwibGVuZ3RoIiwid2luZG93IiwiYXBwbCIsImNvbnNvbGUiLCJsb2ciLCJkb2N1bWVudCIsImNsaWNrIiwiaGlkZSIsImhhc0NsYXNzIiwic2hvdyIsInN0b3BQcm9wYWdhdGlvbiIsImZhZGVJbiIsImxlYW5Nb2RhbCIsInN0YXJ0aW5nX3RvcCIsInRhcmdldCIsInBhcmVudE5vZGUiLCJjbGFzc05hbWUiLCJzaW1wbGViYXIiLCJrZXl1cCIsInZhbCIsImZhZGVPdXQiLCJzY3JvbGwiLCJldmVudCIsInNjcm9sbFRvcCJdLCJtYXBwaW5ncyI6IkNBQUEsU0FBV0E7SUFFVCxJQUFJQyxRQUFRQyxFQUFFO0lBQ2QsSUFBSUMsUUFBUUQsRUFBRTtJQUVkRCxNQUFNRztRQUNKQyxZQUFhO1FBQ2JDLFlBQWE7UUFDYkMsWUFBWTtRQUNaQyxZQUFZO1FBQ1pDLGdCQUFnQjtRQUNoQkMsYUFB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QVk7WUFDckN4QixFQUFFc0IsTUFBTUYsU0FBUztZQUNqQnBCLEVBQUUsaUJBQWlCd0IsWUFBWTtZQUMvQnhCLEVBQUUsY0FBY3dCLFlBQVk7WUFDNUJ4QixFQUFFLFdBQVdvQixTQUFTOzs7SUFJMUJwQixFQUFFLHFCQUFxQjZDLE1BQU0sU0FBU2hCO1FBQ3BDYSxRQUFRQyxJQUFJZCxFQUFFd0IsT0FBT0M7UUFDckIsSUFBR3pCLEVBQUV3QixPQUFPQyxXQUFXQyxhQUFhLFVBQVM7WUFDM0M7ZUFFRTtZQUNGdkQsRUFBRSx1QkFBdUJ3QixZQUFZO1lBQ3JDeEIsRUFBRXNCLE1BQU1GLFNBQVM7WUFDakJwQixFQUFFLGNBQWN3QixZQUFZO1lBQzVCeEIsRUFBRSxXQUFXd0IsWUFBWTtZQUN6QnhCLEVBQUUsaUJBQWlCb0IsU0FBUzs7O0lBSWhDcEIsRUFBRSxrQkFBa0I2QyxNQUFNLFNBQVNoQjtRQUVsQzdCLEVBQUUsdUJBQXVCd0IsWUFBWTtRQUdwQ3hCLEVBQUUsV0FBV3dCLFlBQVk7UUFDekJ4QixFQUFFLGNBQWNvQixTQUFTOztJQVUzQnBCLEVBQUUsZ0JBQWdCd0Q7SUFFbEJ4RCxFQUFFLGlCQUFpQndEO0lBRW5CeEQsRUFBRSxXQUFXeUQsTUFBTTtRQUVqQixJQUFHekQsRUFBRSxXQUFXMEQsTUFBTW5CLFVBQVUsR0FBRTtZQUM5QnZDLEVBQUUsa0JBQWtCa0QsT0FBTztlQUMxQjtZQUNIbEQsRUFBRSxrQkFBa0IyRCxRQUFROzs7SUFNaEMzRCxFQUFFd0MsUUFBUW9CLE9BQU8sU0FBVUM7UUFDekIsSUFBSUQsU0FBUzVELEVBQUV3QyxRQUFRc0I7UUFFdkIsSUFBR0YsU0FBUyxJQUFHO1lBQ2I1RCxFQUFFLGlDQUFpQ29CLFNBQVM7ZUFFMUM7WUFDRnBCLEVBQUUsaUNBQWlDd0IsWUFBWTs7O0dBc0NsRGdCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKG1haW5DYXJ1c2VsKSB7XG5cbiAgdmFyIHN5bmMxID0gJChcIiNzeW5jMVwiKTtcbiAgdmFyIHN5bmMyID0gJChcIiNzeW5jMlwiKTtcblxuICBzeW5jMS5vd2xDYXJvdXNlbCh7XG4gICAgc2luZ2xlSXRlbSA6IHRydWUsXG4gICAgc2xpZGVTcGVlZCA6IDEwMDAsXG4gICAgbmF2aWdhdGlvbjogZmFsc2UsXG4gICAgcGFnaW5hdGlvbjogZmFsc2UsXG4gICAgYWRkQ2xhc3NBY3RpdmU6IHRydWUsXG4gICAgYWZ0ZXJBY3Rpb24gOiBzeW5jUG9zaXRpb24sXG4gICAgcmVzcG9uc2l2ZVJlZnJlc2hSYXRlIDogMjAwXG4gICAgLy8gYWZ0ZXJBY3Rpb24gOiBmdW5jdGlvbiAoZWxlbSkge1xuICAgIC8vICAgICAvLyB2YXIgbGVnID0gZWxlbS5maW5kKCcucGhvdG9zZWN0aW9uT25lJyk7XG4gICAgLy8gICAgIC8vIGxlZy5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgLy8gICAgIC8vY29uc29sZS5sb2coZWxlbSk7XG4gICAgLy8gICB9LFxuICAgIC8vIGJlZm9yZU1vdmU6IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgLy8gICAgIC8vIHZhciBsZWcgPSBlbGVtLmZpbmQoJy5waG90b3NlY3Rpb25PbmUnKTtcbiAgICAvLyAgICAgLy8gbGVnLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAvLyAgICAgLy9jb25zb2xlLmxvZyhlbGVtKTtcbiAgICAvLyAgIH1cbiAgfSk7XG5cbiAgc3luYzIub3dsQ2Fyb3VzZWwoe1xuICAgIGl0ZW1zIDogMyxcbiAgICBpdGVtc0Rlc2t0b3AgICAgICA6IFsxMTk5LDNdLFxuICAgIGl0ZW1zRGVza3RvcFNtYWxsICAgICA6IFs5NzksMl0sXG4gICAgaXRlbXNUYWJsZXQgICAgICAgOiBbNzY4LDFdLFxuICAgIGl0ZW1zTW9iaWxlICAgICAgIDogWzQ3OSwxXSxcbiAgICBwYWdpbmF0aW9uOiBmYWxzZSxcbiAgICByZXNwb25zaXZlUmVmcmVzaFJhdGUgOiAxMDAsXG5cbiAgICBhZnRlckluaXQgOiBmdW5jdGlvbihlbCl7XG4gICAgICBlbC5maW5kKFwiLm93bC1pdGVtXCIpLmVxKDApLmFkZENsYXNzKFwic3luY2VkXCIpO1xuXG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiBzeW5jUG9zaXRpb24oZWwpe1xuICAgIHZhciBjdXJyZW50ID0gdGhpcy5jdXJyZW50SXRlbTtcbiAgICAkKFwiI3N5bmMyXCIpXG4gICAgICAuZmluZChcIi5vd2wtaXRlbVwiKVxuICAgICAgLnJlbW92ZUNsYXNzKFwic3luY2VkXCIpXG4gICAgICAuZXEoY3VycmVudClcbiAgICAgIC5hZGRDbGFzcyhcInN5bmNlZFwiKVxuICAgIGlmKCQoXCIjc3luYzJcIikuZGF0YShcIm93bENhcm91c2VsXCIpICE9PSB1bmRlZmluZWQpe1xuICAgICAgY2VudGVyKGN1cnJlbnQpXG4gICAgfVxuICB9XG5cbiAgJChcIiNzeW5jMlwiKS5vbihcImNsaWNrXCIsIFwiLm93bC1pdGVtXCIsIGZ1bmN0aW9uKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgbnVtYmVyID0gJCh0aGlzKS5kYXRhKFwib3dsSXRlbVwiKTtcbiAgICBzeW5jMS50cmlnZ2VyKFwib3dsLmdvVG9cIixudW1iZXIpO1xuICB9KTtcblxuICBmdW5jdGlvbiBjZW50ZXIobnVtYmVyKXtcbiAgICB2YXIgc3luYzJ2aXNpYmxlID0gc3luYzIuZGF0YShcIm93bENhcm91c2VsXCIpLm93bC52aXNpYmxlSXRlbXM7XG4gICAgdmFyIG51bSA9IG51bWJlcjtcbiAgICB2YXIgZm91bmQgPSBmYWxzZTtcbiAgICBmb3IodmFyIGkgaW4gc3luYzJ2aXNpYmxlKXtcbiAgICAgIGlmKG51bSA9PT0gc3luYzJ2aXNpYmxlW2ldKXtcbiAgICAgICAgdmFyIGZvdW5kID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZihmb3VuZD09PWZhbHNlKXtcbiAgICAgIGlmKG51bT5zeW5jMnZpc2libGVbc3luYzJ2aXNpYmxlLmxlbmd0aC0xXSl7XG4gICAgICAgIHN5bmMyLnRyaWdnZXIoXCJvd2wuZ29Ub1wiLCBudW0gLSBzeW5jMnZpc2libGUubGVuZ3RoKzIpXG4gICAgICB9ZWxzZXtcbiAgICAgICAgaWYobnVtIC0gMSA9PT0gLTEpe1xuICAgICAgICAgIG51bSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgc3luYzIudHJpZ2dlcihcIm93bC5nb1RvXCIsIG51bSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmKG51bSA9PT0gc3luYzJ2aXNpYmxlW3N5bmMydmlzaWJsZS5sZW5ndGgtMV0pe1xuICAgICAgc3luYzIudHJpZ2dlcihcIm93bC5nb1RvXCIsIHN5bmMydmlzaWJsZVsxXSlcbiAgICB9IGVsc2UgaWYobnVtID09PSBzeW5jMnZpc2libGVbMF0pe1xuICAgICAgc3luYzIudHJpZ2dlcihcIm93bC5nb1RvXCIsIG51bS0xKVxuICAgIH1cblxuICB9XG4gIC8vIHNsaWRlci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB2YXIgc2xpZGVyUmVjbGFtYTtcbiAgLy8gICBzbGlkZXJSZWNsYW1hID0ge1xuICAvLyAgICAgbmF2aWdhdGlvbiA6IGZhbHNlLFxuICAvLyAgICAgc2xpZGVTcGVlZCA6IDMwMCxcbiAgLy8gICAgIHBhZ2luYXRpb25TcGVlZCA6IDQwMCxcbiAgLy8gICAgIHNpbmdsZUl0ZW06IHRydWUsXG4gIC8vICAgICBhdXRvUGxheTogdHJ1ZVxuICAvLyAgIH07XG5cbiAgLy8gJCgnLnNsaWRlclJlY2xhbWEnKS5vd2xDYXJvdXNlbChzbGlkZXJSZWNsYW1hKTtcblxufSkod2luZG93KTtcblxuIiwiKGZ1bmN0aW9uIChhcHBsKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBjb25zb2xlLmxvZygnbWFpMW4uanMnKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGRyb2REb3duXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gZHJvZERvd25DaXR5XG4kKGRvY3VtZW50KS5jbGljayhmdW5jdGlvbigpe1xuXG4gICQoXCIud3JhcHBEcm9wRG93blwiKS5oaWRlKCk7XG4gICQoJy5jYXRhbG9nUHJvZHVjdHNNZW51JykuaGlkZSgpO1xuICAkKCcuc21hbGxQb3B1cENhcnQnKS5oaWRlKCk7XG5cbiAgaWYgKCQoJy5kcm9wRG93bkNpdHksIC53cmFwcE1lbnUgLmRyb3BEb3duJykuaGFzQ2xhc3MoJ2FjdGl2ZScpKXtcbiAgICAkKCcuZHJvcERvd25DaXR5LCAud3JhcHBNZW51IC5kcm9wRG93bicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgfVxufSk7XG5cbiQoXCIuZHJvcERvd25DaXR5XCIpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgJChcIi53cmFwcERyb3BEb3duXCIpLnNob3coKTtcbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbn0pO1xuLy8gZHJvZERvd25NZW51XG4gICAkKCcud3JhcHBNZW51IC5kcm9wRG93biwgLmRyb3BEb3duVG9wTWVudScpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICAgICQoJy5jYXRhbG9nUHJvZHVjdHNNZW51Jykuc2hvdygpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH0pO1xuXG5cbiAgLy8gLS0tLS0tLS0tLVxuICAkKCcuY29udGVudERyb3BEb3duIGEnKS5jbGljayhmdW5jdGlvbigpe1xuXG4gICAgJCgnLmNvbnRlbnREcm9wRG93biBhJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gIH0pO1xuXG4gIC8vIENhcnQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuICAkKCcuYnRuQnV5JykuY2xpY2soZnVuY3Rpb24oZSl7XG5cbiAgICAkKCcuc21hbGxQb3B1cENhcnQnKS5mYWRlSW4oMzAwKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gIH0pO1xuXG4gIC8vIHNlYXJjaExldHRlci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAkKCcubGV0dGVyc0xpbmsnKS5lcSgwKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgJCgnLmxldHRlcnNMaW5rJykuY2xpY2soZnVuY3Rpb24oKXtcblxuICAgIGlmKCEkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSl7XG4gICAgICAkKCcubGV0dGVyc0xpbmsnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBNb2RhbFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgJCgnLm1vZGFsLXRyaWdnZXInKS5sZWFuTW9kYWwoe1xuICAgIHN0YXJ0aW5nX3RvcDogJzEwJScsXG4gIH0pO1xuICAvLyAkKCcjbW9kYWwyJykub3Blbk1vZGFsKCk7XG4gIC8vIEZvcm1Nb2RsYS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICQoJy5sb2dpbkJ0bk1vZGFsJykuY2xpY2soZnVuY3Rpb24oZSl7XG5cbiAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSl7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAkKCcuYXV0aG9yaXphdGlvbiAuYnRuJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkKCcucmVnaXN0cmF0aW9uJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgJCgnLmZvcmdvdFB3ZCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICQoJy5zaWduSW4nKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgfVxuICB9KTtcbiAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAkKCcucmlnaXN0ZXJCdG5Nb2RhbCcpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnBhcmVudE5vZGUpXG4gICAgaWYoZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc05hbWUgPT0gJ2FjdGl2ZScpe1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgJCgnLmF1dGhvcml6YXRpb24gLmJ0bicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgJCgnLmZvcmdvdFB3ZCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICQoJy5zaWduSW4nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkKCcucmVnaXN0cmF0aW9uJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH1cbiAgfSk7XG4gIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgJCgnLmZvZ290UGFzc3dvcmQnKS5jbGljayhmdW5jdGlvbihlKXtcblxuICAgJCgnLmF1dGhvcml6YXRpb24gLmJ0bicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblxuXG4gICAgJCgnLnNpZ25JbicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAkKCcuZm9yZ290UHdkJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gIH0pO1xuXG4vKlxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgU2ltbGViYXIgU2Nyb2xsXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbiAgLy8gbWluaSBDYXJ0XG4gICQoJyN3cmFwcFNjcm9sbCcpLnNpbXBsZWJhcigpO1xuICAvLyBzZWFyY2gtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICQoJy5zY3JvbGxTZWFjcmgnKS5zaW1wbGViYXIoKTtcblxuICAkKCcjc2VhcmNoJykua2V5dXAoZnVuY3Rpb24oKXtcblxuICAgIGlmKCQoJyNzZWFyY2gnKS52YWwoKS5sZW5ndGggPj0gMSl7XG4gICAgICAgICQoJy5zZWFyY2hDb250ZW50JykuZmFkZUluKDMwMCk7XG4gICAgfWVsc2V7XG4gICAgICAkKCcuc2VhcmNoQ29udGVudCcpLmZhZGVPdXQoMzAwKTtcbiAgICB9XG5cbiAgfSk7XG5cbi8vIEZpeCBNZW51LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB2YXIgc2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG4gICAgaWYoc2Nyb2xsID4gMzIpe1xuICAgICAgJCgnLm1pZGRsZSwgLmNhdGFsb2dQcm9kdWN0c01lbnUnKS5hZGRDbGFzcygnZml4ZWQnKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICQoJy5taWRkbGUsIC5jYXRhbG9nUHJvZHVjdHNNZW51JykucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgfVxuXG4gIH0pO1xuXG5cbi8vIGNhcnQgRGVsZXRlXG4gIC8vICQoJy5kZWxldGUnKS5jbGljayhmdW5jdGlvbigpe1xuXG4gIC8vICAgJCh0aGlzKS5wYXJlbnQoKS5odG1sKCcnKTtcbiAgLy8gfSlcbi8qXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBBY2FyZGlvbiBNZW51XG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbiAgLy8gJChcIi5idXJnZXItbWVudVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gIC8vICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcIm1lbnUtb25cIik7XG4gIC8vIH0pO1xuXG4gIC8vICQoXCIjYWNjb3JkaWFuIGFcIikuY2xpY2soZnVuY3Rpb24oKSB7XG4gIC8vICAgdmFyIGxpbmsgPSAkKHRoaXMpO1xuICAvLyAgIHZhciBjbG9zZXN0X3VsID0gbGluay5jbG9zZXN0KFwidWxcIik7XG4gIC8vICAgdmFyIHBhcmFsbGVsX2FjdGl2ZV9saW5rcyA9IGNsb3Nlc3RfdWwuZmluZChcIi5hY3RpdmVcIilcbiAgLy8gICB2YXIgY2xvc2VzdF9saSA9IGxpbmsuY2xvc2VzdChcImxpXCIpO1xuICAvLyAgIHZhciBsaW5rX3N0YXR1cyA9IGNsb3Nlc3RfbGkuaGFzQ2xhc3MoXCJhY3RpdmVcIik7XG4gIC8vICAgdmFyIGNvdW50ID0gMDtcblxuICAvLyAgIGNsb3Nlc3RfdWwuZmluZChcInVsXCIpLnNsaWRlVXAoZnVuY3Rpb24oKSB7XG4gIC8vICAgICAgIGlmICgrK2NvdW50ID09IGNsb3Nlc3RfdWwuZmluZChcInVsXCIpLmxlbmd0aClcbiAgLy8gICAgICAgICAgIHBhcmFsbGVsX2FjdGl2ZV9saW5rcy5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgLy8gICB9KTtcblxuICAvLyAgIGlmICghbGlua19zdGF0dXMpIHtcbiAgLy8gICAgICAgY2xvc2VzdF9saS5jaGlsZHJlbihcInVsXCIpLnNsaWRlRG93bigpO1xuICAvLyAgICAgICBjbG9zZXN0X2xpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAvLyAgIH1cbiAgLy8gfSk7XG59KSh3aW5kb3cpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
