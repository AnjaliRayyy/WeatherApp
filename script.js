const searchBtn=document.getElementsByClassName('search-icon')[0];
const searchBox=document.querySelector("#searchBox");
const city_name=document.getElementsByClassName('city-name')[0];
const temp=document.getElementsByClassName('temp')[0];
const windspeed=document.getElementsByClassName('wind')[0];
const humidity=document.getElementsByClassName('humidity')[0];
const weatherImg=document.getElementsByClassName('weather-image')[0];

let data;
// const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q='+searchBox.value;


const getWeather=async(city)=>{
	const url = "https://weatherapi-com.p.rapidapi.com/current.json?q="+city;
	const options = {
		method: 'GET',
		headers: {
			'x-rapidapi-key': '6a7d9f4a7bmsh10cdd3ad38da66ep14e707jsn6281b8cbdefc',
			'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
		}
	};
	const response =await fetch(url, options);
	console.log("Getting Data.....")
	console.log(response);
	data=await response.json();
	console.log(data);
	city_name.innerText=data['location']['name'];
	temp.innerText=data['current']['temp_c']+"°C";
	humidity.innerHTML=data['current']['humidity']+"%"+"<p>Humidity</p>";
	windspeed.innerHTML=data['current']['wind_kph']+" km/h"+"<p>Wind speed</p>";
	
	if(data['current']['condition'].text==="Partly cloudy"){
		weatherImg.innerHTML=`<img src="clouds.png" alt="error">`;
	}
	
	if(data['current']['condition'].text==="Mist"){
		weatherImg.innerHTML=`<img src="mist.png" alt="error">`;
	}

	if(data['current']['condition'].text==="Patchy rain nearby"){
		weatherImg.innerHTML=`<img src="drizzle.png" alt="error">`;
	}

	if(data['current']['condition'].text==="Snow" || data['current']['condition'].text==="Light snow"){
		weatherImg.innerHTML=`<img src="snow.png" alt="error">`;
	}

	if(data['current']['condition'].text==="Light rain" || data['current']['condition'].text==="Moderate or heavy rain with thunder"){
		weatherImg.innerHTML=`<img src="rain.png" alt="error">`;
	}
	
	if(data['current']['condition'].text==="Clear" || data['current']['condition'].text==="Sunny"){
		weatherImg.innerHTML=`<img src="clear.png" alt="error">`;
	}
 }

 searchBtn.addEventListener('click',()=>{
	getWeather(searchBox.value);
 });
