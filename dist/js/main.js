(function(appl) {
    "use strict";
    console.log("mai1n.js");
    $(".lettersLink").eq(0).addClass("active");
    $(".lettersLink").click(function() {
        if (!$(this).hasClass("active")) {
            $(".lettersLink").removeClass("active");
            $(this).addClass("active");
        }
    });
    var sliderReclama;
    sliderReclama = {
        loop: false,
        margin: 0,
        items: 1,
        nav: false,
        dots: true
    };
    $(".sliderReclama").owlCarousel(sliderReclama);
})(window);
(function(rippleBtn) {
    "use strict";
    console.log("rippleBtn");
})(window);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJyaXBwbGVCdXR0b24uanMiXSwibmFtZXMiOlsiYXBwbCIsImNvbnNvbGUiLCJsb2ciLCIkIiwiZXEiLCJhZGRDbGFzcyIsImNsaWNrIiwidGhpcyIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJzbGlkZXJSZWNsYW1hIiwibG9vcCIsIm1hcmdpbiIsIml0ZW1zIiwibmF2IiwiZG90cyIsIm93bENhcm91c2VsIiwid2luZG93IiwicmlwcGxlQnRuIl0sIm1hcHBpbmdzIjoiQ0FBQSxTQUFXQTtJQUNUO0lBRUFDLFFBQVFDLElBQUk7SUFHWkMsRUFBRSxnQkFBZ0JDLEdBQUcsR0FBR0MsU0FBUztJQUVqQ0YsRUFBRSxnQkFBZ0JHLE1BQU07UUFFdEIsS0FBSUgsRUFBRUksTUFBTUMsU0FBUyxXQUFVO1lBQzdCTCxFQUFFLGdCQUFnQk0sWUFBWTtZQUM5Qk4sRUFBRUksTUFBTUYsU0FBUzs7O0lBS3JCLElBQUlLO0lBQ0ZBO1FBQ0lDLE1BQU07UUFDTkMsUUFBUTtRQUNSQyxPQUFPO1FBQ1BDLEtBQUs7UUFDTEMsTUFBTTs7SUFHVlosRUFBRSxrQkFBa0JhLFlBQVlOO0dBRWpDTztDQzVCSCxTQUFXQztJQUNUO0lBRUZqQixRQUFRQyxJQUFJO0dBR1RlIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKGFwcGwpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGNvbnNvbGUubG9nKCdtYWkxbi5qcycpO1xuXG4gIC8vIHNlYXJjaExldHRlci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAkKCcubGV0dGVyc0xpbmsnKS5lcSgwKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgJCgnLmxldHRlcnNMaW5rJykuY2xpY2soZnVuY3Rpb24oKXtcblxuICAgIGlmKCEkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSl7XG4gICAgICAkKCcubGV0dGVyc0xpbmsnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIFNsaWRlci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB2YXIgc2xpZGVyUmVjbGFtYTtcbiAgICBzbGlkZXJSZWNsYW1hID0ge1xuICAgICAgICBsb29wOiBmYWxzZSxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICBpdGVtczogMSxcbiAgICAgICAgbmF2OiBmYWxzZSxcbiAgICAgICAgZG90czogdHJ1ZSxcbiAgICB9O1xuXG4gICAgJCgnLnNsaWRlclJlY2xhbWEnKS5vd2xDYXJvdXNlbChzbGlkZXJSZWNsYW1hKTtcblxufSkod2luZG93KTtcbiIsIihmdW5jdGlvbiAocmlwcGxlQnRuKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuY29uc29sZS5sb2coJ3JpcHBsZUJ0bicpO1xuXG5cbn0pKHdpbmRvdyk7XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
