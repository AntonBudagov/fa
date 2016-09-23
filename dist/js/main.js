(function(appl) {
    "use strict";
    console.log("mai1n.js");
    var overlay = $(".overlayDropDown");
    $(".dropDownCity").click(function() {
        $(this).toggleClass("active");
        $(".wrappDropDown").slideToggle(300);
        overlay.addClass("active");
    });
    overlay.click(function() {
        $(this).removeClass("active");
        $(".wrappDropDown").slideUp(300);
        $(".dropDownCity").removeClass("active");
        $(".smallPopupCart").fadeOut("slow");
        $(".smallPopupCartScrool").fadeOut("slow");
        $(".catalogProductsMenu").slideUp(300);
    });
    $(".contentDropDown a").click(function() {
        $(".contentDropDown a").removeClass("active");
        $(this).addClass("active");
    });
    var cartOpen = false;
    $(".btnCart").hover(function() {
        $(".smallPopupCartScrool").fadeIn(300);
        overlay.addClass("active");
    });
    $(".btnBuy").click(function() {
        $(".smallPopupCart").fadeIn(300);
        overlay.addClass("active");
    });
    $(".lettersLink").eq(0).addClass("active");
    $(".lettersLink").click(function() {
        if (!$(this).hasClass("active")) {
            $(".lettersLink").removeClass("active");
            $(this).addClass("active");
        }
    });
    $(".wrappMenu .dropDown").click(function() {
        $(this).toggleClass("active");
        $(".catalogProductsMenu").slideToggle(300);
        overlay.addClass("active");
    });
    var sliderReclama;
    sliderReclama = {
        items: 1,
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5e3,
        autoplayHoverPause: true
    };
    var sliderSectionOne = {
        items: 1,
        loop: true,
        margin: 0,
        nav: false,
        dotData: true,
        dots: true
    };
    $(".sliderReclama").owlCarousel(sliderReclama);
    $(".modal-trigger").leanModal({
        starting_top: "10%"
    });
    $("#modal2").openModal();
    $(".loginBtnModal").click(function(e) {
        if ($(this).hasClass("active")) {
            return;
        } else {
            $(".authorization .btn").removeClass("active");
            $(this).addClass("active");
            $(".registration").removeClass("active");
            $(".forgotPwd").removeClass("active");
            $(".sigin").addClass("active");
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
            $(".sigin").removeClass("active");
            $(".registration").addClass("active");
        }
    });
    $(".fogotPassword").click(function(e) {
        $(".authorization .btn").removeClass("active");
        $(".sigin").removeClass("active");
        $(".forgotPwd").addClass("active");
    });
    $("#wrappScroll").height(180);
    $("#wrappScroll").simplebar();
    $(".scrollSeacrh").simplebar();
    $("#search").keyup(function() {
        if ($("#search").val().length >= 1) {
            $(".searchContent").fadeIn(300);
        } else {
            $(".searchContent").fadeOut(300);
        }
    });
    $(".burger-menu").click(function() {
        $(this).toggleClass("menu-on");
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
})(window);
(function(rippleBtn) {
    "use strict";
    console.log("rippleBtn");
})(window);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJyaXBwbGVCdXR0b24uanMiXSwibmFtZXMiOlsiYXBwbCIsImNvbnNvbGUiLCJsb2ciLCJvdmVybGF5IiwiJCIsImNsaWNrIiwidGhpcyIsInRvZ2dsZUNsYXNzIiwic2xpZGVUb2dnbGUiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwic2xpZGVVcCIsImZhZGVPdXQiLCJjYXJ0T3BlbiIsImhvdmVyIiwiZmFkZUluIiwiZXEiLCJoYXNDbGFzcyIsInNsaWRlclJlY2xhbWEiLCJpdGVtcyIsImxvb3AiLCJtYXJnaW4iLCJuYXYiLCJkb3RzIiwiYXV0b3BsYXkiLCJhdXRvcGxheVRpbWVvdXQiLCJhdXRvcGxheUhvdmVyUGF1c2UiLCJzbGlkZXJTZWN0aW9uT25lIiwiZG90RGF0YSIsIm93bENhcm91c2VsIiwibGVhbk1vZGFsIiwic3RhcnRpbmdfdG9wIiwib3Blbk1vZGFsIiwiZSIsInRhcmdldCIsInBhcmVudE5vZGUiLCJjbGFzc05hbWUiLCJoZWlnaHQiLCJzaW1wbGViYXIiLCJrZXl1cCIsInZhbCIsImxlbmd0aCIsImxpbmsiLCJjbG9zZXN0X3VsIiwiY2xvc2VzdCIsInBhcmFsbGVsX2FjdGl2ZV9saW5rcyIsImZpbmQiLCJjbG9zZXN0X2xpIiwibGlua19zdGF0dXMiLCJjb3VudCIsImNoaWxkcmVuIiwic2xpZGVEb3duIiwid2luZG93IiwicmlwcGxlQnRuIl0sIm1hcHBpbmdzIjoiQ0FBQSxTQUFXQTtJQUNUO0lBRUFDLFFBQVFDLElBQUk7SUFLWixJQUFJQyxVQUFVQyxFQUFFO0lBRWhCQSxFQUFFLGlCQUFpQkMsTUFBTTtRQUV2QkQsRUFBRUUsTUFBTUMsWUFBWTtRQUNwQkgsRUFBRSxrQkFBa0JJLFlBQVk7UUFDaENMLFFBQVFNLFNBQVM7O0lBR25CTixRQUFRRSxNQUFNO1FBQ1ZELEVBQUVFLE1BQU1JLFlBQVk7UUFDckJOLEVBQUUsa0JBQWtCTyxRQUFRO1FBQzVCUCxFQUFFLGlCQUFpQk0sWUFBWTtRQUU5Qk4sRUFB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LFFBQVE7WUFDMUIsTUFBTXNDLFNBQVNOLFdBQVdHLEtBQUssTUFBTUwsUUFDakNJLHNCQUFzQm5DLFlBQVk7O1FBRzFDLEtBQUtzQyxhQUFhO1lBQ2RELFdBQVdHLFNBQVMsTUFBTUM7WUFDMUJKLFdBQVd0QyxTQUFTOzs7R0FHekIyQztDQ2xOSCxTQUFXQztJQUNUO0lBRUZwRCxRQUFRQyxJQUFJO0dBR1RrRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIChhcHBsKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBjb25zb2xlLmxvZygnbWFpMW4uanMnKTtcblxuXG5cbiAgLy8gZHJvZERvd25DaXR5LS0tLS0tLS0tLVxuICB2YXIgb3ZlcmxheSA9ICQoJy5vdmVybGF5RHJvcERvd24nKTtcblxuICAkKCcuZHJvcERvd25DaXR5JykuY2xpY2soZnVuY3Rpb24oKXtcblxuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICQoJy53cmFwcERyb3BEb3duJykuc2xpZGVUb2dnbGUoMzAwKTtcbiAgICBvdmVybGF5LmFkZENsYXNzKCdhY3RpdmUnKVxuXG4gIH0pO1xuICBvdmVybGF5LmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgICAkKCcud3JhcHBEcm9wRG93bicpLnNsaWRlVXAoMzAwKVxuICAgICAkKCcuZHJvcERvd25DaXR5JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG5cbiAgICAgICQoJy5zbWFsbFBvcHVwQ2FydCcpLmZhZGVPdXQoJ3Nsb3cnKVxuICAgICAgJCgnLnNtYWxsUG9wdXBDYXJ0U2Nyb29sJykuZmFkZU91dCgnc2xvdycpXG5cbiAgICAgICQoJy5jYXRhbG9nUHJvZHVjdHNNZW51Jykuc2xpZGVVcCgzMDApXG5cbiAgfSk7XG4gIC8vIC0tLS0tLS0tLS1cbiAgJCgnLmNvbnRlbnREcm9wRG93biBhJykuY2xpY2soZnVuY3Rpb24oKXtcblxuICAgICQoJy5jb250ZW50RHJvcERvd24gYScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICB9KTtcblxuICAvLyBDYXJ0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB2YXIgY2FydE9wZW4gPSBmYWxzZTtcbiAgJCgnLmJ0bkNhcnQnKS5ob3ZlcihmdW5jdGlvbigpe1xuXG4gICAgLy8gJCgnLnNtYWxsUG9wdXBDYXJ0JykuZmFkZUluKDMwMCk7XG4gICAgJCgnLnNtYWxsUG9wdXBDYXJ0U2Nyb29sJykuZmFkZUluKDMwMCk7XG4gICAgb3ZlcmxheS5hZGRDbGFzcygnYWN0aXZlJylcblxuICB9KTtcblxuICAkKCcuYnRuQnV5JykuY2xpY2soZnVuY3Rpb24oKXtcblxuICAgICQoJy5zbWFsbFBvcHVwQ2FydCcpLmZhZGVJbigzMDApO1xuICAgIG92ZXJsYXkuYWRkQ2xhc3MoJ2FjdGl2ZScpXG5cbiAgfSk7XG5cblxuXG5cbiAgLy8gc2VhcmNoTGV0dGVyLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICQoJy5sZXR0ZXJzTGluaycpLmVxKDApLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICAkKCcubGV0dGVyc0xpbmsnKS5jbGljayhmdW5jdGlvbigpe1xuXG4gICAgaWYoISQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKXtcbiAgICAgICQoJy5sZXR0ZXJzTGluaycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gTWVudSBkcm9wRG93blxuICAgJCgnLndyYXBwTWVudSAuZHJvcERvd24nKS5jbGljayhmdW5jdGlvbigpe1xuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICQoJy5jYXRhbG9nUHJvZHVjdHNNZW51Jykuc2xpZGVUb2dnbGUoMzAwKTtcbiAgICAgb3ZlcmxheS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gIH0pXG5cblxuICAvLyBTbGlkZXItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdmFyIHNsaWRlclJlY2xhbWE7XG4gICAgc2xpZGVyUmVjbGFtYSA9IHtcbiAgICAgIGl0ZW1zOjEsXG4gICAgICBsb29wOnRydWUsXG4gICAgICBtYXJnaW46MCxcbiAgICAgIG5hdjpmYWxzZSxcbiAgICAgIGRvdHM6dHJ1ZSxcbiAgICAgIGF1dG9wbGF5OnRydWUsXG4gICAgICBhdXRvcGxheVRpbWVvdXQ6NTAwMCxcbiAgICAgIGF1dG9wbGF5SG92ZXJQYXVzZTp0cnVlXG4gICAgfTtcbiAgdmFyIHNsaWRlclNlY3Rpb25PbmUgPSB7XG4gICAgaXRlbXM6MSxcbiAgICBsb29wOnRydWUsXG4gICAgbWFyZ2luOjAsXG4gICAgbmF2OmZhbHNlLFxuICAgIGRvdERhdGE6dHJ1ZSxcbiAgICBkb3RzOnRydWVcbiAgICAvLyBhdXRvcGxheTp0cnVlLFxuICAgIC8vIGF1dG9wbGF5VGltZW91dDo1MDAwLFxuICAgIC8vIGF1dG9wbGF5SG92ZXJQYXVzZTp0cnVlXG4gIH1cblxuICAkKCcuc2xpZGVyUmVjbGFtYScpLm93bENhcm91c2VsKHNsaWRlclJlY2xhbWEpO1xuICAvLyAkKCcuc2xpZGVyU2VjdGlvbk9uZScpLm93bENhcm91c2VsKHNsaWRlclNlY3Rpb25PbmUpO1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBNb2RhbFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgJCgnLm1vZGFsLXRyaWdnZXInKS5sZWFuTW9kYWwoe1xuICAgIHN0YXJ0aW5nX3RvcDogJzEwJScsXG4gIH0pO1xuXG4gICQoJyNtb2RhbDInKS5vcGVuTW9kYWwoKTtcbiAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAkKCcubG9naW5CdG5Nb2RhbCcpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuXG4gICAgaWYoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpe1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgJCgnLmF1dGhvcml6YXRpb24gLmJ0bicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgJCgnLnJlZ2lzdHJhdGlvbicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICQoJy5mb3Jnb3RQd2QnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkKCcuc2lnaW4nKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgfVxuICB9KTtcbiAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAkKCcucmlnaXN0ZXJCdG5Nb2RhbCcpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnBhcmVudE5vZGUpXG4gICAgaWYoZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc05hbWUgPT0gJ2FjdGl2ZScpe1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgJCgnLmF1dGhvcml6YXRpb24gLmJ0bicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgJCgnLmZvcmdvdFB3ZCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICQoJy5zaWdpbicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICQoJy5yZWdpc3RyYXRpb24nKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgfVxuICB9KTtcbiAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICQoJy5mb2dvdFBhc3N3b3JkJykuY2xpY2soZnVuY3Rpb24oZSl7XG5cbiAgICQoJy5hdXRob3JpemF0aW9uIC5idG4nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cblxuICAgICQoJy5zaWdpbicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAkKCcuZm9yZ290UHdkJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gIH0pO1xuXG4gIC8vIFNpbWxlYmFyIFNjcm9sbFxuICAvLyBtaW5pIENhcnRcbiAgJCgnI3dyYXBwU2Nyb2xsJykuaGVpZ2h0KDE4MCk7XG4gICQoJyN3cmFwcFNjcm9sbCcpLnNpbXBsZWJhcigpO1xuICAvLyBzZWFyY2gtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICQoJy5zY3JvbGxTZWFjcmgnKS5zaW1wbGViYXIoKTtcblxuICAkKCcjc2VhcmNoJykua2V5dXAoZnVuY3Rpb24oKXtcblxuICAgIGlmKCQoJyNzZWFyY2gnKS52YWwoKS5sZW5ndGggPj0gMSl7XG4gICAgICAgICQoJy5zZWFyY2hDb250ZW50JykuZmFkZUluKDMwMCk7XG4gICAgfWVsc2V7XG4gICAgICAkKCcuc2VhcmNoQ29udGVudCcpLmZhZGVPdXQoMzAwKTtcbiAgICB9XG5cbiAgfSk7XG5cblxuLy8gc2Nyb2xsLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKGV2ZW50KSB7XG4vLyAgICAgdmFyIHNjcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblxuLy8gICAgIGlmKHNjcm9sbCA+IDMyKXtcbi8vICAgICAgICQoJy5taWRkbGUnKS5hZGRDbGFzcygnZml4ZWQnKVxuLy8gICAgIH1cbi8vICAgICBlbHNle1xuLy8gICAgICAgJCgnLm1pZGRsZScpLnJlbW92ZUNsYXNzKCdmaXhlZCcpXG4vLyAgICAgfVxuXG4vLyB9KTtcblxuXG4vLyBjYXJ0IERlbGV0ZVxuICAvLyAkKCcuZGVsZXRlJykuY2xpY2soZnVuY3Rpb24oKXtcblxuICAvLyAgICQodGhpcykucGFyZW50KCkuaHRtbCgnJyk7XG4gIC8vIH0pXG4vLyBBY2FyZGlvbiBNZW51XG5cbiAgJChcIi5idXJnZXItbWVudVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcIm1lbnUtb25cIik7XG4gIH0pO1xuXG4gICQoXCIjYWNjb3JkaWFuIGFcIikuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxpbmsgPSAkKHRoaXMpO1xuICAgIHZhciBjbG9zZXN0X3VsID0gbGluay5jbG9zZXN0KFwidWxcIik7XG4gICAgdmFyIHBhcmFsbGVsX2FjdGl2ZV9saW5rcyA9IGNsb3Nlc3RfdWwuZmluZChcIi5hY3RpdmVcIilcbiAgICB2YXIgY2xvc2VzdF9saSA9IGxpbmsuY2xvc2VzdChcImxpXCIpO1xuICAgIHZhciBsaW5rX3N0YXR1cyA9IGNsb3Nlc3RfbGkuaGFzQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgdmFyIGNvdW50ID0gMDtcblxuICAgIGNsb3Nlc3RfdWwuZmluZChcInVsXCIpLnNsaWRlVXAoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICgrK2NvdW50ID09IGNsb3Nlc3RfdWwuZmluZChcInVsXCIpLmxlbmd0aClcbiAgICAgICAgICAgIHBhcmFsbGVsX2FjdGl2ZV9saW5rcy5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICB9KTtcblxuICAgIGlmICghbGlua19zdGF0dXMpIHtcbiAgICAgICAgY2xvc2VzdF9saS5jaGlsZHJlbihcInVsXCIpLnNsaWRlRG93bigpO1xuICAgICAgICBjbG9zZXN0X2xpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSk7XG59KSh3aW5kb3cpO1xuIiwiKGZ1bmN0aW9uIChyaXBwbGVCdG4pIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG5jb25zb2xlLmxvZygncmlwcGxlQnRuJyk7XG5cblxufSkod2luZG93KTtcblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
