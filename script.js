const apiKey = "f8af17c91c53ffed2f5f2c30b4906faf";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon"); 

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();

        console.log(data); 
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        document.querySelector(".weather-icon").innerHTML = data.weather.main;
    
        if(data.weather[0].main == "Clouds"){
          weatherIcon.src = "https://worldweather.wmo.int/images/23a.png";
        }else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "https://worldweather.wmo.int/images/24a.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "https://worldweather.wmo.int/images/14.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "https://worldweather.wmo.int/images/15.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "https://worldweather.wmo.int/images/17.png";
        }
        else if(data.weather[0].main == "Smoke"){
            weatherIcon.src = "https://worldweather.wmo.int/images/18.png";
        }
        else if(data.weather[0].main == "Fog"){ 
            weatherIcon.src = "https://worldweather.wmo.int/images/16.png";
        }
        
        document.querySelector(".weather").style.display ="block";
        document.querySelector(".error").style.display ="none";
    }
    
}

searchBtn.addEventListener("click", () =>{
    checkWeather(searchBox.value);
})



