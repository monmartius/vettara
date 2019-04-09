


function decomposeObject(object){ // {a: 1} => {'key': 'a', 'value': 1}

	var key, value, result = {};

	for( key in object ){

		result['key'] = key;
		result['value'] = object[key];
	}

	return result;
} // function decomposeObject(object){


function objectToArray(object){ // {a: 1, b:2} = > [{'key': 'a', 'value': 1}, {'key': 'b', 'value': 2}]

	var arr = [], item = {};

	for( var key in object ){

		item[key] = object[key];

		item = decomposeObject(item);

		arr.push(item);

		item = {};
	}

	return arr;
} // function objectToArray(object){

	


var $window = $(window);

var	settings = {
		'sm' : 576,
		'md' : 768,
		'lg' : 992,
		'xl' : 1200
	};

	settings = objectToArray(settings);

let breakPoints = {

	sizeWindow : '',
	previousSizeWindow : undefined,
	_previousSizeWindow : undefined,


	init (parameters){

		if(parameters){

			var arr = [], i = 0, obj = {};

			for(var sizeSymbol in parameters){

				obj = {};

				obj[sizeSymbol] = parameters[sizeSymbol];

				obj = decomposeObject(obj);

				arr.push(obj);

				i++;
		} // if(parameters){



		for( i = 0; i < arr.length; i++ ){

			for( var j = i; j < arr.length; j++ ){

				var objI = arr[i], keyI,
					objJ = arr[j], keyJ;

				objI = decomposeObject(arr[i]);
				objJ = decomposeObject(arr[j]);

				if( objI['value']  > objJ['value'] ) {

					var temp = arr[i];
					arr[i] = arr[j];
					arr[j] = temp;
				}

			} // for( var j = i; j < arr.length; j++ ){
		} // for( i = 0; i < arr.length; i++ ){

		settings = arr;

		} // if(parameters){

		settings.unshift({'key' : '-' + settings[0]['key'], 'value' : 1});


		this._previousSizeWindow = this.onPoint();

		return $window;

	}, // init : function(parameters){


	onPoint : function(){
		
		var width = $window.width(), 
			size;				

		for( var i = 0 ; i < settings.length; i++){

			let size1condition = "(min-width:" + settings[i]['value'] + "px)";

			let size2condition = 0;
	
			if(i === settings.length - 1){
			
				size2condition = "";
				// " and (max-width:" + size2 + "px)"
			}
			else{
				size2condition = " and (max-width:" + (settings[i+1]['value'] - 1) + "px)"
			}

			let condition = size1condition + size2condition;

			if(window.matchMedia(condition).matches){

				break;
			}
		}

		if( i <= 0 ){

			size = settings[0]['key'];
		}
		else{

			size = settings[i]['key'];
		}


		this.sizeWindow = size;

		if((this._previousSizeWindow !== this.sizeWindow) && (this._previousSizeWindow != undefined)){

			$window.trigger('breakPointChangeStart');

			this.previousSizeWindow = this._previousSizeWindow;
		}

		this._previousSizeWindow = this.sizeWindow;

		return size;
	}, // size = function(){



		}; 


$window.on('breakPointChangeStart', function(){

	if (!this.breakPointChangeStartTrigger){

		this.breakPointChangeStartTrigger = true;

		setTimeout(function(){

			this.breakPointChangeStartTrigger = false;

			$window.trigger('breakPointChange');

			
		}, 1000);
	}
	else{


	}

});





$window.on('resize', function(){
	breakPoints.onPoint()
});


breakPoints.init();


module.exports = breakPoints;
