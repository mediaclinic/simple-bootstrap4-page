// Toggle transparent navbar when user scrolls the page

$( document ).ready(function() {
        
    $(window).scroll(function() {
		if($(this).scrollTop() > 80) 

		/* Height in pixels, when opaque is removed */

		{
			$('.navbar-light').removeClass('opaque');
			
		} else {

			$('.navbar-light').addClass('opaque');

		}

    });

});