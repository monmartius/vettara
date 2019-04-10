import "./common.js";
import './main-styles.scss';

require('slick-carousel');
require('slick-carousel/slick/slick.scss');
require('slick-carousel/slick/slick-theme.scss');


console.log('#popular-services-slider');

$("#popular-services-slider").slick({
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        // autoplay: true,
        autoplaySpeed: 4000,
        // variableWidth: false,
        adaptiveHeight: false

		// responsive: [{

		// 	breakpoint: 1900,
		// 	settings: {
		// 		slidesToShow: 1,
		// 		infinite: true
		// 	}

		// }, {

		// 	breakpoint: 600,
		// 	settings: {
		// 		slidesToShow: 1,
		// 		dots: true
		// 	}

		// }, {

		// 	breakpoint: 300,
		// 	settings: "unslick" // destroys slick

		// }]        

    });


// $("#popular-services-slider").slick({
 
//   // normal options...
//   infinite: true,
 
//   // the magic
//   responsive: [{
 
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         infinite: true
//       }
 
//     }, {
 
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         dots: true
//       }
 
//     }, {
 
//       breakpoint: 300,
//       settings: "unslick" // destroys slick
 
//     }]
// });