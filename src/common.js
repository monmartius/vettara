import 'bootstrap'; 
import "bootstrap/scss/bootstrap.scss";


let breakPoints = require('./js/breakpoints.js');
// breakPoints.init();

let display = require('./js/display-info.js');
let winSize = require('./js/window-size.js');

// function da(msg){

// 	$('#display').html(msg);

// }

			display.html('size: ' + breakPoints.onPoint() + '<br>'+ winSize().widthHeight);

			display.css({

				'background-color': 'rgba(255, 0, 0, .2)',
				'color': 'white',
				'display': 'none'
			});


			$(window).on('resize', function(){

				display.html('size: ' + breakPoints.onPoint() + '<br>'+ winSize().widthHeight);
			});



let $w = $(window);
let $headerTopMenu = $('#header-top-menu');
let $topMenu = $('#top-menu');

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


$(window).on('resize scroll', function(){


});

