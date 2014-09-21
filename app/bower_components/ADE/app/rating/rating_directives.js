/* ==================================================================
 AngularJS Datatype Editor - Rating
 A directive to toggle rating icon

 Usage:
 <a ade-rating='{"id":"1234"}' ng-model="data" style="{{data}}"></a>

 Config:
 "id" will be used in messages broadcast to the app on state changes.

 Messages:
 name: ADE-start
 data: id from config

 name: ADE-finish
 data: {id from config, old value, new value, exit value}

 ------------------------------------------------------------------*/

angular.module('ADE').directive('adeRating', ['ADE', '$compile', '$filter', function(ADE, $compile,$filter) {
	return {
		require: '?ngModel', //optional dependency for ngModel
		restrict: 'A', //Attribute declaration eg: <div ade-rating=""></div>

		//The link step (after compile)
		link: function(scope, element, attrs, controller) {
			var options = {};
			var value = '';
			var oldValue = '';
			var newValue = '';

			if (controller !== null && controller !== undefined) {
				controller.$render = function() { //whenever the view needs to be updated
					oldValue = value = controller.$modelValue;
					return controller.$viewValue;
				};
			}

			//handles the click or keyboard events
			var change = function(val) {
				ADE.begin(options);

				//cap val at max
				// console.log(val,options);
				if (val > options.num) val = options.num;
				if (val < 0) val = 0;

				oldValue = value;
				value = val;
				newValue = value;

				ADE.done(options, oldValue, value, 0);

				controller.$setViewValue(value);
				scope.$digest(); //This is necessary to get the model to match the value of the input
			};

			//handles clicks on the read version of the data
			element.bind('click', function(event) {
				var val = angular.element(event.target).data('position');
				if (val !== undefined) change(val);
			});

			var focusHandler = function(e) {
				element.bind('keydown.ADE', function(e) {
					//console.log(e.keyCode);
					if (e.keyCode >= 96 && e.keyCode <= 105) { //num pad
						e.preventDefault();
						e.stopPropagation();
						change(e.keyCode - 96);
					} else if (e.keyCode >= 48 && e.keyCode <= 57) { //numbers
						e.preventDefault();
						e.stopPropagation();
						change(e.keyCode - 48);
					} else if (e.keyCode == 37 && options.arrows) { //left
						e.preventDefault();
						e.stopPropagation();
						change(value - 1);
					} else if (e.keyCode == 39 && options.arrows) { //right
						e.preventDefault();
						e.stopPropagation();
						if(!angular.isNumber(value)) value = 0;
						change(value + 1);
					}
				});
			}

			//handles focus events
			element.bind('focus', focusHandler);

			//handles focus events
			element.bind('blur', function(e) {
				element.unbind('keydown.ADE');
			});


			// Watches for changes to the element
			return attrs.$observe('adeRating', function(settings) { //settings is the contents of the ade-rating="" string
				options = ADE.parseSettings(settings, {'num': 5, 'arrows': true});
				return element; //TODO: not sure what to return here
			});

		}
	};
}]);
