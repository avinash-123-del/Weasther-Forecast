const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '073a5720bamshdc40f0fd6da158fp1fa778jsnbcfa67516b99',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) =>{
	place.innerHTML = city	//under span tag id = "place"
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)		//city = "arg"
		.then(response => response.json())
		.then((response) => {
			console.log(response)
			cloud_pct.innerHTML = response.cloud_pct	
			temp.innerHTML = response.temp
			deg.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			humid.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			sunset.innerHTML = response.sunset 
			wind_speed.innerHTML= response.wind_speed
			windDisp.innerHTML= response.wind_speed
			wind_degrees.innerHTML = response.wind_degrees
			// sunrise.innerHTML = response.sunrise
		})
		// .catch(err => console.error(err));
}

let search = document.getElementById("search")
console.log("search")
search.addEventListener('click',(e)=>{
	e.preventDefault()	//this will not reload the page
	getWeather(city.value)
})
	// from input id "city"
	


  getWeather("Raipur") //bydefault