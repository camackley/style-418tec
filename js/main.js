$(document).ready(function() {

	(function($) {
			 $('.flexslider').flexslider();

	 		var alt = $('nav').offset().top;

			$(window).bind('scroll', function(){
				if ($(window).scrollTop() > 50){
		 	  		$('nav').addClass('shrink');
				} else {
					$('nav').removeClass('shrink');
					$('nav').addClass('top');	
				}
   			});  

///////////////////////////////////////////////////////////////////
   			$('#about').bind('click', function(){
   				var position = 350;
   				$('body, html').animate({ 					
   					scrollTop: position + 'px' 
   				}, 800);
   				$('#about').addClass('bottom');
   				$('#testimonios').removeClass('bottom');
   				$('#pe').removeClass('bottom');
   				$('#contactenos').removeClass('bottom');
   			});   


   			$('#testimonios').bind('click', function(){
   				var position = 580;
   				$('body, html').animate({ 					
   					scrollTop: position + 'px' 
   				}, 800);
   				$('#testimonios').addClass('bottom');
   				$('#about').removeClass('bottom');
   				$('#pe').removeClass('bottom');
   				$('#contactenos').removeClass('bottom');
   			});   

   			$('#pe').bind('click', function(){
   				var position = 970;
   				$('body, html').animate({ 					
   					scrollTop: position + 'px' 
   				}, 800);
   				$('#pe').addClass('bottom');
   				$('#about').removeClass('bottom');
   				$('#testimonios').removeClass('bottom');
   				$('#contactenos').removeClass('bottom');
   			}); 

   			$('#contactenos').bind('click', function(){
   				var position = 1200;
   				$('body, html').animate({ 					
   					scrollTop: position + 'px' 
   				}, 800);
   				$('#contactenos').addClass('bottom');
   				$('#about').removeClass('bottom');
   				$('#pe').removeClass('bottom');
   				$('#testimonios').removeClass('bottom');
   			}); 
	})(jQuery);

});

