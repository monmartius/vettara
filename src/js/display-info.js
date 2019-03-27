let displayInfoBlock = $('<div></div>');

displayInfoBlock.addClass('display-info');

displayInfoBlock.css({

	'text-align': 'center',
	position: 'fixed',
	width: '100%',
	color: 'red',
	'font-size': '20px',
	bottom: '0',
	margin: 'auto'
});

displayInfoBlock.before = "<h1>";
displayInfoBlock.after = "</h1>";

displayInfoBlock.cssStyles = {};

displayInfoBlock.setCssStyles = function(){

	this.css(this.cssStyles);
};




$('body').prepend(displayInfoBlock);

displayInfoBlock.out = function(msg){

	this.html(msg);
}

module.exports = displayInfoBlock;