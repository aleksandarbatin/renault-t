!function(){$(".header__btnMenu").click(function(){$(".header__navigation").toggle("slow"),$(".openBtn").toggle(),$(".closeBtn").toggle(),$("html").toggleClass("noScroll"),$(".header__navigation__curtain").toggle("slow")});var t=$(".slideInfo-current"),e=$(".slideInfo-total");$(".hpSlider").on("init reInit afterChange",function(r,n,o,i){var a=(o||0)+1;t.text("0"+a),e.text("/0"+n.slideCount)}),$(".hpSlider").slick({prevArrow:$(".btn-prev"),nextArrow:$(".btn-next")});var r=$(".faqSlideInfo-current"),n=$(".faqSlideInfo-total");$(".faqSlider").on("init reInit afterChange",function(t,e,o,i){var a=(o||0)+1;r.text(a),n.text("/"+e.slideCount)}),$(".faqSlider").slick({prevArrow:$(".faq-prev"),nextArrow:$(".faq-next"),fade:!0});var o=$(".portraitSlideInfo-current"),i=$(".portraitSlideInfo-total");$(".portraitSlider").on("init reInit afterChange",function(t,e,r,n){var a=(r||0)+1;o.text(a),i.text("/"+e.slideCount)}),$(".portraitSlider__wrapper").slick({prevArrow:$(".portrait-prev"),nextArrow:$(".portrait-next"),fade:!0}),$(".mostRead__slider").slick({speed:300,slidesToShow:4,slidesToScroll:4,prevArrow:$(".mostread-prev"),nextArrow:$(".mostread-next")})}();