
import './scss/main.sass'
import 'material-design-icons/iconfont/material-icons.css'
const temp = document.querySelector(".temp")
const minTemp = document.querySelector(".minTemp")
const maxTemp = document.querySelector(".maxTemp")
const conds = document.querySelector(".conds")
const humid = document.querySelector(".humid")
const wind = document.querySelector(".wind")
const btn = document.querySelector("form button")
const inpt = document.querySelector("form input")
const info = document.querySelector(".info")
const body = document.querySelector("body")

btn.addEventListener("click",async(e)=>{
    e.preventDefault()
    if(!inpt.value){
        inpt.placeholder = "please enter city name"
        inpt.classList.add("warn")
        return
        
    }
    inpt.placeholder="city"
    inpt.classList.remove("warn")
    info.style.opacity = 1
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${inpt.value},UK?key=WUA7SCN5CJQH2RWC2D4WL4LHQ&elements=tempmax,tempmin,temp,humidity,windspeed,conditions&unitGroup=metric&include=days`)
    const weatherData = await response.json()
    const weather = weatherData.days[0]
    console.log(weather)
    temp.textContent=`temperature : ${weather.temp} °C`
    minTemp.textContent=`min temperature : ${weather.tempmin} °C`
    maxTemp.textContent=`max temperature : ${weather.tempmax} °C`
    conds.textContent=`conditions : ${weather.conditions}`
    humid.textContent=`humidity : ${weather.humidity}`
    wind.textContent=`wind speed : ${weather.windspeed} km/h`
    const condition = weather.conditions.split(",")[0].trim();
    console.log(condition)                      
    
    if (["Clear", "Sunny", "Mainly Clear", "Mostly Sunny"].includes(condition)) {
        body.style.backgroundImage = `url(${require('./images/clear.jpg')})`;
    }
    else if (["Partly Cloudy", "Mostly Cloudy", "Cloudy", "Overcast"].includes(condition)) {
        body.style.backgroundImage = `url(${require('./images/cloudy.jpg')})`;
    }
    else if (["Light Rain", "Rain", "Heavy Rain", "Rain Showers", "Showers", "Freezing Rain", "Rain and Snow"].includes(condition)) {
        body.style.backgroundImage = `url(${require('./images/rain.jpg')})`;
    }
    else if (["Light Snow", "Snow", "Heavy Snow", "Snow Showers", "Sleet", "Ice Pellets"].includes(condition)) {
        body.style.backgroundImage = `url(${require('./images/snow.jpg')})`;
    }
    else if (["Thunderstorm", "Light Thunderstorm", "Heavy Thunderstorm", "Thunder Showers"].includes(condition)) {
        body.style.backgroundImage = `url(${require('./images/thunder.jpg')})`;
    }
    else if (["Fog", "Mist", "Haze", "Smoke"].includes(condition)) {
        body.style.backgroundImage = `url(${require('./images/fog.jpg')})`;
    }
    else if (["Windy", "Breezy", "Blustery"].includes(condition)) {
        body.style.backgroundImage = `url(${require('./images/wind.jpg')})`;
    }
    else if (["Hail", "Squalls", "Tornado"].includes(condition)) {
        body.style.backgroundImage = `url(${require('./images/tornado.jpg')})`;
    }
})