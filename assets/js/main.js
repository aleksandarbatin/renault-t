// ###############################
// MAIN JAVASCRIPT 
// ###############################

(function() {
	// ###################
    // Mobile menu toggle

    $('.header__btnMenu').click(function(){
        $('.header__navigation').toggle("slow");
        $('.openBtn').toggle();
        $('.closeBtn').toggle();
        $('html').toggleClass('noScroll');
        $('.header__navigation__curtain').toggle("slow");
    });

    // #####################
    // HP SLIDER

    //custom function showing current slide
      var $status = $('.slideInfo-current');
      var $total = $('.slideInfo-total');
      var $hpSlider = $('.hpSlider');

      $hpSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text("0"+ i);
        $total.text('/' + "0" + slick.slideCount);
    });

    $('.hpSlider').slick({
        prevArrow: $('.btn-prev'),
        nextArrow: $('.btn-next')
    });

    if($(window).width() > 1023) {

      $('.btn-next')
      .mouseover (function(){
        $(this).parent().find('.slick-track').animate({
          left: "-13rem"
        }, 600);
      })
      .mouseleave (function(){
        $(this).parent().find('.slick-track').animate({
          left: "0"
        }, 300);
      });

      $('.btn-prev')
      .mouseover (function(){
        $(this).parent().find('.slick-track').animate({
          left: "13rem"
        }, 600);
      })
      .mouseleave (function(){
        $(this).parent().find('.slick-track').animate({
          left: "0"
        }, 300);
      });
    }

    // #####################
    // FAQ SLIDER

     //custom function showing current slide
      var $faqSliderstatus = $('.faqSlideInfo-current');
      var $faqSlidertotal = $('.faqSlideInfo-total');
      var $faqSlider = $('.faqSlider');

       $faqSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $faqSliderstatus.text("0" + i);
        $faqSlidertotal.text('/' + "0" + slick.slideCount);
    });

    $('.faqSlider').slick({
        prevArrow: $('.faq-prev'),
        nextArrow: $('.faq-next'),
        fade: true
    });

    // #####################
    // PROFILE SLIDER

      var $pSliderstatus = $('.portraitSlideInfo-current');
      var $pSlidertotal = $('.portraitSlideInfo-total');
      var $portraitSlider = $('.portraitSlider');

      $portraitSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $pSliderstatus.text("0" + i);
        $pSlidertotal.text('/' + "0" + slick.slideCount);
      });

      $('.portraitSlider__wrapper').slick({
          prevArrow: $('.portrait-prev'),
          nextArrow: $('.portrait-next'),
          fade: true
      });

    // #####################
    // MOST READ SLIDER

      if($(window).width() > 767) {
        $('.mostRead__slider').slick({
          speed: 300,
          slidesToShow: 4,
          slidesToScroll: 4,
          prevArrow: $('.mostread-prev'),
          nextArrow: $('.mostread-next')
        });
      }

    // #####################
    // ARTICLE DIAPORAMA

    $('.articleDiaporama__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.diaporama__thumbnails'
    });
    $('.diaporama__thumbnails').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.articleDiaporama__slider',  
      // centerMode: true,
      focusOnSelect: true,
      prevArrow: $('.diaporama-prev'),
      nextArrow: $('.diaporama-next')
    });

    // #####################
    // STICKY SOCIAL   

    if($(window).width() > 1023) {
      var $socialWrapper = $('.stickySocial__wrapper');
          var $social = $('.stickySocial');
          var $basement = $('.articlePage__content__tags');
          var $header = $('.header').outerHeight();
          $socialWrapper.css({
            width: $social.outerWidth(true),
            height: $social.outerHeight(true)
          });

      var offsetTop = $header + 40;
      $social.dwSticky({$stEnd: $('.articlePage__content__tags'), offsetTop: offsetTop});
    }

    // ##############################
    // ARROW DOWN ROTATE DEVICES MENU 

    $(".header__navigation>.menu").on("click", function(){
      $(this).find(".down-open").toggleClass("rotateArrow");
      $(this).find(".navigation__submenu").toggle();
    }); 


})();