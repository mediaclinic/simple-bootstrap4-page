(function($) {
	"use strict"; // Start of use strict
	// Smooth scrolling using jQuery easing
	$('a.smoothscroll[href*="#"]:not([href="#"][class*="accordion-toggle"][class*="card-image-top"])').click(function() {
	if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
			$('html, body').animate({
				scrollTop: (target.offset().top - 54)
			}, 1000, "easeInOutExpo");
		return false;
	  }
	}
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.smoothscroll').click(function() {
	$('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
	target: '#navbar-portfolio',
	offset: 54
  });

})(jQuery); // End of use strict