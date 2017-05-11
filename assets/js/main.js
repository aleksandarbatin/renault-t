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
      var $slickElement = $('.hpSlider');

      $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i);
        $total.text('/' + slick.slideCount);
    });

    $('.hpSlider').slick({
        prevArrow: $('.btn-prev'),
        nextArrow: $('.btn-next')
    });

    

})();