import 'bootstrap'; 
// import "bootstrap/scss/bootstrap.scss";
import './styles.scss';

require('slick-carousel');
require('slick-carousel/slick/slick.scss');
require('slick-carousel/slick/slick-theme.scss');


let breakPoints = require('./js/breakpoints.js');
// breakPoints.init();

let display = require('./js/display-info.js');
let winSize = require('./js/window-size.js');

function da(msg){

	$('#display').html(msg);

}

display.out('TEST');

display.cssStyles = {

	'background-color': 'rgba(255, 0, 0, .7)',
	'color': 'white'
}

display.setCssStyles();

let $w = $(window);
let $headerTopMenu = $('#header-top-menu');
let $topMenu = $('#top-menu');

// console.log($('button', $headerTopMenu).html());

$(document).on('click', function(e){

	if($('.collapse', $headerTopMenu).hasClass('show')){
		$('.collapse', $headerTopMenu).collapse("hide");
		// e.stopPropagation();

		console.log('html body click');
		console.log(e.target);
	}
});



let $dropdown = $('.dropdown', $topMenu);

$topMenu.on('click', function(e){

	// $dropdown.dropdown('toggle');
	// e.stopPropagation();
	// event.preventDefault();
	console.log('e.stopPropagation()');
	// return false;
});











$('.collapse', $topMenu).on('show.bs.collapse', function(){

	$topMenu.addClass('menu-show');
});


$('.collapse', $topMenu).on('hidden.bs.collapse', function(){

	$topMenu.removeClass('menu-show');
});



$(window).on('resize', function(){

	display.out('size: ' + breakPoints.onPoint() + '<br>'+ 	winSize());
});

$(window).on('resize scroll', function(){


});


console.log('#popular-services-slider');

$("#popular-services-slider").slick({
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,

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