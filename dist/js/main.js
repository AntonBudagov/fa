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
    $(".dropDown").click(function() {
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
        starting_top: "0%"
    });
    $(".authorization .btn").click(function(e) {
        $(".authorization .btn").removeClass("active");
        if ($(".registration").hasClass("active") == true) {
            $(".registration").removeClass("active");
            $(".sigin").addClass("active");
        } else {
            $(".registration").addClass("active");
            $(".sigin").removeClass("active");
        }
        $(this).addClass("active");
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
    $(window).scroll(function(event) {
        var scroll = $(window).scrollTop();
        if (scroll > 32) {
            $(".middle").addClass("fixed");
        } else {
            $(".middle").removeClass("fixed");
        }
    });
})(window);
(function(rippleBtn) {
    "use strict";
    console.log("rippleBtn");
})(window);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJyaXBwbGVCdXR0b24uanMiXSwibmFtZXMiOlsiYXBwbCIsImNvbnNvbGUiLCJsb2ciLCJvdmVybGF5IiwiJCIsImNsaWNrIiwidGhpcyIsInRvZ2dsZUNsYXNzIiwic2xpZGVUb2dnbGUiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwic2xpZGVVcCIsImZhZGVPdXQiLCJjYXJ0T3BlbiIsImhvdmVyIiwiZmFkZUluIiwiZXEiLCJoYXNDbGFzcyIsInNsaWRlclJlY2xhbWEiLCJpdGVtcyIsImxvb3AiLCJtYXJnaW4iLCJuYXYiLCJkb3RzIiwiYXV0b3BsYXkiLCJhdXRvcGxheVRpbWVvdXQiLCJhdXRvcGxheUhvdmVyUGF1c2UiLCJzbGlkZXJTZWN0aW9uT25lIiwiZG90RGF0YSIsIm93bENhcm91c2VsIiwibGVhbk1vZGFsIiwic3RhcnRpbmdfdG9wIiwiZSIsImhlaWdodCIsInNpbXBsZWJhciIsImtleXVwIiwidmFsIiwibGVuZ3RoIiwid2luZG93Iiwic2Nyb2xsIiwiZXZlbnQiLCJzY3JvbGxUb3AiLCJyaXBwbGVCdG4iXSwibWFwcGluZ3MiOiJDQUFBLFNBQVdBO0lBQ1Q7SUFFQUMsUUFBUUMsSUFBSTtJQUtaLElBQUlDLFVBQVVDLEVBQUU7SUFFaEJBLEVBQUUsaUJBQWlCQyxNQUFNO1FBRXZCRCxFQUFFRSxNQUFNQyxZQUFZO1FBQ3BCSCxFQUFFLGtCQUFrQkksWUFBWTtRQUNoQ0wsUUFBUU0sU0FBUzs7SUFHbkJOLFFBQVFFLE1BQU07UUFDVkQsRUFBRUUsTUFBTUksWUFBWTtRQUNyQk4sRUFBRSxrQkFBa0JPLFFBQVE7UUFDNUJQLEVBQUUsaUJBQWlCTSxZQUFZO1FBRTlCTixFQUFFLG1CQUFtQlEsUUFBUTtRQUM3QlIsRUFBRSx5QkFBeUJRLFFBQVE7UUFFbkNSLEVBQUUsd0JBQXdCTyxRQUFROztJQUl0Q1AsRUFBRSxzQkFBc0JDLE1BQU07UUFFNUJELEVBQUUsc0JBQXNCTSxZQUFZO1FBQ3BDTixFQUFFRSxNQUFNRyxTQUFTOztJQUtuQixJQUFJSSxXQUFXO0lBQ2ZULEVBQUUsWUFBWVUsTUFBTTtRQUdsQlYsRUFBRSx5QkFBeUJXLE9BQU87UUFDbENaLFFBQVFNLFNBQVM7O0lBSW5CTCxFQUFFLFdBQVdDLE1BQU07UUFFakJELEVBQUUsbUJBQW1CVyxPQUFPO1FBQzVCWixRQUFRTSxTQUFTOztJQVFuQkwsRUFBRSxnQkFBZ0JZLEdBQUcsR0FBR1AsU0FBUztJQUVqQ0wsRUFBRSxnQkFBZ0JDLE1BQU07UUFFdEIsS0FBSUQsRUFBRUUsTUFBTVcsU0FBUyxXQUFVO1lBQzdCYixFQUFFLGdCQUFnQk0sWUFBWTtZQUM5Qk4sRUFBRUUsTUFBTUcsU0FBUzs7O0lBS3BCTCxFQUFFLGFBQWFDLE1BQU07UUFDcEJELEVBQUVFLE1BQU1DLFlBQVk7UUFDcEJILEVBQUUsd0JBQXdCSSxZQUFZO1FBQ3JDTCxRQUFRTSxTQUFTOztJQUtwQixJQUFJUztJQUNGQTtRQUNFQyxPQUFNO1FBQ05DLE1BQUs7UUFDTEMsUUFBTztRQUNQQyxLQUFJO1FBQ0pDLE1BQUs7UUFDTEMsVUFBUztRQUNUQyxpQkFBZ0I7UUFDaEJDLG9CQUFtQjs7SUFFdkIsSUFBSUM7UUFDRlIsT0FBTTtRQUNOQyxNQUFLO1FBQ0xDLFFBQU87UUFDUEMsS0FBSTtRQUNKTSxTQUFRO1FBQ1JMLE1BQUs7O0lBTVBuQixFQUFFLGtCQUFrQnlCLFlBQVlYO0lBTWhDZCxFQUFFLGtCQUFrQjBCO1FBQ2xCQyxjQUFjOztJQUtoQjNCLEVBQUUsdUJBQXVCQyxNQUFNLFNBQVMyQjtRQUN0QzVCLEVBQUUsdUJBQXVCTSxZQUFZO1FBUXJDLElBQUlOLEVBQUUsaUJBQWlCYSxTQUFTLGFBQWEsTUFBSztZQUVoRGIsRUFBRSxpQkFBaUJNLFlBQVk7WUFDL0JOLEVBQUUsVUFBVUssU0FBUztlQUVuQjtZQUNGTCxFQUFFLGlCQUFpQkssU0FBUztZQUM1QkwsRUFBRSxVQUFVTSxZQUFZOztRQUcxQk4sRUFBRUUsTUFBTUcsU0FBUzs7SUFLbkJMLEVBQUUsZ0JBQWdCNkIsT0FBTztJQUN6QjdCLEVBQUUsZ0JBQWdCOEI7SUFFbEI5QixFQUFFLGlCQUFpQjhCO0lBRW5COUIsRUFBRSxXQUFXK0IsTUFBTTtRQUVqQixJQUFHL0IsRUFBRSxXQUFXZ0MsTUFBTUMsVUFBVSxHQUFFO1lBQzlCakMsRUFBRSxrQkFBa0JXLE9BQU87ZUFDMUI7WUFDSFgsRUFBRSxrQkFBa0JRLFFBQVE7OztJQU1sQ1IsRUFBRWtDLFFBQVFDLE9BQU8sU0FBVUM7UUFDdkIsSUFBSUQsU0FBU25DLEVBQUVrQyxRQUFRRztRQUV2QixJQUFHRixTQUFTLElBQUc7WUFDYm5DLEVBQUUsV0FBV0ssU0FBUztlQUVwQjtZQUNGTCxFQUFFLFdBQVdNLFlBQVk7OztHQVk1QjRCO0NDMUtILFNBQVdJO0lBQ1Q7SUFFRnpDLFFBQVFDLElBQUk7R0FHVG9DIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKGFwcGwpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGNvbnNvbGUubG9nKCdtYWkxbi5qcycpO1xuXG5cblxuICAvLyBkcm9kRG93bkNpdHktLS0tLS0tLS0tXG4gIHZhciBvdmVybGF5ID0gJCgnLm92ZXJsYXlEcm9wRG93bicpO1xuXG4gICQoJy5kcm9wRG93bkNpdHknKS5jbGljayhmdW5jdGlvbigpe1xuXG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgJCgnLndyYXBwRHJvcERvd24nKS5zbGlkZVRvZ2dsZSgzMDApO1xuICAgIG92ZXJsYXkuYWRkQ2xhc3MoJ2FjdGl2ZScpXG5cbiAgfSk7XG4gIG92ZXJsYXkuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICQoJy53cmFwcERyb3BEb3duJykuc2xpZGVVcCgzMDApXG4gICAgICQoJy5kcm9wRG93bkNpdHknKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcblxuICAgICAgJCgnLnNtYWxsUG9wdXBDYXJ0JykuZmFkZU91dCgnc2xvdycpXG4gICAgICAkKCcuc21hbGxQb3B1cENhcnRTY3Jvb2wnKS5mYWRlT3V0KCdzbG93JylcblxuICAgICAgJCgnLmNhdGFsb2dQcm9kdWN0c01lbnUnKS5zbGlkZVVwKDMwMClcblxuICB9KTtcbiAgLy8gLS0tLS0tLS0tLVxuICAkKCcuY29udGVudERyb3BEb3duIGEnKS5jbGljayhmdW5jdGlvbigpe1xuXG4gICAgJCgnLmNvbnRlbnREcm9wRG93biBhJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gIH0pO1xuXG4gIC8vIENhcnQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHZhciBjYXJ0T3BlbiA9IGZhbHNlO1xuICAkKCcuYnRuQ2FydCcpLmhvdmVyKGZ1bmN0aW9uKCl7XG5cbiAgICAvLyAkKCcuc21hbGxQb3B1cENhcnQnKS5mYWRlSW4oMzAwKTtcbiAgICAkKCcuc21hbGxQb3B1cENhcnRTY3Jvb2wnKS5mYWRlSW4oMzAwKTtcbiAgICBvdmVybGF5LmFkZENsYXNzKCdhY3RpdmUnKVxuXG4gIH0pO1xuXG4gICQoJy5idG5CdXknKS5jbGljayhmdW5jdGlvbigpe1xuXG4gICAgJCgnLnNtYWxsUG9wdXBDYXJ0JykuZmFkZUluKDMwMCk7XG4gICAgb3ZlcmxheS5hZGRDbGFzcygnYWN0aXZlJylcblxuICB9KTtcblxuXG5cblxuICAvLyBzZWFyY2hMZXR0ZXItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgJCgnLmxldHRlcnNMaW5rJykuZXEoMCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICQoJy5sZXR0ZXJzTGluaycpLmNsaWNrKGZ1bmN0aW9uKCl7XG5cbiAgICBpZighJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpe1xuICAgICAgJCgnLmxldHRlcnNMaW5rJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgfVxuICB9KTtcblxuICAvLyBNZW51IGRyb3BEb3duXG4gICAkKCcuZHJvcERvd24nKS5jbGljayhmdW5jdGlvbigpe1xuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICQoJy5jYXRhbG9nUHJvZHVjdHNNZW51Jykuc2xpZGVUb2dnbGUoMzAwKTtcbiAgICAgb3ZlcmxheS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gIH0pXG5cblxuICAvLyBTbGlkZXItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdmFyIHNsaWRlclJlY2xhbWE7XG4gICAgc2xpZGVyUmVjbGFtYSA9IHtcbiAgICAgIGl0ZW1zOjEsXG4gICAgICBsb29wOnRydWUsXG4gICAgICBtYXJnaW46MCxcbiAgICAgIG5hdjpmYWxzZSxcbiAgICAgIGRvdHM6dHJ1ZSxcbiAgICAgIGF1dG9wbGF5OnRydWUsXG4gICAgICBhdXRvcGxheVRpbWVvdXQ6NTAwMCxcbiAgICAgIGF1dG9wbGF5SG92ZXJQYXVzZTp0cnVlXG4gICAgfTtcbiAgdmFyIHNsaWRlclNlY3Rpb25PbmUgPSB7XG4gICAgaXRlbXM6MSxcbiAgICBsb29wOnRydWUsXG4gICAgbWFyZ2luOjAsXG4gICAgbmF2OmZhbHNlLFxuICAgIGRvdERhdGE6dHJ1ZSxcbiAgICBkb3RzOnRydWVcbiAgICAvLyBhdXRvcGxheTp0cnVlLFxuICAgIC8vIGF1dG9wbGF5VGltZW91dDo1MDAwLFxuICAgIC8vIGF1dG9wbGF5SG92ZXJQYXVzZTp0cnVlXG4gIH1cblxuICAkKCcuc2xpZGVyUmVjbGFtYScpLm93bENhcm91c2VsKHNsaWRlclJlY2xhbWEpO1xuICAvLyAkKCcuc2xpZGVyU2VjdGlvbk9uZScpLm93bENhcm91c2VsKHNsaWRlclNlY3Rpb25PbmUpO1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBNb2RhbFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgJCgnLm1vZGFsLXRyaWdnZXInKS5sZWFuTW9kYWwoe1xuICAgIHN0YXJ0aW5nX3RvcDogJzAlJyxcbiAgfSk7XG5cbiAgLy8gJCgnI21vZGFsMicpLm9wZW5Nb2RhbCgpO1xuXG4gICQoJy5hdXRob3JpemF0aW9uIC5idG4nKS5jbGljayhmdW5jdGlvbihlKXtcbiAgICAkKCcuYXV0aG9yaXphdGlvbiAuYnRuJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgLy8gJCgnLldyYXBwUmVnaXN0cmF0aW9uJykuZmFkZVRvZ2dsZSgzMDApO1xuICAgIC8vICQoJy5XcmFwcFNpZ2luJykuZmFkZVRvZ2dsZSgzMDApO1xuXG4gIC8vIHJlZ2lzdHJhdGlvblxuXG5cbiAgICBpZiAoJCgnLnJlZ2lzdHJhdGlvbicpLmhhc0NsYXNzKCdhY3RpdmUnKSA9PSB0cnVlKXtcblxuICAgICAgJCgnLnJlZ2lzdHJhdGlvbicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICQoJy5zaWdpbicpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICQoJy5yZWdpc3RyYXRpb24nKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkKCcuc2lnaW4nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gIH0pO1xuXG4gIC8vIFNpbWxlYmFyIFNjcm9sbFxuICAvLyBtaW5pIENhcnRcbiAgJCgnI3dyYXBwU2Nyb2xsJykuaGVpZ2h0KDE4MCk7XG4gICQoJyN3cmFwcFNjcm9sbCcpLnNpbXBsZWJhcigpO1xuICAvLyBzZWFyY2gtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICQoJy5zY3JvbGxTZWFjcmgnKS5zaW1wbGViYXIoKTtcblxuICAkKCcjc2VhcmNoJykua2V5dXAoZnVuY3Rpb24oKXtcblxuICAgIGlmKCQoJyNzZWFyY2gnKS52YWwoKS5sZW5ndGggPj0gMSl7XG4gICAgICAgICQoJy5zZWFyY2hDb250ZW50JykuZmFkZUluKDMwMCk7XG4gICAgfWVsc2V7XG4gICAgICAkKCcuc2VhcmNoQ29udGVudCcpLmZhZGVPdXQoMzAwKTtcbiAgICB9XG5cbiAgfSk7XG5cbi8vIHNjcm9sbC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4kKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uIChldmVudCkge1xuICAgIHZhciBzY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cbiAgICBpZihzY3JvbGwgPiAzMil7XG4gICAgICAkKCcubWlkZGxlJykuYWRkQ2xhc3MoJ2ZpeGVkJylcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICQoJy5taWRkbGUnKS5yZW1vdmVDbGFzcygnZml4ZWQnKVxuICAgIH1cblxufSk7XG5cblxuLy8gY2FydCBEZWxldGVcbiAgLy8gJCgnLmRlbGV0ZScpLmNsaWNrKGZ1bmN0aW9uKCl7XG5cbiAgLy8gICAkKHRoaXMpLnBhcmVudCgpLmh0bWwoJycpO1xuICAvLyB9KVxuXG59KSh3aW5kb3cpO1xuIiwiKGZ1bmN0aW9uIChyaXBwbGVCdG4pIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG5jb25zb2xlLmxvZygncmlwcGxlQnRuJyk7XG5cblxufSkod2luZG93KTtcblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
