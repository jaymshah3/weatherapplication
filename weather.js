var request = require('request');

module.exports = function (location) {

	return new Promise(function(resolve, reject) {
	var encodedLocation = encodeURIComponent(location);
	var url = 'http://api.openweathermap.org/data/2.5/weather?appid=ea1efb92c2673ed9b6fbe5a43287d73a&q=%27%20+%2' + encodedLocation + '%20+%20%27&units=imperial';

	if(!location){
		return reject('no location provided');
	}


	request({
	url: url, 
	json: true
		}, function(error, response, body) {

	if(error){
		reject('unable to fetch weather');
	}
	else{
		resolve('It\'s ' + body.main.temp + '°F' + ' in ' + body.name + '!');
		
		}
		});
	});
}


