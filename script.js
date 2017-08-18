/*global $*/
$(document).ready(function(){
	var lat;
	var lon;
	var api = 'https://ip-api.com/json';
	$.getJSON(api, function(data2){
		lat = data2.lat;
		lon = data2.lon;
	});
	//API URL with geolocation
	/var api = 'https://api.openweathermap.org/data/2.5/weather?id=IDNo&appid=API KEY';
	console.log(api);
	$.getJSON(api, function(data){
	var fTemp;
	var cTemp;
	var kTemp;
	var tempSwap=true;
	//JSON call for Open Weather API
	var weatherType=data.weather[0].description;
	kTemp=data.main.temp;
	var windSpeed=data.wind.speed;
	var city=data.name;
	//Temperature in Kelvin to farenheit
	fTemp=(kTemp*(9/5)-459.67).toFixed(1);
	cTemp=(kTemp-273).toFixed(1);
	console.log(city);
	$("#city").html(city);
	$("#weatherType").html(weatherType);
	$("#fTemp").html(fTemp + "&#8457;");
	$("#fTemp").click(function(){
		if(tempSwap===false){
		$("fTemp").html(fTemp + "&#8457;");
		tempSwap=true;
		}
		else{
			$("#fTemp").html(cTemp + "&#8451;");
			tempSwap=false;
		}
	});
	windSpeed=(2.237*(windSpeed)).toFixed(1);
		$("#windSpeed").html(windSpeed + "mph");
	
});
	
});
