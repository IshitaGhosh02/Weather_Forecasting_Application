const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://ai-weather-by-meteosource.p.rapidapi.com/time_machine?lat=37.81021&lon=-122.42282&date=2021-08-24&units=auto');
xhr.setRequestHeader('x-rapidapi-key', 'baaf06643bmshc1b97e080e08d57p143e91jsnf24ea44b1b15');
xhr.setRequestHeader('x-rapidapi-host', 'ai-weather-by-meteosource.p.rapidapi.com');

xhr.send(data);

