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
    console.log("main.js");
    $(document).click(function() {
        $(".wrappDropDown").hide();
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
    var overlay = $(".overlayDropDown");
    $(".wrappMenu .dropDown, .dropDownTopMenu").click(function(e) {
        $(this).addClass("active");
        $(".catalogProductsMenu").show();
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
    function simpleTemplating(data) {
        var html = "<ul>";
        $.each(data, function(index, item) {
            html += "<li>" + item + "</li>";
        });
        html += "</ul>";
        return html;
    }
})(window);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tY2FydXNlbC5qcyIsIm1haW4uanMiXSwibmFtZXMiOlsibWFpbkNhcnVzZWwiLCJzeW5jMSIsIiQiLCJzeW5jMiIsIm93bENhcm91c2VsIiwic2luZ2xlSXRlbSIsInNsaWRlU3BlZWQiLCJuYXZpZ2F0aW9uIiwicGFnaW5hdGlvbiIsImFkZENsYXNzQWN0aXZlIiwiYWZ0ZXJBY3Rpb24iLCJzeW5jUG9zaXRpb24iLCJyZXNwb25zaXZlUmVmcmVzaFJhdGUiLCJpdGVtcyIsIml0ZW1zRGVza3RvcCIsIml0ZW1zRGVza3RvcFNtYWxsIiwiaXRlbXNUYWJsZXQiLCJpdGVtc01vYmlsZSIsImFmdGVySW5pdCIsImVsIiwiZmluZCIsImVxIiwiYWRkQ2xhc3MiLCJjdXJyZW50IiwidGhpcyIsImN1cnJlbnRJdGVtIiwicmVtb3ZlQ2xhc3MiLCJkYXRhIiwidW5kZWZpbmVkIiwiY2VudGVyIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJudW1iZXIiLCJ0cmlnZ2VyIiwic3luYzJ2aXNpYmxlIiwib3dsIiwidmlzaWJsZUl0ZW1zIiwibnVtIiwiZm91bmQiLCJpIiwibGVuZ3RoIiwic2xpZGVyUmVjbGFtYSIsInBhZ2luYXRpb25TcGVlZCIsImF1dG9QbGF5Iiwid2luZG93IiwiYXBwbCIsImNvbnNvbGUiLCJsb2ciLCJkb2N1bWVudCIsImNsaWNrIiwiaGlkZSIsImhhc0NsYXNzIiwic2hvdyIsInN0b3BQcm9wYWdhdGlvbiIsIm92ZXJsYXkiLCJob3ZlciIsImhlaWdodCIsImZhZGVJbiIsImxlYW5Nb2RhbCIsInN0YXJ0aW5nX3RvcCIsInRhcmdldCIsInBhcmVudE5vZGUiLCJjbGFzc05hbWUiLCJzaW1wbGViYXIiLCJrZXl1cCIsInZhbCIsImZhZGVPdXQiLCJzY3JvbGwiLCJldmVudCIsInNjcm9sbFRvcCIsImxpbmsiLCJjbG9zZXN0X3VsIiwiY2xvc2VzdCIsInBhcmFsbGVsX2FjdGl2ZV9saW5rcyIsImNsb3Nlc3RfbGkiLCJsaW5rX3N0YXR1cyIsImNvdW50Iiwic2xpZGVVcCIsImNoaWxkcmVuIiwic2xpZGVEb3duIiwic2ltcGxlVGVtcGxhdGluZyIsImh0bWwiLCJlYWNoIiwiaW5kZXgiLCJpdGVtIl0sIm1hcHBpbmdzIjoiQ0FBQSxTQUFXQTtJQUVULElBQUlDLFFBQVFDLEVBQUU7SUFDZCxJQUFJQyxRQUFRRCxFQUFFO0lBRWRELE1BQU1HO1FBQ0pDLFlBQWE7UUFDYkMsWUFBYTtRQUNiQyxZQUFZO1FBQ1pDLFlBQVk7UUFDWkMsZ0JBQWdCO1FBQ2hCQyxhQUFjQztRQUNkQyx1QkFBd0I7O0lBYTFCVCxNQUFNQztRQUNKUyxPQUFRO1FBQ1JDLGdCQUFxQixNQUFLO1FBQzFCQyxxQkFBeUIsS0FBSTtRQUM3QkMsZUFBcUIsS0FBSTtRQUN6QkMsZUFBcUIsS0FBSTtRQUN6QlQsWUFBWTtRQUNaSSx1QkFBd0I7UUFFeEJNLFdBQVksU0FBU0M7WUFDbkJBLEdBQUdDLEtBQUssYUFBYUMsR0FBRyxHQUFHQyxTQUFTOzs7SUFLeEMsU0FBU1gsYUFBYVE7UUFDcEIsSUFBSUksVUFBVUMsS0FBS0M7UUFDbkJ2QixFQUFFLFVBQ0NrQixLQUFLLGFBQ0xNLFlBQVksVUFDWkwsR0FBR0UsU0FDSEQsU0FBUztRQUNaLElBQUdwQixFQUFFLFVBQVV5QixLQUFLLG1CQUFtQkMsV0FBVTtZQUMvQ0MsT0FBT047OztJQUlYckIsRUFBRSxVQUFVNEIsR0FBRyxTQUFTLGFBQWEsU0FBU0M7UUFDNUNBLEVBQUVDO1FBQ0YsSUFBSUMsU0FBUy9CLEVBQUVzQixNQUFNRyxLQUFLO1FBQzFCMUIsTUFBTWlDLFFBQVEsWUFBV0Q7O0lBRzNCLFNBQVNKLE9BQU9JO1FBQ2QsSUFBSUUsZUFBZWhDLE1BQU13QixLQUFLLGVBQWVTLElBQUlDO1FBQ2pELElBQUlDLE1BQU1MO1FBQ1YsSUFBSU0sUUFBUTtRQUNaLEtBQUksSUFBSUMsS0FBS0wsY0FBYTtZQUN4QixJQUFHRyxRQUFRSCxhQUFhSyxJQUFHO2dCQUN6QixJQUFJRCxRQUFROzs7UUFJaEIsSUFBR0EsVUFB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Ozs7SUFJMUJwQixFQUFFLHFCQUFxQmdELE1BQU07UUFDM0IsSUFBSXFCLE9BQU9yRSxFQUFFc0I7UUFDYixJQUFJZ0QsYUFBYUQsS0FBS0UsUUFBUTtRQUM5QixJQUFJQyx3QkFBd0JGLFdBQVdwRCxLQUFLO1FBQzVDLElBQUl1RCxhQUFhSixLQUFLRSxRQUFRO1FBQzlCLElBQUlHLGNBQWNELFdBQVd2QixTQUFTO1FBQ3RDLElBQUl5QixRQUFRO1FBRVpMLFdBQVdwRCxLQUFLLE1BQU0wRCxRQUFRO1lBQzFCLE1BQU1ELFNBQVNMLFdBQVdwRCxLQUFLLE1BQU1xQixRQUNqQ2lDLHNCQUFzQmhELFlBQVk7O1FBRzFDLEtBQUtrRCxhQUFhO1lBQ2RELFdBQVdJLFNBQVMsTUFBTUM7WUFDMUJMLFdBQVdyRCxTQUFTOzs7SUFTMUIsU0FBUzJELGlCQUFpQnREO1FBQ3RCLElBQUl1RCxPQUFPO1FBQ1hoRixFQUFFaUYsS0FBS3hELE1BQU0sU0FBU3lELE9BQU9DO1lBQ3pCSCxRQUFRLFNBQVFHLE9BQU07O1FBRTFCSCxRQUFRO1FBQ1IsT0FBT0E7O0dBc0JWckMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAobWFpbkNhcnVzZWwpIHtcblxuICB2YXIgc3luYzEgPSAkKFwiI3N5bmMxXCIpO1xuICB2YXIgc3luYzIgPSAkKFwiI3N5bmMyXCIpO1xuXG4gIHN5bmMxLm93bENhcm91c2VsKHtcbiAgICBzaW5nbGVJdGVtIDogdHJ1ZSxcbiAgICBzbGlkZVNwZWVkIDogMTAwMCxcbiAgICBuYXZpZ2F0aW9uOiBmYWxzZSxcbiAgICBwYWdpbmF0aW9uOiBmYWxzZSxcbiAgICBhZGRDbGFzc0FjdGl2ZTogdHJ1ZSxcbiAgICBhZnRlckFjdGlvbiA6IHN5bmNQb3NpdGlvbixcbiAgICByZXNwb25zaXZlUmVmcmVzaFJhdGUgOiAyMDBcbiAgICAvLyBhZnRlckFjdGlvbiA6IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgLy8gICAgIC8vIHZhciBsZWcgPSBlbGVtLmZpbmQoJy5waG90b3NlY3Rpb25PbmUnKTtcbiAgICAvLyAgICAgLy8gbGVnLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAvLyAgICAgLy9jb25zb2xlLmxvZyhlbGVtKTtcbiAgICAvLyAgIH0sXG4gICAgLy8gYmVmb3JlTW92ZTogZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAvLyAgICAgLy8gdmFyIGxlZyA9IGVsZW0uZmluZCgnLnBob3Rvc2VjdGlvbk9uZScpO1xuICAgIC8vICAgICAvLyBsZWcucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIC8vICAgICAvL2NvbnNvbGUubG9nKGVsZW0pO1xuICAgIC8vICAgfVxuICB9KTtcblxuICBzeW5jMi5vd2xDYXJvdXNlbCh7XG4gICAgaXRlbXMgOiAzLFxuICAgIGl0ZW1zRGVza3RvcCAgICAgIDogWzExOTksM10sXG4gICAgaXRlbXNEZXNrdG9wU21hbGwgICAgIDogWzk3OSwyXSxcbiAgICBpdGVtc1RhYmxldCAgICAgICA6IFs3NjgsMV0sXG4gICAgaXRlbXNNb2JpbGUgICAgICAgOiBbNDc5LDFdLFxuICAgIHBhZ2luYXRpb246IGZhbHNlLFxuICAgIHJlc3BvbnNpdmVSZWZyZXNoUmF0ZSA6IDEwMCxcblxuICAgIGFmdGVySW5pdCA6IGZ1bmN0aW9uKGVsKXtcbiAgICAgIGVsLmZpbmQoXCIub3dsLWl0ZW1cIikuZXEoMCkuYWRkQ2xhc3MoXCJzeW5jZWRcIik7XG5cbiAgICB9XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHN5bmNQb3NpdGlvbihlbCl7XG4gICAgdmFyIGN1cnJlbnQgPSB0aGlzLmN1cnJlbnRJdGVtO1xuICAgICQoXCIjc3luYzJcIilcbiAgICAgIC5maW5kKFwiLm93bC1pdGVtXCIpXG4gICAgICAucmVtb3ZlQ2xhc3MoXCJzeW5jZWRcIilcbiAgICAgIC5lcShjdXJyZW50KVxuICAgICAgLmFkZENsYXNzKFwic3luY2VkXCIpXG4gICAgaWYoJChcIiNzeW5jMlwiKS5kYXRhKFwib3dsQ2Fyb3VzZWxcIikgIT09IHVuZGVmaW5lZCl7XG4gICAgICBjZW50ZXIoY3VycmVudClcbiAgICB9XG4gIH1cblxuICAkKFwiI3N5bmMyXCIpLm9uKFwiY2xpY2tcIiwgXCIub3dsLWl0ZW1cIiwgZnVuY3Rpb24oZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhciBudW1iZXIgPSAkKHRoaXMpLmRhdGEoXCJvd2xJdGVtXCIpO1xuICAgIHN5bmMxLnRyaWdnZXIoXCJvd2wuZ29Ub1wiLG51bWJlcik7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGNlbnRlcihudW1iZXIpe1xuICAgIHZhciBzeW5jMnZpc2libGUgPSBzeW5jMi5kYXRhKFwib3dsQ2Fyb3VzZWxcIikub3dsLnZpc2libGVJdGVtcztcbiAgICB2YXIgbnVtID0gbnVtYmVyO1xuICAgIHZhciBmb3VuZCA9IGZhbHNlO1xuICAgIGZvcih2YXIgaSBpbiBzeW5jMnZpc2libGUpe1xuICAgICAgaWYobnVtID09PSBzeW5jMnZpc2libGVbaV0pe1xuICAgICAgICB2YXIgZm91bmQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmKGZvdW5kPT09ZmFsc2Upe1xuICAgICAgaWYobnVtPnN5bmMydmlzaWJsZVtzeW5jMnZpc2libGUubGVuZ3RoLTFdKXtcbiAgICAgICAgc3luYzIudHJpZ2dlcihcIm93bC5nb1RvXCIsIG51bSAtIHN5bmMydmlzaWJsZS5sZW5ndGgrMilcbiAgICAgIH1lbHNle1xuICAgICAgICBpZihudW0gLSAxID09PSAtMSl7XG4gICAgICAgICAgbnVtID0gMDtcbiAgICAgICAgfVxuICAgICAgICBzeW5jMi50cmlnZ2VyKFwib3dsLmdvVG9cIiwgbnVtKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYobnVtID09PSBzeW5jMnZpc2libGVbc3luYzJ2aXNpYmxlLmxlbmd0aC0xXSl7XG4gICAgICBzeW5jMi50cmlnZ2VyKFwib3dsLmdvVG9cIiwgc3luYzJ2aXNpYmxlWzFdKVxuICAgIH0gZWxzZSBpZihudW0gPT09IHN5bmMydmlzaWJsZVswXSl7XG4gICAgICBzeW5jMi50cmlnZ2VyKFwib3dsLmdvVG9cIiwgbnVtLTEpXG4gICAgfVxuXG4gIH1cbiAgLy8gc2xpZGVyLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHZhciBzbGlkZXJSZWNsYW1hO1xuICAgIHNsaWRlclJlY2xhbWEgPSB7XG4gICAgICBuYXZpZ2F0aW9uIDogZmFsc2UsXG4gICAgICBzbGlkZVNwZWVkIDogMzAwLFxuICAgICAgcGFnaW5hdGlvblNwZWVkIDogNDAwLFxuICAgICAgc2luZ2xlSXRlbTogdHJ1ZSxcbiAgICAgIGF1dG9QbGF5OiB0cnVlXG4gICAgfTtcblxuICAkKCcuc2xpZGVyUmVjbGFtYScpLm93bENhcm91c2VsKHNsaWRlclJlY2xhbWEpO1xuXG59KSh3aW5kb3cpO1xuXG4iLCIoZnVuY3Rpb24gKGFwcGwpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGNvbnNvbGUubG9nKCdtYWluLmpzJyk7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBkcm9kRG93blxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGRyb2REb3duQ2l0eVxuJChkb2N1bWVudCkuY2xpY2soZnVuY3Rpb24oKXtcblxuICAkKFwiLndyYXBwRHJvcERvd25cIikuaGlkZSgpO1xuICAvLyAkKCcuY2F0YWxvZ1Byb2R1Y3RzTWVudScpLmhpZGUoKTtcbiAgJCgnLnNtYWxsUG9wdXBDYXJ0JykuaGlkZSgpO1xuXG4gIGlmICgkKCcuZHJvcERvd25DaXR5LCAud3JhcHBNZW51IC5kcm9wRG93bicpLmhhc0NsYXNzKCdhY3RpdmUnKSl7XG4gICAgJCgnLmRyb3BEb3duQ2l0eSwgLndyYXBwTWVudSAuZHJvcERvd24nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gIH1cbn0pO1xuXG4kKFwiLmRyb3BEb3duQ2l0eVwiKS5jbGljayhmdW5jdGlvbihlKXtcbiAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICQoXCIud3JhcHBEcm9wRG93blwiKS5zaG93KCk7XG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG59KTtcbi8vIGRyb2REb3duTWVudVxudmFyIG92ZXJsYXkgPSAkKCcub3ZlcmxheURyb3BEb3duJyk7XG5cbiAgJCgnLndyYXBwTWVudSAuZHJvcERvd24sIC5kcm9wRG93blRvcE1lbnUnKS5jbGljayhmdW5jdGlvbihlKXtcbiAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAkKCcuY2F0YWxvZ1Byb2R1Y3RzTWVudScpLnNob3coKTtcbiAgICBvdmVybGF5LmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICB9KTtcbiAgICQoJy5oYXMtc3ViJykuaG92ZXIoZnVuY3Rpb24oZSl7XG5cbiAgICAgICQoJy5oYXMtc3ViJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkKCcud3JhcHAtdWwnKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAgICQodGhpcykuZmluZCgnLndyYXBwLXVsJykuYWRkQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAkKCcuY2F0YWxvZ1Byb2R1Y3RzTWVudScpLmhlaWdodCgkKHRoaXMpLmZpbmQoJy53cmFwcC11bCcpLmhlaWdodCgpKTtcblxuICAgICAgY29uc29sZS5sb2coJCh0aGlzKS5maW5kKCcud3JhcHAtdWwnKS5oZWlnaHQoKSlcblxuICAgfSlcblxuICBvdmVybGF5LmNsaWNrKGZ1bmN0aW9uKCl7XG5cbiAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgICQoJy5jYXRhbG9nUHJvZHVjdHNNZW51JykuaGlkZSgpXG5cbiAgICB9KTtcblxuICAvLyAtLS0tLS0tLS0tXG4gICQoJy5jb250ZW50RHJvcERvd24gYScpLmNsaWNrKGZ1bmN0aW9uKCl7XG5cbiAgICAkKCcuY29udGVudERyb3BEb3duIGEnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgfSk7XG5cbiAgLy8gQ2FydCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4gICQoJy5idG5CdXknKS5jbGljayhmdW5jdGlvbihlKXtcblxuICAgICQoJy5zbWFsbFBvcHVwQ2FydCcpLmZhZGVJbigzMDApO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgfSk7XG5cbiAgLy8gc2VhcmNoTGV0dGVyLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICQoJy5sZXR0ZXJzTGluaycpLmVxKDApLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICAkKCcubGV0dGVyc0xpbmsnKS5jbGljayhmdW5jdGlvbigpe1xuXG4gICAgaWYoISQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKXtcbiAgICAgICQoJy5sZXR0ZXJzTGluaycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIE1vZGFsXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAkKCcubW9kYWwtdHJpZ2dlcicpLmxlYW5Nb2RhbCh7XG4gICAgc3RhcnRpbmdfdG9wOiAnMTAlJyxcbiAgfSk7XG4gIC8vICQoJyNtb2RhbDInKS5vcGVuTW9kYWwoKTtcbiAgLy8gRm9ybU1vZGxhLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgJCgnLmxvZ2luQnRuTW9kYWwnKS5jbGljayhmdW5jdGlvbihlKXtcblxuICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKXtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICQoJy5hdXRob3JpemF0aW9uIC5idG4nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICQoJy5yZWdpc3RyYXRpb24nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkKCcuZm9yZ290UHdkJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgJCgnLnNpZ25JbicpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICB9XG4gIH0pO1xuICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICQoJy5yaWdpc3RlckJ0bk1vZGFsJykuY2xpY2soZnVuY3Rpb24oZSl7XG4gICAgY29uc29sZS5sb2coZS50YXJnZXQucGFyZW50Tm9kZSlcbiAgICBpZihlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTmFtZSA9PSAnYWN0aXZlJyl7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAkKCcuYXV0aG9yaXphdGlvbiAuYnRuJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkKCcuZm9yZ290UHdkJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgJCgnLnNpZ25JbicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICQoJy5yZWdpc3RyYXRpb24nKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgfVxuICB9KTtcbiAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAkKCcuZm9nb3RQYXNzd29yZCcpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuXG4gICAkKCcuYXV0aG9yaXphdGlvbiAuYnRuJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXG5cbiAgICAkKCcuc2lnbkluJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICQoJy5mb3Jnb3RQd2QnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgfSk7XG5cbi8qXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBTaW1sZWJhciBTY3JvbGxcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuICAvLyBtaW5pIENhcnRcbiAgJCgnI3dyYXBwU2Nyb2xsJykuc2ltcGxlYmFyKCk7XG4gIC8vIHNlYXJjaC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgJCgnLnNjcm9sbFNlYWNyaCcpLnNpbXBsZWJhcigpO1xuXG4gICQoJyNzZWFyY2gnKS5rZXl1cChmdW5jdGlvbigpe1xuXG4gICAgaWYoJCgnI3NlYXJjaCcpLnZhbCgpLmxlbmd0aCA+PSAxKXtcbiAgICAgICAgJCgnLnNlYXJjaENvbnRlbnQnKS5mYWRlSW4oMzAwKTtcbiAgICB9ZWxzZXtcbiAgICAgICQoJy5zZWFyY2hDb250ZW50JykuZmFkZU91dCgzMDApO1xuICAgIH1cblxuICB9KTtcblxuLy8gRml4IE1lbnUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uIChldmVudCkge1xuICAgIHZhciBzY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cbiAgICBpZihzY3JvbGwgPiAzMil7XG4gICAgICAkKCcubWlkZGxlLCAuY2F0YWxvZ1Byb2R1Y3RzTWVudScpLmFkZENsYXNzKCdmaXhlZCcpO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgJCgnLm1pZGRsZSwgLmNhdGFsb2dQcm9kdWN0c01lbnUnKS5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICB9XG5cbiAgfSk7XG5cblxuLy8gY2FydCBEZWxldGVcbiAgLy8gJCgnLmRlbGV0ZScpLmNsaWNrKGZ1bmN0aW9uKCl7XG5cbiAgLy8gICAkKHRoaXMpLnBhcmVudCgpLmh0bWwoJycpO1xuICAvLyB9KVxuLypcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIEFjYXJkaW9uIE1lbnVcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuICAvLyAkKFwiLmJ1cmdlci1tZW51XCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgLy8gICAkKHRoaXMpLnRvZ2dsZUNsYXNzKFwibWVudS1vblwiKTtcbiAgLy8gfSk7XG4gICAkKFwiI2FjY29yZGlhbiBhXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgIHZhciBsaW5rID0gJCh0aGlzKTtcbiAgICB2YXIgY2xvc2VzdF91bCA9IGxpbmsuY2xvc2VzdChcInVsXCIpO1xuICAgIHZhciBwYXJhbGxlbF9hY3RpdmVfbGlua3MgPSBjbG9zZXN0X3VsLmZpbmQoXCIuYWN0aXZlXCIpXG4gICAgdmFyIGNsb3Nlc3RfbGkgPSBsaW5rLmNsb3Nlc3QoXCJsaVwiKTtcbiAgICB2YXIgbGlua19zdGF0dXMgPSBjbG9zZXN0X2xpLmhhc0NsYXNzKFwiYWN0aXZlXCIpO1xuICAgIHZhciBjb3VudCA9IDA7XG5cbiAgICBjbG9zZXN0X3VsLmZpbmQoXCJ1bFwiKS5zbGlkZVVwKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoKytjb3VudCA9PSBjbG9zZXN0X3VsLmZpbmQoXCJ1bFwiKS5sZW5ndGgpXG4gICAgICAgICAgICBwYXJhbGxlbF9hY3RpdmVfbGlua3MucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgfSk7XG5cbiAgICBpZiAoIWxpbmtfc3RhdHVzKSB7XG4gICAgICAgIGNsb3Nlc3RfbGkuY2hpbGRyZW4oXCJ1bFwiKS5zbGlkZURvd24oKTtcbiAgICAgICAgY2xvc2VzdF9saS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pO1xuXG4gICQoXCIuYWNhcmRpb25GYXJtaWEgYVwiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICB2YXIgbGluayA9ICQodGhpcyk7XG4gICAgdmFyIGNsb3Nlc3RfdWwgPSBsaW5rLmNsb3Nlc3QoXCJ1bFwiKTtcbiAgICB2YXIgcGFyYWxsZWxfYWN0aXZlX2xpbmtzID0gY2xvc2VzdF91bC5maW5kKFwiLmFjdGl2ZVwiKVxuICAgIHZhciBjbG9zZXN0X2xpID0gbGluay5jbG9zZXN0KFwibGlcIik7XG4gICAgdmFyIGxpbmtfc3RhdHVzID0gY2xvc2VzdF9saS5oYXNDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICB2YXIgY291bnQgPSAwO1xuXG4gICAgY2xvc2VzdF91bC5maW5kKFwidWxcIikuc2xpZGVVcChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCsrY291bnQgPT0gY2xvc2VzdF91bC5maW5kKFwidWxcIikubGVuZ3RoKVxuICAgICAgICAgICAgcGFyYWxsZWxfYWN0aXZlX2xpbmtzLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgIH0pO1xuXG4gICAgaWYgKCFsaW5rX3N0YXR1cykge1xuICAgICAgICBjbG9zZXN0X2xpLmNoaWxkcmVuKFwidWxcIikuc2xpZGVEb3duKCk7XG4gICAgICAgIGNsb3Nlc3RfbGkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgfVxuICB9KTtcblxuLypcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHBhZ2luYXRpb25cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuICBmdW5jdGlvbiBzaW1wbGVUZW1wbGF0aW5nKGRhdGEpIHtcbiAgICAgIHZhciBodG1sID0gJzx1bD4nO1xuICAgICAgJC5lYWNoKGRhdGEsIGZ1bmN0aW9uKGluZGV4LCBpdGVtKXtcbiAgICAgICAgICBodG1sICs9ICc8bGk+JysgaXRlbSArJzwvbGk+JztcbiAgICAgIH0pO1xuICAgICAgaHRtbCArPSAnPC91bD4nO1xuICAgICAgcmV0dXJuIGh0bWw7XG4gIH1cbiAgICAvLyB2YXIgc291cmNlcyA9IGZ1bmN0aW9uICgpIHtcblxuICAgIC8vIH0oKTtcbi8vICAgJCgnI3BhZ2luYXRpb24tY29udGFpbmVyJykucGFnaW5hdGlvbih7XG4vLyAgICAgZGF0YVNvdXJjZTogKGZ1bmN0aW9uKCl7XG4vLyAgICAgICB2YXIgcmVzdWx0ID0gW107XG4vLyAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IDE5NjsgaSsrKSB7XG4vLyAgICAgICAgICAgcmVzdWx0LnB1c2goaSk7XG4vLyAgICAgICB9XG4vLyAgICAgICByZXR1cm4gcmVzdWx0O1xuLy8gICAgIH0pKCksXG4vLyAgICAgcHJldlRleHQ6ICc8PCDQvdCw0LfQsNC0ICcsXG4vLyAgICAgbmV4dFRleHQ6ICcg0LLQv9C10YDQtdC0ID4+Jyxcbi8vICAgICBwYWdlU2l6ZTogMSxcbi8vICAgICBjYWxsYmFjazogZnVuY3Rpb24oZGF0YSwgcGFnaW5hdGlvbikge1xuLy8gICAgICAgICB2YXIgaHRtbCA9IHNpbXBsZVRlbXBsYXRpbmcoZGF0YSk7XG4vLyAgICAgICAgICQoJyNkYXRhLWNvbnRhaW5lcicpLmh0bWwoaHRtbCk7XG4vLyAgICAgfVxuLy8gfSlcblxufSkod2luZG93KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
