/* ==================================================================
	AngularJS Datatype Editor - Text
	A directive to edit text in place

	Usage:
	<div ade-text='{"class":"input-large","id":"1234","maxlength":"64"}' ng-model="data">{{data}}</div>

	Config:
	"class" will be added to the input box so you can style it.
	"id" will be used in messages broadcast to the app on state changes.
	"maxlength" will constrain the length of the string (optional)
	
	Messages:
		name: ADE-start
		data: id from config

		name: ADE-finish
		data: {id from config, old value, new value, exit value}

------------------------------------------------------------------*/

angular.module('ADE').directive('adeText', ['ADE','$compile',function(ADE,$compile) {
	return {
		require: '?ngModel', //optional dependency for ngModel
		restrict: 'A', //Attribute declaration eg: <div ade-text=""></div>

		//The link step (after compile)
		link: function(scope, element, attrs, controller) {
			var options = {}; //The passed in options to the directive.
			var editing=false; //are we in edit mode or not
			var input = null; //a reference to the input DOM object
			var value = "";
			var oldValue = "";
			var exit = 0; //0=click, 1=tab, -1= shift tab, 2=return, -2=shift return, 3=esc. controls if you exited the field so you can focus the next field if appropriate

			//whenever the model changes, we get called so we can update our value
			if (controller !== null && controller !== undefined) {
				controller.$render = function() {
					oldValue = value = controller.$modelValue;
					if(value === undefined || value === null) value='';
					return controller.$viewValue;
				};
			}

			//called once the edit is done, so we can save the new data	and remove edit mode
			var saveEdit = function(exited) {
				oldValue = value;
				exit = exited;

				if(exited!=3) { //don't save value on esc
					value = input.val();
					controller.$setViewValue(value);
				}

				element.show();
				input.remove();
				editing=false;

				ADE.done(options,oldValue,value,exit);

				scope.$digest();
			};
			
			//handles clicks on the read version of the data
			element.bind('click', function() {
				if(editing) return;
				editing=true;
				exit = 0;

				ADE.begin(options);

				var maxlength = '';
				if(options.maxlength!==undefined) maxlength = "maxlength='"+options.maxlength+"'";

				if(!angular.isString(value)) value = value.toString();
				
				element.hide();
				$compile('<input type="text" class="'+options.className+'" value="'+value.replace(/"/g,'&quot;')+'" '+maxlength+' />')(scope).insertAfter(element);
				input = element.next('input');
				input.focus();
				
				ADE.setupBlur(input,saveEdit);
				ADE.setupKeys(input,saveEdit);
			});
			
			// Watches for changes to the element
			// TODO: understand why I have to return the observer and why the observer returns element
			return attrs.$observe('adeText', function(settings) { //settings is the contents of the ade-text="" string
				options = ADE.parseSettings(settings, {className:"input-medium"});
				return element;
			});
		}
	};
}]);