!function(){$(".header__btnMenu").click(function(){$(".header__navigation").toggle("slow"),$(".openBtn").toggle(),$(".closeBtn").toggle(),$("html").toggleClass("noScroll"),$(".header__navigation__curtain").toggle("slow")});var t=$(".slideInfo-current"),e=$(".slideInfo-total");$(".hpSlider").on("init reInit afterChange",function(r,i,a,o){var n=(a||0)+1;t.text("0"+n),e.text("/0"+i.slideCount)}),$(".hpSlider").slick({prevArrow:$(".btn-prev"),nextArrow:$(".btn-next")}),$(window).width()>1023&&($(".btn-next").mouseover(function(){$(this).parent().find(".slick-track").animate({left:"-13rem"},600)}).mouseleave(function(){$(this).parent().find(".slick-track").animate({left:"0"},300)}),$(".btn-prev").mouseover(function(){$(this).parent().find(".slick-track").animate({left:"13rem"},600)}).mouseleave(function(){$(this).parent().find(".slick-track").animate({left:"0"},300)}));var r=$(".faqSlideInfo-current"),i=$(".faqSlideInfo-total");$(".faqSlider").on("init reInit afterChange",function(t,e,a,o){var n=(a||0)+1;r.text("0"+n),i.text("/0"+e.slideCount)}),$(".faqSlider").slick({prevArrow:$(".faq-prev"),nextArrow:$(".faq-next"),fade:!0});var a=$(".portraitSlideInfo-current"),o=$(".portraitSlideInfo-total");if($(".portraitSlider").on("init reInit afterChange",function(t,e,r,i){var n=(r||0)+1;a.text("0"+n),o.text("/0"+e.slideCount)}),$(".portraitSlider__wrapper").slick({prevArrow:$(".portrait-prev"),nextArrow:$(".portrait-next"),fade:!0}),$(window).width()>767&&$(".mostRead__slider").slick({speed:300,slidesToShow:4,slidesToScroll:4,prevArrow:$(".mostread-prev"),nextArrow:$(".mostread-next")}),$(".articleDiaporama__slider").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,asNavFor:".diaporama__thumbnails"}),$(".diaporama__thumbnails").slick({slidesToShow:5,slidesToScroll:1,asNavFor:".articleDiaporama__slider",focusOnSelect:!0,prevArrow:$(".diaporama-prev"),nextArrow:$(".diaporama-next")}),$(window).width()>1023){var n=$(".stickySocial__wrapper"),l=$(".stickySocial"),s=($(".articlePage__content__tags"),$(".header").outerHeight());n.css({width:l.outerWidth(!0),height:l.outerHeight(!0)});var d=s+40;l.dwSticky({$stEnd:$(".articlePage__content__tags"),offsetTop:d})}$(".header__navigation>.menu").on("click",function(){$(this).find(".down-open").toggleClass("rotateArrow"),$(this).find(".navigation__submenu").toggle()})}();