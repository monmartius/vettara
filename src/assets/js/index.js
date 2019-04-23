breakpoints = require ("./common.js");
import '../scss/main-styles.scss';

require('slick-carousel');
require('slick-carousel/slick/slick.scss');
require('slick-carousel/slick/slick-theme.scss');



let breakpoints = require('./breakpoints.js');


// alert(breakpoints.onPoint());


let testimonialsSliderSlidesToShow = 1;
let onPoint = breakpoints.onPoint();

	
if(onPoint !== '-sm'){


	$("#popular-services-slider").slick({
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        // autoplay: true,
        autoplaySpeed: 4000,
        // variableWidth: false,
        adaptiveHeight: false
      

    });



	switch(onPoint) {
	  case 'sm':
	    
	    testimonialsSliderSlidesToShow = 1;
	    
	    break
	    
	  case 'md':
	    
	    testimonialsSliderSlidesToShow = 2;

	    break

	  case 'lg':
	  case 'xl':

	    testimonialsSliderSlidesToShow = 2;

	    break
	}

	$("#testimonials-slider").slick({
		dots: true,
		infinite: true,
		speed: 1500,
		slidesToShow: testimonialsSliderSlidesToShow,
		// autoplay: true,
		autoplaySpeed: 4000,
		// variableWidth: false,
		adaptiveHeight: false

	});


}
else{

	// alert(breakpoints.onPoint());
}




$(window).on('breakpoint.changed', 

	()=> {

		if(breakpoints.previousBreakpoint === '-sm'){


			$("#popular-services-slider").slick({
		        dots: true,
		        infinite: true,
		        speed: 1500,
		        slidesToShow: 1,
		        // autoplay: true,
		        autoplaySpeed: 4000,
		        // variableWidth: false,
		        adaptiveHeight: false
		    });
		}


		switch(breakpoints.breakpoint) {
		  case 'sm':
		    
		    testimonialsSliderSlidesToShow = 1;


		    
		    break
		    
		  case 'md':
		    
		    testimonialsSliderSlidesToShow = 2;

		    break

		  case 'lg':
		  case 'xl':

		    testimonialsSliderSlidesToShow = 2;

		    break
		}


		if(breakpoints.previousBreakpoint !== '-sm'){

			$("#testimonials-slider").slick('unslick');
		}



		$("#testimonials-slider").slick({
			dots: true,
			infinite: true,
			speed: 1500,
			slidesToShow: testimonialsSliderSlidesToShow,
			// autoplay: true,
			autoplaySpeed: 4000,
			// variableWidth: false,
			adaptiveHeight: false

		});

















		
		if(breakpoints.breakpoint === '-sm'){



			$("#popular-services-slider").slick('unslick');

			$("#testimonials-slider").slick('unslick');

		}


	}









);

// $(window).on('breakpoint.changed.-sm>sm', 

// 	()=> {
// 		$("#popular-services-slider").slick({
// 	        dots: true,
// 	        infinite: true,
// 	        speed: 1500,
// 	        slidesToShow: 1,
// 	        // autoplay: true,
// 	        autoplaySpeed: 4000,
// 	        // variableWidth: false,
// 	        adaptiveHeight: false

// 				// responsive: [{

// 				// 	breakpoint: 1900,
// 				// 	settings: {
// 				// 		slidesToShow: 1,
// 				// 		infinite: true
// 				// 	}

// 				// }, {

// 				// 	breakpoint: 600,
// 				// 	settings: {
// 				// 		slidesToShow: 1,
// 				// 		dots: true
// 				// 	}

// 				// }, {

// 				// 	breakpoint: 300,
// 				// 	settings: "unslick" // destroys slick

// 				// }]        

// 	    });

// 		$("#testimonials-slider").slick({
// 			dots: true,
// 			infinite: true,
// 			speed: 1500,
// 			slidesToShow: 1,
// 			// autoplay: true,
// 			autoplaySpeed: 4000,
// 			// variableWidth: false,
// 			adaptiveHeight: false


// 		});
// 	}
// );


// $(window).on('breakpoint.changed.sm>-sm', 

// 	()=> {
// 		$("#popular-services-slider").slick('unslick');

// 		$("#testimonials-slider").slick('unslick');
// 	}
// );


console.log(breakpoints.breakpointPx('lg'));


// console.log('#popular0-services-slider');
