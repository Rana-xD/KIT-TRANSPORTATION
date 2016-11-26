/* -------------------------------------------------------------------------

	PUNITED.useful
	
	
------------------------------------------------------------------------- */

var PRINCECODE;
if (!PRINCECODE) PRINCECODE = {}; 
if (!PRINCECODE.useful) PRINCECODE.useful = {}; 

(function (){

	var func = PRINCECODE.useful;
	
	/** Smooth scroll to the top **/
	   /***********************/
	func.jumpToPageTop = function() {
		$('html,body').stop().animate({ scrollTop: 0 }, 1000);
		return false;
	}

	/** Smooth scroll to anchor in page **/
	  /********************************/
	/* 
		#usage : calling function => 
		PUNITED.useful.SmoothScrollTo("element id");
		use with event onClick(), onMouseover() etc.
	*/

	func.SmoothScrollTo = function(id){
		var element = $(id);
		if(element.length){
			var top = element.offset().top;
			$('.mobile_global_nav').slideUp();
			$('html,body').stop().animate({ scrollTop: (top-60) },900,'swing');
		}
		return false;
	}

	/** Toggle navigation bar in mobile or smaller screen **/
	  /**************************************************/
	/* 
		#usage : calling function => 
		PUNITED.useful.toggleMenu("class/id name with . or #");
		use with event onClick(), onMouseover() etc.
	*/
	func.toggleMenu = function(target, extra){
		var extra = typeof extra !== 'undefined' ? extra : false;
		if(extra !== false){
			if(extra=='noscroll'){
				$('body').toggleClass('mobile_nav_open');
				$('.button_outer .bar').toggleClass('rotate');

			}else{
				$(extra).fadeOut(100);
				$('body').toggleClass('mobile_nav_open');
				$('.button_outer .bar').toggleClass('rotate');
			}
		}

		$(target).slideToggle(500);
	}
	
})();



