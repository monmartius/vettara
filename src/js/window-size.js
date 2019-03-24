module.exports = function(){

	let width = 1;
	let height = 1;

	for(width = 3000; width > 1; width--){

		if(window.matchMedia('(min-width:' + width + 'px)').matches){

			break;
		}

		
	}

	for(height = 3000; height >1; height--){

		if(window.matchMedia('(min-height:' + height + 'px)').matches){

			break;
		}

		
	}

	return('width: ' + width + ' height: ' + height);

}