function updateWeather(response){
let temperatureElement=document.querySelector("#temperature");
let temperature=response.data.temperature.current;
let humidityElement=document.querySelector("#humidity");
let windSpeedElement=document.querySelector("#wind-speed");
let timeElement=document.querySelector("#time");
let date= new Date(response.data.time * 1000);


let cityElement=document.querySelector("#city");
cityElement.innerHTML=response.data.city;
temperatureElement.innerHTML= Math.round(temperature);
let descriptionElement=document.querySelector("#description");

    console.log(response.data.te);

    descriptionElement.innerHTML=response.data.condition.description;
    humidityElement.innerHTML=`${response.data.temperature.humidity}%`;
    windSpeedElement.innerHTML=`${response.data.wind.speed}km/h`;
timeElement.innerHTML=formalDate(date);
}
function formalDate(date){

let minutes=date.getMinutes();
let hours=date.getHours();
let days=["Sunday" ,"Monday" ,"Tuesday" ,"Wednesday" ,"Thursday" ,"Friday" ,"Saturday"]

let day= days[date.getDay()];


if(minutes <10){
minutes=`0${minutes}`

}

return`${day}   ${hours}:${minutes}  `
}



function  searchCity(city){
let apiKey="46a3a2bt13e461baff9od195b7a890f2";
let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(updateWeather);
}




function handleSearchSubmit(event){
event.preventDefault()
let searchInput=document.querySelector("#search-form-input")


searchCity(searchInput.value);

}


let searchFormElement=document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Pretoria")