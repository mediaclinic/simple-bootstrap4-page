!function($){"use strict";$('a.smoothscroll[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var o=$(this.hash);if(o=o.length?o:$("[name="+this.hash.slice(1)+"]"),o.length)return $("html, body").animate({scrollTop:o.offset().top-54},1e3,"easeInOutExpo"),!1}}),$(".smoothscroll").click(function(){$(".navbar-collapse").collapse("hide")}),$("body").scrollspy({target:"#navbar-portfolio",offset:54})}(jQuery);