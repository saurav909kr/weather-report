const apiKey = "d206cf13ac70dce1696ac7620acdf9b6";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch('$apiurl')
    var data = await response.json();

    console.log(data);

   document.querySelector(".city").innerHTML = '$data.name';
   document.querySelector(".temp").innerHTML = '$Math.round(data.main.temp) + "°C"';
   document.querySelector(".humidity").innerHTML = '$data.main.humidity + "%"';
   document.querySelector(".wind").innerHTML = '$data.wind.speed + "Km/h"';

   if(data.weather[0].main == "clouds"){
   weatherIcon.src="images/cloud.pnj";
   }
   else if (data.weather[0].main == "clear"){
    weatherIcon.src="images/clear.png";
   }
   else if (data.weather[0].main == "rain"){
    weatherIcon.src="images/rain.png";
   }
   else if (data.weather[0].main == "snow"){
    weatherIcon.src="images/snow.png";
   }
   else if (data.weather[0].main == "drizzie"){
    weatherIcon.src="images/drizzie.png";
   }
   else if (data.weather[0].main == "mist"){
     weatherIcon.src="images/mist.png";
  }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})



