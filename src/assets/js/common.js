import 'bootstrap'; 
// import "bootstrap/scss/bootstrap.scss";


let breakpoints = require('./breakpoints.js');
let display = require('./display-info.js');
let winSize = require('./window-size.js');

// breakPoints.init({a:100,b:500, c:600});

function da(msg){

	$('#display').html(msg);

}

			display.html('size: ' + breakpoints.onPoint() + '<br>'+ winSize().widthHeight);

			display.css({

				'background-color': 'rgba(255, 0, 0, .6)',
				'color': 'white',
				'right': '20px',
				'width' : '80px',
				'bottom' : 30,
				'font-size' : '12px',

				// 'bottom' : 'auto'
				// 'display': 'none'
			});


			$(window).on('resize', function(){

				display.html('size: ' + breakpoints.onPoint() + '<br>'+ winSize().widthHeight);
			});

// alert();


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
