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
        autoPlay: 5e3,
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
        autoPlay: 5e3
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
        if ($(".dropDownCity").hasClass("active")) {
            $(".wrappDropDown").hide();
            $(".dropDownCity").removeClass("active");
        } else {
            return;
        }
    });
    $(".dropDownCity").click(function(e) {
        $(this).toggleClass("active");
        $(".wrappDropDown").toggle();
        e.stopPropagation();
    });
    var catalogProductsMenu = false;
    $(".wrappMenu .dropDown, .dropDownTopMenu").click(function(e) {
        $(this).toggleClass("active");
        $(".catalogProductsMenu").toggle();
        $(".catalogProductsMenu").height($(".has-class .wrapp-ul").eq(0).height());
        catalogProductsMenu = true;
        e.stopPropagation();
    });
    $(".has-sub").hover(function(e) {
        $(".has-sub").removeClass("active");
        $(this).addClass("active");
        $(".wrapp-ul").removeClass("active");
        $(this).find(".wrapp-ul").addClass("active");
        $(".catalogProductsMenu").height($(this).find(".wrapp-ul").height());
        console.log($(this).find(".wrapp-ul").height());
    });
    $(document).click(function(e) {
        if ($(e.target).closest(".catalogProductsMenu").length == 0) {
            $(".catalogProductsMenu").hide();
            catalogProductsMenu = false;
        } else {
            return;
        }
    });
    $(".contentDropDown a").click(function() {
        $(".contentDropDown a").removeClass("active");
        $(this).addClass("active");
    });
    var smallPopupCart = false;
    $(".btnBuy").click(function(e) {
        smallPopupCart = true;
        $(".smallPopupCart").show();
        e.stopPropagation();
    });
    $(document).click(function(e) {
        if ($(e.target).closest(".smallPopupCart").length == 0) {
            $(".smallPopupCart").hide();
            smallPopupCart = false;
        } else {
            return;
        }
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
    var el = document.querySelector(".wrappSmallPopupCartScrool");
    var serchScroll = document.querySelector(".scrollSeacrh");
    Ps.initialize(el);
    Ps.initialize(serchScroll);
    var isOpenSeacrh = false;
    $(".navbar-form-search").keyup(function() {
        if ($(this).find(".search").val().length >= 1) {
            isOpenSeacrh = true;
            console.log(isOpenSeacrh);
            $(".searchContent").fadeIn(300);
            if (isOpenSeacrh) {
                $(document).click(function() {
                    $(".searchContent").fadeOut(300);
                });
            }
        } else {
            $(".searchContent").fadeOut(300);
            isOpenSeacrh = false;
            console.log(isOpenSeacrh);
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
})(window);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tY2FydXNlbC5qcyIsIm1haW4uanMiXSwibmFtZXMiOlsibWFpbkNhcnVzZWwiLCJzeW5jMSIsIiQiLCJzeW5jMiIsIm93bENhcm91c2VsIiwic2luZ2xlSXRlbSIsInNsaWRlU3BlZWQiLCJuYXZpZ2F0aW9uIiwicGFnaW5hdGlvbiIsImFkZENsYXNzQWN0aXZlIiwiYXV0b0hlaWdodCIsImF1dG9QbGF5IiwiYWZ0ZXJBY3Rpb24iLCJzeW5jUG9zaXRpb24iLCJyZXNwb25zaXZlUmVmcmVzaFJhdGUiLCJpdGVtcyIsIml0ZW1zRGVza3RvcCIsIml0ZW1zRGVza3RvcFNtYWxsIiwiaXRlbXNUYWJsZXQiLCJpdGVtc01vYmlsZSIsImFmdGVySW5pdCIsImVsIiwiZmluZCIsImVxIiwiYWRkQ2xhc3MiLCJjdXJyZW50IiwidGhpcyIsImN1cnJlbnRJdGVtIiwicmVtb3ZlQ2xhc3MiLCJkYXRhIiwidW5kZWZpbmVkIiwiY2VudGVyIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJudW1iZXIiLCJ0cmlnZ2VyIiwic3luYzJ2aXNpYmxlIiwib3dsIiwidmlzaWJsZUl0ZW1zIiwibnVtIiwiZm91bmQiLCJpIiwibGVuZ3RoIiwic2xpZGVyUmVjbGFtYSIsInBhZ2luYXRpb25TcGVlZCIsIm1vYmlsZSIsInByZXNvbmFsV3JhcHAiLCJiYW5uZXIiLCJ2aWV3V2luZG93Iiwid2luZG93Iiwid2lkdGgiLCJkZXN0cm95IiwicmVzaXplIiwiYXBwbCIsImNvbnNvbGUiLCJsb2ciLCJkb2N1bWVudCIsImNsaWNrIiwiaGFzQ2xhc3MiLCJoaWRlIiwidG9nZ2xlQ2xhc3MiLCJ0b2dnbGUiLCJzdG9wUHJvcGFnYXRpb24iLCJjYXRhbG9nUHJvZHVjdHNNZW51IiwiaGVpZ2h0IiwiaG92ZXIiLCJ0YXJnZXQiLCJjbG9zZXN0Iiwic21hbGxQb3B1cENhcnQiLCJzaG93IiwibGVhbk1vZGFsIiwic3RhcnRpbmdfdG9wIiwicGFyZW50Tm9kZSIsImNsYXNzTmFtZSIsInF1ZXJ5U2VsZWN0b3IiLCJzZXJjaFNjcm9sbCIsIlBzIiwiaW5pdGlhbGl6ZSIsImlzT3BlblNlYWNyaCIsImtleXVwIiwidmFsIiwiZmFkZUluIiwiZmFkZU91dCIsInNjcm9sbCIsImV2ZW50Iiwic2Nyb2xsVG9wIiwiY2xvc2VNb2RhbCIsIm9wZW5Nb2RhbCIsImxpbmsiLCJjbG9zZXN0X3VsIiwicGFyYWxsZWxfYWN0aXZlX2xpbmtzIiwiY2xvc2VzdF9saSIsImxpbmtfc3RhdHVzIiwiY291bnQiLCJzbGlkZVVwIiwiY2hpbGRyZW4iLCJzbGlkZURvd24iLCJyZXNpemVXaW5kb3ciLCJsYXJnZSIsIm1lZGRpdW0iLCJhdHRyIl0sIm1hcHBpbmdzIjoiQ0FBQSxTQUFXQTtJQUVULElBQUlDLFFBQVFDLEVBQUU7SUFDZCxJQUFJQyxRQUFRRCxFQUFFO0lBRWRELE1BQU1HO1FBQ0pDLFlBQWE7UUFDYkMsWUFBYTtRQUNiQyxZQUFZO1FBQ1pDLFlBQVk7UUFDWkMsZ0JBQWdCO1FBQ2hCQyxZQUFZO1FBQ1pDLFVBQVU7UUFDVkMsYUFBY0M7UUFDZEMsdUJBQXdCOztJQWExQlgsTUFBTUM7UUFDSlcsT0FBUTtRQUNSQyxnQkFBcUIsTUFBSztRQUMxQkMscUJBQXlCLEtBQUk7UUFDN0JDLGVBQXFCLEtBQUk7UUFDekJDLGFBQW9CO1FBQ3BCWCxZQUFZO1FBQ1pNLHVCQUF3QjtRQUV4Qk0sV0FBWSxTQUFTQztZQUNuQkEsR0FBR0MsS0FBSyxhQUFhQyxHQUFHLEdBQUdDLFNBQVM7OztJQUt4QyxTQUFTWCxhQUFhUTtRQUNwQixJQUFJSSxVQUFVQyxLQUFLQztRQUNuQnpCLEVBQUUsVUFDQ29CLEtBQUssYUFDTE0sWUFBWSxVQUNaTCxHQUFHRSxTQUNIRCxTQUFTO1FBQ1osSUFBR3RCLEVBQUUsVUFBVTJCLEtBQUssbUJBQW1CQyxXQUFVO1lBQy9DQyxPQUFPTjs7O0lBSVh2QixFQUFFLFVBQVU4QixHQUFHLFNBQVMsYUFBYSxTQUFTQztRQUM1Q0EsRUFBRUM7UUFDRixJQUFJQyxTQUFTakMsRUFBRXdC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QUM1QjtZQUVIbkcsRUFBRSxpQkFBaUJtRyxLQUFLLE9BQU87OztJQUduQ0g7SUFDRWhHLEVBQUdnRCxRQUFTRyxPQUFPO0dBdUNwQkgiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAobWFpbkNhcnVzZWwpIHtcblxuICB2YXIgc3luYzEgPSAkKFwiI3N5bmMxXCIpO1xuICB2YXIgc3luYzIgPSAkKFwiI3N5bmMyXCIpO1xuXG4gIHN5bmMxLm93bENhcm91c2VsKHtcbiAgICBzaW5nbGVJdGVtIDogdHJ1ZSxcbiAgICBzbGlkZVNwZWVkIDogMTAwMCxcbiAgICBuYXZpZ2F0aW9uOiBmYWxzZSxcbiAgICBwYWdpbmF0aW9uOiBmYWxzZSxcbiAgICBhZGRDbGFzc0FjdGl2ZTogdHJ1ZSxcbiAgICBhdXRvSGVpZ2h0OiB0cnVlLFxuICAgIGF1dG9QbGF5OiA1MDAwLFxuICAgIGFmdGVyQWN0aW9uIDogc3luY1Bvc2l0aW9uLFxuICAgIHJlc3BvbnNpdmVSZWZyZXNoUmF0ZSA6IDIwMFxuICAgIC8vIGFmdGVyQWN0aW9uIDogZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAvLyAgICAgLy8gdmFyIGxlZyA9IGVsZW0uZmluZCgnLnBob3Rvc2VjdGlvbk9uZScpO1xuICAgIC8vICAgICAvLyBsZWcuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIC8vICAgICAvL2NvbnNvbGUubG9nKGVsZW0pO1xuICAgIC8vICAgfSxcbiAgICAvLyBiZWZvcmVNb3ZlOiBmdW5jdGlvbiAoZWxlbSkge1xuICAgIC8vICAgICAvLyB2YXIgbGVnID0gZWxlbS5maW5kKCcucGhvdG9zZWN0aW9uT25lJyk7XG4gICAgLy8gICAgIC8vIGxlZy5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgLy8gICAgIC8vY29uc29sZS5sb2coZWxlbSk7XG4gICAgLy8gICB9XG4gIH0pO1xuXG4gIHN5bmMyLm93bENhcm91c2VsKHtcbiAgICBpdGVtcyA6IDMsXG4gICAgaXRlbXNEZXNrdG9wICAgICAgOiBbMTE5OSwzXSxcbiAgICBpdGVtc0Rlc2t0b3BTbWFsbCAgICAgOiBbOTc5LDJdLFxuICAgIGl0ZW1zVGFibGV0ICAgICAgIDogWzc2OCwyXSxcbiAgICBpdGVtc01vYmlsZSAgICAgICA6IGZhbHNlLFxuICAgIHBhZ2luYXRpb246IGZhbHNlLFxuICAgIHJlc3BvbnNpdmVSZWZyZXNoUmF0ZSA6IDEwMCxcblxuICAgIGFmdGVySW5pdCA6IGZ1bmN0aW9uKGVsKXtcbiAgICAgIGVsLmZpbmQoXCIub3dsLWl0ZW1cIikuZXEoMCkuYWRkQ2xhc3MoXCJzeW5jZWRcIik7XG5cbiAgICB9XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHN5bmNQb3NpdGlvbihlbCl7XG4gICAgdmFyIGN1cnJlbnQgPSB0aGlzLmN1cnJlbnRJdGVtO1xuICAgICQoXCIjc3luYzJcIilcbiAgICAgIC5maW5kKFwiLm93bC1pdGVtXCIpXG4gICAgICAucmVtb3ZlQ2xhc3MoXCJzeW5jZWRcIilcbiAgICAgIC5lcShjdXJyZW50KVxuICAgICAgLmFkZENsYXNzKFwic3luY2VkXCIpXG4gICAgaWYoJChcIiNzeW5jMlwiKS5kYXRhKFwib3dsQ2Fyb3VzZWxcIikgIT09IHVuZGVmaW5lZCl7XG4gICAgICBjZW50ZXIoY3VycmVudClcbiAgICB9XG4gIH1cblxuICAkKFwiI3N5bmMyXCIpLm9uKFwiY2xpY2tcIiwgXCIub3dsLWl0ZW1cIiwgZnVuY3Rpb24oZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhciBudW1iZXIgPSAkKHRoaXMpLmRhdGEoXCJvd2xJdGVtXCIpO1xuICAgIHN5bmMxLnRyaWdnZXIoXCJvd2wuZ29Ub1wiLG51bWJlcik7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGNlbnRlcihudW1iZXIpe1xuICAgIHZhciBzeW5jMnZpc2libGUgPSBzeW5jMi5kYXRhKFwib3dsQ2Fyb3VzZWxcIikub3dsLnZpc2libGVJdGVtcztcbiAgICB2YXIgbnVtID0gbnVtYmVyO1xuICAgIHZhciBmb3VuZCA9IGZhbHNlO1xuICAgIGZvcih2YXIgaSBpbiBzeW5jMnZpc2libGUpe1xuICAgICAgaWYobnVtID09PSBzeW5jMnZpc2libGVbaV0pe1xuICAgICAgICB2YXIgZm91bmQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmKGZvdW5kPT09ZmFsc2Upe1xuICAgICAgaWYobnVtPnN5bmMydmlzaWJsZVtzeW5jMnZpc2libGUubGVuZ3RoLTFdKXtcbiAgICAgICAgc3luYzIudHJpZ2dlcihcIm93bC5nb1RvXCIsIG51bSAtIHN5bmMydmlzaWJsZS5sZW5ndGgrMilcbiAgICAgIH1lbHNle1xuICAgICAgICBpZihudW0gLSAxID09PSAtMSl7XG4gICAgICAgICAgbnVtID0gMDtcbiAgICAgICAgfVxuICAgICAgICBzeW5jMi50cmlnZ2VyKFwib3dsLmdvVG9cIiwgbnVtKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYobnVtID09PSBzeW5jMnZpc2libGVbc3luYzJ2aXNpYmxlLmxlbmd0aC0xXSl7XG4gICAgICBzeW5jMi50cmlnZ2VyKFwib3dsLmdvVG9cIiwgc3luYzJ2aXNpYmxlWzFdKVxuICAgIH0gZWxzZSBpZihudW0gPT09IHN5bmMydmlzaWJsZVswXSl7XG4gICAgICBzeW5jMi50cmlnZ2VyKFwib3dsLmdvVG9cIiwgbnVtLTEpXG4gICAgfVxuXG4gIH1cbiAgLy8gc2xpZGVyLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHZhciBzbGlkZXJSZWNsYW1hO1xuICAgIHNsaWRlclJlY2xhbWEgPSB7XG4gICAgICBuYXZpZ2F0aW9uIDogZmFsc2UsXG4gICAgICBzbGlkZVNwZWVkIDogMzAwLFxuICAgICAgcGFnaW5hdGlvblNwZWVkIDogNDAwLFxuICAgICAgc2luZ2xlSXRlbTogdHJ1ZSxcbiAgICAgIGF1dG9QbGF5OiA1MDAwXG4gICAgfTtcblxuICAkKCcuc2xpZGVyUmVjbGFtYScpLm93bENhcm91c2VsKHNsaWRlclJlY2xhbWEpO1xuICAvLyBzbGlkZXJQcmVzb25lLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGZ1bmN0aW9uIG1vYmlsZSgpIHtcbiAgICB2YXIgcHJlc29uYWxXcmFwcCA9IHtcbiAgICAgIG5hdmlnYXRpb24gOiBmYWxzZSxcbiAgICAgIHNsaWRlU3BlZWQgOiAzMDAsXG4gICAgICBwYWdpbmF0aW9uU3BlZWQgOiA0MDAsXG4gICAgICBzaW5nbGVJdGVtOiB0cnVlLFxuICAgIH07XG4gICAgJCgnLnByZXNvbmFsV3JhcHAnKS5vd2xDYXJvdXNlbChwcmVzb25hbFdyYXBwKTtcbiAgICB2YXIgb3dsID0gJChcIi5vd2wtY2Fyb3VzZWxcIikuZGF0YSgnb3dsQ2Fyb3VzZWwnKTtcbiAgICB2YXIgYmFubmVyID0gJCgnLnByZXNvbmFsV3JhcHAnKTtcbiAgICB2YXIgdmlld1dpbmRvdyA9ICQoIHdpbmRvdyApLndpZHRoKCk7XG5cbiAgICBpZih2aWV3V2luZG93ID4gNDgwKXtcbiAgICAgIC8vIG93bC5kZXN0cm95KCk7XG4gICAgICBpZih0eXBlb2YgYmFubmVyLmRhdGEoJ293bENhcm91c2VsJykgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgYmFubmVyLmRhdGEoJ293bENhcm91c2VsJykuZGVzdHJveSgpO1xuICAgICAgICBiYW5uZXIucmVtb3ZlQ2xhc3MoJ293bC1jYXJvdXNlbCcpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG4gIG1vYmlsZSgpO1xuICAkKCB3aW5kb3cgKS5yZXNpemUoZnVuY3Rpb24oKSB7XG4gICAgIG1vYmlsZSgpO1xuICB9KVxuXG59KSh3aW5kb3cpO1xuXG4iLCIoZnVuY3Rpb24gKGFwcGwpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGNvbnNvbGUubG9nKCdtYWluLmpzJyk7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBkcm9kRG93blxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGRyb2REb3duQ2l0eVxuJChkb2N1bWVudCkuY2xpY2soZnVuY3Rpb24oKXtcblxuICBpZiAoJCgnLmRyb3BEb3duQ2l0eScpLmhhc0NsYXNzKCdhY3RpdmUnKSl7XG4gICAgJChcIi53cmFwcERyb3BEb3duXCIpLmhpZGUoKTtcbiAgICAkKCcuZHJvcERvd25DaXR5JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICB9ZWxzZXtcbiAgICByZXR1cm47XG4gIH1cbn0pO1xuXG4kKFwiLmRyb3BEb3duQ2l0eVwiKS5jbGljayhmdW5jdGlvbihlKXtcbiAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICQoXCIud3JhcHBEcm9wRG93blwiKS50b2dnbGUoKTtcbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbn0pO1xuLy8gZHJvZERvd25NZW51XG4vLyB2YXIgb3ZlcmxheSA9ICQoJy5vdmVybGF5RHJvcERvd24nKTtcbnZhciBjYXRhbG9nUHJvZHVjdHNNZW51ID0gZmFsc2U7XG4gICQoJy53cmFwcE1lbnUgLmRyb3BEb3duLCAuZHJvcERvd25Ub3BNZW51JykuY2xpY2soZnVuY3Rpb24oZSl7XG5cbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAkKCcuY2F0YWxvZ1Byb2R1Y3RzTWVudScpLnRvZ2dsZSgpO1xuICAgICQoJy5jYXRhbG9nUHJvZHVjdHNNZW51JykuaGVpZ2h0KCQoJy5oYXMtY2xhc3MgLndyYXBwLXVsJykuZXEoMCkuaGVpZ2h0KCkpO1xuICAgIC8vIG92ZXJsYXkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIGNhdGFsb2dQcm9kdWN0c01lbnUgPSB0cnVlO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG4gICAgICQoJy5oYXMtc3ViJykuaG92ZXIoZnVuY3Rpb24oZSl7XG5cbiAgICAgICAgJCgnLmhhcy1zdWInKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAkKCcud3JhcHAtdWwnKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAgICAgJCh0aGlzKS5maW5kKCcud3JhcHAtdWwnKS5hZGRDbGFzcygnYWN0aXZlJylcbiAgICAgICAgJCgnLmNhdGFsb2dQcm9kdWN0c01lbnUnKS5oZWlnaHQoJCh0aGlzKS5maW5kKCcud3JhcHAtdWwnKS5oZWlnaHQoKSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJCh0aGlzKS5maW5kKCcud3JhcHAtdWwnKS5oZWlnaHQoKSlcblxuICAgIH0pXG4gIC8vIGRyb2REb3duTWVudSBjbG9zZVxuICAkKGRvY3VtZW50KS5jbGljayggZnVuY3Rpb24oZSl7XG5cbiAgICBpZigkKGUudGFyZ2V0KS5jbG9zZXN0KCcuY2F0YWxvZ1Byb2R1Y3RzTWVudScpLmxlbmd0aCA9PSAwKXtcbiAgICAgICQoJy5jYXRhbG9nUHJvZHVjdHNNZW51JykuaGlkZSgpO1xuICAgICAgY2F0YWxvZ1Byb2R1Y3RzTWVudSA9IGZhbHNlO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICB9KTtcblxuICAvLyAtLS0tLS0tLS0tXG4gICQoJy5jb250ZW50RHJvcERvd24gYScpLmNsaWNrKGZ1bmN0aW9uKCl7XG5cbiAgICAkKCcuY29udGVudERyb3BEb3duIGEnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgfSk7XG5cbiAgLy8gQ2FydCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICB2YXIgc21hbGxQb3B1cENhcnQgPSBmYWxzZTtcbiAgJCgnLmJ0bkJ1eScpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuICAgIHNtYWxsUG9wdXBDYXJ0ID0gdHJ1ZTtcbiAgICAkKCcuc21hbGxQb3B1cENhcnQnKS5zaG93KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfSk7XG5cbiAgJChkb2N1bWVudCkuY2xpY2soIGZ1bmN0aW9uKGUpe1xuXG4gICAgaWYoJChlLnRhcmdldCkuY2xvc2VzdCgnLnNtYWxsUG9wdXBDYXJ0JykubGVuZ3RoID09IDApe1xuICAgICAgJCgnLnNtYWxsUG9wdXBDYXJ0JykuaGlkZSgpO1xuICAgICAgc21hbGxQb3B1cENhcnQgPSBmYWxzZTtcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIHNlYXJjaExldHRlci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAkKCcubGV0dGVyc0xpbmsnKS5lcSgwKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgJCgnLmxldHRlcnNMaW5rJykuY2xpY2soZnVuY3Rpb24oKXtcblxuICAgIGlmKCEkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSl7XG4gICAgICAkKCcubGV0dGVyc0xpbmsnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBNb2RhbFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgJCgnLm1vZGFsLXRyaWdnZXInKS5sZWFuTW9kYWwoe1xuICAgIHN0YXJ0aW5nX3RvcDogJzEwJScsXG4gIH0pO1xuICAvLyAkKCcjbW9kYWxNZW51Jykub3Blbk1vZGFsKCk7XG4gIC8vIEZvcm1Nb2RsYS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICQoJy5sb2dpbkJ0bk1vZGFsJykuY2xpY2soZnVuY3Rpb24oZSl7XG5cbiAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSl7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAkKCcuYXV0aG9yaXphdGlvbiAuYnRuJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkKCcucmVnaXN0cmF0aW9uJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgJCgnLmZvcmdvdFB3ZCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICQoJy5zaWduSW4nKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgfVxuICB9KTtcbiAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAkKCcucmlnaXN0ZXJCdG5Nb2RhbCcpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnBhcmVudE5vZGUpXG4gICAgaWYoZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc05hbWUgPT0gJ2FjdGl2ZScpe1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgJCgnLmF1dGhvcml6YXRpb24gLmJ0bicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgJCgnLmZvcmdvdFB3ZCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICQoJy5zaWduSW4nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkKCcucmVnaXN0cmF0aW9uJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH1cbiAgfSk7XG4gIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgJCgnLmZvZ290UGFzc3dvcmQnKS5jbGljayhmdW5jdGlvbihlKXtcblxuICAgJCgnLmF1dGhvcml6YXRpb24gLmJ0bicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblxuXG4gICAgJCgnLnNpZ25JbicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAkKCcuZm9yZ290UHdkJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gIH0pO1xuXG4vKlxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgU2ltbGViYXIgU2Nyb2xsXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbiAgLy8gbWluaSBDYXJ0XG4gIC8vICQoJy53cmFwcFNtYWxsUG9wdXBDYXJ0U2Nyb29sJykuc2ltcGxlYmFyKCk7XG4gIHZhciBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcFNtYWxsUG9wdXBDYXJ0U2Nyb29sJyk7XG4gIHZhciBzZXJjaFNjcm9sbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY3JvbGxTZWFjcmgnKTtcbiAgUHMuaW5pdGlhbGl6ZShlbCk7XG4gIFBzLmluaXRpYWxpemUoc2VyY2hTY3JvbGwpO1xuXG4gIC8vIHNlYXJjaC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gJCgnLnNjcm9sbFNlYWNyaCcpLnNpbXBsZWJhcigpO1xuICAgIHZhciBpc09wZW5TZWFjcmggPSBmYWxzZTtcbiAgICAkKCcubmF2YmFyLWZvcm0tc2VhcmNoJykua2V5dXAoZnVuY3Rpb24oKXtcbiAgICAgIGlmKCQodGhpcykuZmluZCgnLnNlYXJjaCcpLnZhbCgpLmxlbmd0aCA+PSAxKXtcbiAgICAgICAgaXNPcGVuU2VhY3JoID0gdHJ1ZTtcbiAgICAgICAgY29uc29sZS5sb2coaXNPcGVuU2VhY3JoKVxuICAgICAgICAkKCcuc2VhcmNoQ29udGVudCcpLmZhZGVJbigzMDApO1xuICAgICAgICBpZihpc09wZW5TZWFjcmgpe1xuICAgICAgICAgICAgJChkb2N1bWVudCkuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgJCgnLnNlYXJjaENvbnRlbnQnKS5mYWRlT3V0KDMwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICB9ZWxzZXtcbiAgICAgICAgJCgnLnNlYXJjaENvbnRlbnQnKS5mYWRlT3V0KDMwMCk7XG4gICAgICAgIGlzT3BlblNlYWNyaCA9IGZhbHNlO1xuICAgICAgICBjb25zb2xlLmxvZyhpc09wZW5TZWFjcmgpXG4gICAgICB9XG5cbiAgICB9KTtcblxuXG4vLyBGaXggTWVudS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdmFyIHNjcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblxuICAgIGlmKHNjcm9sbCA+IDMyKXtcbiAgICAgICQoJy5taWRkbGUsIC5jYXRhbG9nUHJvZHVjdHNNZW51JykuYWRkQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAkKCcubWlkZGxlLCAuY2F0YWxvZ1Byb2R1Y3RzTWVudScpLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgIH1cblxuICB9KTtcblxuLypcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIEFjYXJkaW9uIE1lbnVcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuXG4gICQoXCIuYnVyZ2VyLW1lbnVcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuXG4gICAgaWYoJCh0aGlzKS5oYXNDbGFzcygnbWVudS1vbicpKXtcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ21lbnUtb24nKTtcbiAgICAgICQoJyNtb2RhbE1lbnUnKS5jbG9zZU1vZGFsKCk7XG4gICAgfWVsc2V7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdtZW51LW9uJyk7XG4gICAgICAkKCcjbW9kYWxNZW51Jykub3Blbk1vZGFsKCk7XG4gICAgfVxuICB9KTtcblxuICAgJChcIiNhY2NvcmRpYW4gYVwiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICB2YXIgbGluayA9ICQodGhpcyk7XG4gICAgdmFyIGNsb3Nlc3RfdWwgPSBsaW5rLmNsb3Nlc3QoXCJ1bFwiKTtcbiAgICB2YXIgcGFyYWxsZWxfYWN0aXZlX2xpbmtzID0gY2xvc2VzdF91bC5maW5kKFwiLmFjdGl2ZVwiKVxuICAgIHZhciBjbG9zZXN0X2xpID0gbGluay5jbG9zZXN0KFwibGlcIik7XG4gICAgdmFyIGxpbmtfc3RhdHVzID0gY2xvc2VzdF9saS5oYXNDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICB2YXIgY291bnQgPSAwO1xuXG4gICAgY2xvc2VzdF91bC5maW5kKFwidWxcIikuc2xpZGVVcChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCsrY291bnQgPT0gY2xvc2VzdF91bC5maW5kKFwidWxcIikubGVuZ3RoKVxuICAgICAgICAgICAgcGFyYWxsZWxfYWN0aXZlX2xpbmtzLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgIH0pO1xuXG4gICAgaWYgKCFsaW5rX3N0YXR1cykge1xuICAgICAgICBjbG9zZXN0X2xpLmNoaWxkcmVuKFwidWxcIikuc2xpZGVEb3duKCk7XG4gICAgICAgIGNsb3Nlc3RfbGkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgfVxuICB9KTtcblxuICAkKFwiLmFjYXJkaW9uRmFybWlhIGFcIikuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxpbmsgPSAkKHRoaXMpO1xuICAgIHZhciBjbG9zZXN0X3VsID0gbGluay5jbG9zZXN0KFwidWxcIik7XG4gICAgdmFyIHBhcmFsbGVsX2FjdGl2ZV9saW5rcyA9IGNsb3Nlc3RfdWwuZmluZChcIi5hY3RpdmVcIilcbiAgICB2YXIgY2xvc2VzdF9saSA9IGxpbmsuY2xvc2VzdChcImxpXCIpO1xuICAgIHZhciBsaW5rX3N0YXR1cyA9IGNsb3Nlc3RfbGkuaGFzQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgdmFyIGNvdW50ID0gMDtcblxuICAgIGNsb3Nlc3RfdWwuZmluZChcInVsXCIpLnNsaWRlVXAoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICgrK2NvdW50ID09IGNsb3Nlc3RfdWwuZmluZChcInVsXCIpLmxlbmd0aClcbiAgICAgICAgICAgIHBhcmFsbGVsX2FjdGl2ZV9saW5rcy5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICB9KTtcblxuICAgIGlmICghbGlua19zdGF0dXMpIHtcbiAgICAgICAgY2xvc2VzdF9saS5jaGlsZHJlbihcInVsXCIpLnNsaWRlRG93bigpO1xuICAgICAgICBjbG9zZXN0X2xpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSk7XG5cbi8qXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBiYW5lclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG4gIGZ1bmN0aW9uIHJlc2l6ZVdpbmRvdygpe1xuICAgIC8vIGNvbnNvbGUubG9nKCdyZXNpemVXaW5kb3cgd29yaycpXG4gICAgdmFyIGxhcmdlLCBtZWRkaXVtLCB2aWV3V2luZG93O1xuICAgIHZpZXdXaW5kb3cgPSAkKCB3aW5kb3cgKS53aWR0aCgpOyBsYXJnZSA9IDEwMjQ7IG1lZGRpdW0gPSA3Njg7XG4gICAgaWYgKHZpZXdXaW5kb3cgPj0gbGFyZ2UpIHtcbiAgICAgICQoJy5iYW5lclJlY2xhbWUnKS5hdHRyKCdzcmMnLCAnaW1hZ2VzL3VwbG9hZC9zZWN0aW9uT25lL2JhbmVyLTEuanBnJyk7XG4gICAgICAvL2NvbnNvbGUubG9nKCdMYXJnZTogJysgdmlld1dpbmRvdylcbiAgICB9ZWxzZSBpZih2aWV3V2luZG93ID49IG1lZGRpdW0pe1xuICAgICAvLyBjb25zb2xlLmxvZygnbWVkZGl1bTogJysgdmlld1dpbmRvdylcbiAgICAgICQoJy5iYW5lclJlY2xhbWUnKS5hdHRyKCdzcmMnLCAnaW1hZ2VzL3VwbG9hZC9zZWN0aW9uT25lL2JhbmVyX3RhYmxldC5qcGcnKTtcbiAgICB9ZWxzZXtcbiAgICAgIC8vY29uc29sZS5sb2coJ3NtYWxsOiAnKyB2aWV3V2luZG93KVxuICAgICAgJCgnLmJhbmVyUmVjbGFtZScpLmF0dHIoJ3NyYycsICdpbWFnZXMvdXBsb2FkL3NlY3Rpb25PbmUvYmFuZXJfbW9iaWxlLmpwZycpO1xuICAgIH1cbiAgfTtcbiAgcmVzaXplV2luZG93KCk7XG4gICAgJCggd2luZG93ICkucmVzaXplKGZ1bmN0aW9uKCkge1xuXG4gICAgICAvLyByZXNpemVXaW5kb3coKTtcblxuICAgIH0pO1xuXG4vKlxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcGFnaW5hdGlvblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG4gIC8vIGZ1bmN0aW9uIHNpbXBsZVRlbXBsYXRpbmcoZGF0YSkge1xuICAvLyAgICAgdmFyIGh0bWwgPSAnPHVsPic7XG4gIC8vICAgICAkLmVhY2goZGF0YSwgZnVuY3Rpb24oaW5kZXgsIGl0ZW0pe1xuICAvLyAgICAgICAgIGh0bWwgKz0gJzxsaT4nKyBpdGVtICsnPC9saT4nO1xuICAvLyAgICAgfSk7XG4gIC8vICAgICBodG1sICs9ICc8L3VsPic7XG4gIC8vICAgICByZXR1cm4gaHRtbDtcbiAgLy8gfVxuICAgIC8vIHZhciBzb3VyY2VzID0gZnVuY3Rpb24gKCkge1xuXG4gICAgLy8gfSgpO1xuICAvLyAgICQoJyNwYWdpbmF0aW9uLWNvbnRhaW5lcicpLnBhZ2luYXRpb24oe1xuICAvLyAgICAgZGF0YVNvdXJjZTogKGZ1bmN0aW9uKCl7XG4gIC8vICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgLy8gICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCAxOTY7IGkrKykge1xuICAvLyAgICAgICAgICAgcmVzdWx0LnB1c2goaSk7XG4gIC8vICAgICAgIH1cbiAgLy8gICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgLy8gICAgIH0pKCksXG4gIC8vICAgICBwcmV2VGV4dDogJzw8INC90LDQt9Cw0LQgJyxcbiAgLy8gICAgIG5leHRUZXh0OiAnINCy0L/QtdGA0LXQtCA+PicsXG4gIC8vICAgICBwYWdlU2l6ZTogMSxcbiAgLy8gICAgIGNhbGxiYWNrOiBmdW5jdGlvbihkYXRhLCBwYWdpbmF0aW9uKSB7XG4gIC8vICAgICAgICAgdmFyIGh0bWwgPSBzaW1wbGVUZW1wbGF0aW5nKGRhdGEpO1xuICAvLyAgICAgICAgICQoJyNkYXRhLWNvbnRhaW5lcicpLmh0bWwoaHRtbCk7XG4gIC8vICAgICB9XG4gIC8vIH0pXG5cbn0pKHdpbmRvdyk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
