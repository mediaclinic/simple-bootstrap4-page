function scaleVideoContainer(){var i=$(window).height(),e=parseInt(i)+"px";$(".jumbotron-video").css("height",e)}function initBannerVideoSize(i){$(i).each(function(){$(this).data("height",$(this).height()),$(this).data("width",$(this).width())}),scaleBannerVideoSize(i)}function scaleBannerVideoSize(i){var e=$(window).width(),n=$(window).height(),t,o;console.log(n),$(i).each(function(){var i=$(this).data("height")/$(this).data("width");i>n/e?(t=e,o=t*i,$(this).css({top:-(o-n)/2+"px","margin-left":0})):(o=n,t=o/i,$(this).css({"margin-top":0,"margin-left":-(t-e)/2+"px"})),$(this).width(t).height(o),$(".jumbotron-video .video-container video").addClass("fadeIn animated")})}$(document).ready(function(){scaleVideoContainer(),initBannerVideoSize(".video-container .poster img"),initBannerVideoSize(".video-container .filter"),initBannerVideoSize(".video-container video"),$(window).on("resize",function(){scaleVideoContainer(),scaleBannerVideoSize(".video-container .poster img"),scaleBannerVideoSize(".video-container .filter"),scaleBannerVideoSize(".video-container video")})});