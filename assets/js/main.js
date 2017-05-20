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

    // #####################
    // FAQ SLIDER

     //custom function showing current slide
      var $faqSliderstatus = $('.faqSlideInfo-current');
      var $faqSlidertotal = $('.faqSlideInfo-total');
      var $faqSlider = $('.faqSlider');

       $faqSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $faqSliderstatus.text(i);
        $faqSlidertotal.text('/' + slick.slideCount);
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
        $pSliderstatus.text(i);
        $pSlidertotal.text('/' + slick.slideCount);
    });

    // #####################
    // MOST READ SLIDER

      $('.portraitSlider__wrapper').slick({
          prevArrow: $('.portrait-prev'),
          nextArrow: $('.portrait-next'),
          fade: true
      });

      $('.mostRead__slider').slick({
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: $('.mostread-prev'),
          nextArrow: $('.mostread-next')
      });

    

})();