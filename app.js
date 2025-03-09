const apiKey = "3cde92a7f6a490cfa0c99a28d4da8355";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
let card = document.querySelector(".card");

async function checkWeather(city){

    // card.style.background = "var(--default)";
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "./images/clouds.png";
        card.style.background = "var(--cloud)";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "./images/clear.png";
        card.style.background = "var(--clear)";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "./images/rain.png";
        card.style.background = "var(--rain)";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "./images/drizzle.png";
        card.style.background = "var(--drizzle)";
    }
    else if(data.weather[0].main == "Mist" || data.weather[0].main == "Haze"){
        weatherIcon.src = "images/mist.png";
        card.style.background = "var(--mist)";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }
}

    

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
