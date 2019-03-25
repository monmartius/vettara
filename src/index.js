import 'bootstrap'; 
// import "bootstrap/scss/bootstrap.scss";
import './styles.scss';

let breakPoints = require('./js/breakpoints.js');
breakPoints.init();

let display = require('./js/display-info.js');
let winSize = require('./js/window-size.js');

function da(msg){

	$('#display').html(msg);

}

display.out('TEST');

display.cssStyles = {

	'background-color': 'rgba(255, 0, 0, .5)',
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

// $(window).on('scroll', function(){
	
// 	if($('.collapse', $headerTopMenu).hasClass('show')){
	
// 		$('.collapse', $headerTopMenu).collapse("hide");
// 		$topMenu.removeClass('first-screen-menu-show');
// 	}
// });



// Метод 	Описание 	
// .collapse(options) 	Активирует складной элемент с опцией. Приведенные выше параметры для допустимых значений 	
// .collapse("toggle") 	Переключение складного элемента 	
// .collapse("show") 	Показывает складной элемент 	
// .collapse("hide") 	Скрывает складной элемент 	
// .collapse("dispose") 	Уничтожает складной элемент

// show.bs.collapse 	Происходит при отображении складного элемента 	
// shown.bs.collapse 	Происходит при полном отображении складного элемента (после завершения CSS-переходов) 	
// hide.bs.collapse 	Происходит при скрытии складного элемента 	
// hidden.bs.collapse 	Происходит, когда складной элемент полностью скрыт (после завершения CSS-переходов)


// $('.collapse', $topMenu).on('show.bs.collapse', function(){

// 	if(!$headerTopMenu.hasClass('on-scroll-prepare')){

// 		$topMenu.addClass('first-screen-menu-show');
// 	}
// });


// $('.collapse', $topMenu).on('hidden.bs.collapse', function(){

// 	$topMenu.removeClass('first-screen-menu-show');
// });

// $(window).on('resize', function(){
	
// 	$topMenu.removeClass('first-screen-menu-show');
// 	$('.collapse', $headerTopMenu).collapse("hide");

// 	firstScreenHeight = $w.height()
// });


// $(window).on('scroll', function(){

// 	if($w.scrollTop() >= 30){

// 		$headerTopMenu.addClass('on-scroll');
// 	}
// 	else{

// 		$headerTopMenu.removeClass('on-scroll');		
// 	}


// });










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

	display.out('size: ' + breakPoints.onPoint() + '<br>'+ 	winSize()
);
});

$(window).on('resize scroll', function(){


});
