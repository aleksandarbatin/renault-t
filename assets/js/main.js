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
    // Mobile submenu toggle


})();