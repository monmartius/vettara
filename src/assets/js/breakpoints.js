function objToArrayObjectsKeyValue(obj){

	arr = [];

	for (var key in obj){

		arr.push({ 'key' : key, 'value' : obj[key] } );
	}

	return arr;
}


var $window = $(window);

var	settings = {
		'sm' : 576,
		'md' : 768,
		'lg' : 992,
		'xl' : 1200
	};

	settings = objToArrayObjectsKeyValue(settings);

let breakpoints = {

	breakpoint : undefined,
	previousBreakpoint : undefined,


	init (parameters){

		if(parameters){

			parameters = objToArrayObjectsKeyValue(parameters);

			var temp;

			for( i = 0; i < parameters.length; i++ ){

				for( var j = i; j < parameters.length; j++ ){

					if( parameters[i]['value']  > parameters['value'] ) {

						var temp = parameters[i];
						parameters[i] = parameters[j];
						parameters[j] = temp;
					}

				}
			}

			settings = parameters;


		}

		settings.unshift({'key' : '-' + settings[0]['key'], 'value' : 1});


			this.previousBreakpoint = this.onPoint();
			this.breakpoint = this.onPoint();


		$window.on('resize', 

			()=>{


					this.breakpointOnResize = this.onPoint();

// // console.log('this.breakpoint !== this.breakpointOnResize');
// console.log(this.breakpoint + ' !== ' + this.breakpointOnResize);
// console.log('this.breakpoint ' + this.breakpoint);
// console.log('this.breakpointOnResize ' + this.breakpointOnResize);
// console.log('');
// console.log('');

					if(this.breakpoint !== this.breakpointOnResize){

						this.previousBreakpoint = this.breakpoint;
						this.breakpoint = this.breakpointOnResize;

						var eventId = 'breakpoint.changed.' + this.previousBreakpoint + '>' + this.breakpoint;
						$window.trigger(eventId);

						// console.log(eventId);
						// console.log(eventId);
						console.log(eventId);
						// console.log(eventId);

					}

				console.log(this);

			}
		);







	}, 


	onPoint : function(){
		
		var breakpoint;				

		for( var i = 0 ; i < settings.length; i++){

			let breakpoint1condition = "(min-width:" + settings[i]['value'] + "px)";

			let breakpointcondition = 0;
	
			if(i === settings.length - 1){
			
				breakpoint2condition = "";

			}
			else{
				breakpoint2condition = " and (max-width:" + (settings[i+1]['value'] - 1) + "px)"
			}

			let condition = breakpoint1condition + breakpoint2condition;

			if(window.matchMedia(condition).matches){

				break;
			}
		}

		if( i <= 0 ){

			breakpoint = settings[0]['key'];
		}
		else{

			breakpoint = settings[i]['key'];
		}




		return breakpoint;
	}, 



}; 



breakpoints.init();


module.exports = breakpoints;

