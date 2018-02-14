// Toggle transparent navbar when user scrolls the page

$( document ).ready(function() {
        
	$(window).scroll(function () {
		var $nav = $(".fixed-top");
	$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});

});