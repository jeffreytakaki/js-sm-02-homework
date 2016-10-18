$(document).ready(function(){

	var weather = {
		init: function() {
			var self = this;

			// Question - why do i need to use anonymous function vs just calling self.getZip()?

			$('.weather').on('click','#getWeather', function(event){
				event.preventDefault();
				self.getZip(this);
			});

			$('form').on('keyup keypress', function(e){
				var keyCode = e.keyCode || e.which;
				if (keyCode === 13) { 
					e.preventDefault();
					self.getZip(this);
				}
			});
		},
		getZip: function(event) {
			var zipcode = $(event).parent().find('#zipCode').val();
			if(zipcode.length == 5 && !isNaN(zipcode)) {
				this.ajax({'zipcode':zipcode})
			} else {
				//throw error msg
				$('h2').html('<h2>Please enter a valid zipcode</h2>');
			}
		},
		ajax: function(options) {
			var self = this;
			var url = 'http://api.openweathermap.org/data/2.5/weather?zip=%ZIPCODE%&APPID=6f181e7b8887bcb10a67c2bb33487822&units=imperial';
			url = url.replace('%ZIPCODE%',options.zipcode)

			$.get(url,function(data){
				self.showWeather(data)
			})
		},
		showWeather: function(options) {
			//html instead of append to allow consective searches
			$('h2').html('<h2>'+options.name + ' is ' + options.main.temp + '&#8457; degrees</h2>');
			(options.main.temp > 50) ? $('body').addClass('warm'):$('body').addClass('cool');
			return true;
		}
	}

	// initialize our weather object
	weather.init();

});