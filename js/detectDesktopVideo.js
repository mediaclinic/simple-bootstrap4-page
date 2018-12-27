function prefersReducedMotion() {
	if (!'matchMedia' in window) {
		return false;
	}
	
	var motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
		if (!motionQuery.matches) {
			return false;
		}
	
		return true;
	}
	
	function isMobile() {
		if (navigator.userAgent.match(/Mobi/)) {
			return true;
		}
	
		if ('screen' in window && window.screen.width < 1366) {
			return true;
		}
	
		var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
		if (connection && connection.type === 'cellular') {
			return true;
		}
	
		return false;
	}
	
	(function () {
		var hero = document.getElementById('hero');
		var mobile = isMobile();
		var reduceMotion = prefersReducedMotion();
		if (!mobile && !reduceMotion) {
			hero.innerHTML = '<video src="hero-image.mp4" poster="hero-image.jpg" autoplay loop muted playsinline>';
		} else {
			hero.innerHTML = '<img src="hero-image.jpg" alt="">';
		}
	})
();