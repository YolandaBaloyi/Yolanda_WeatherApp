function updateWeather(response){
let temperatureElement=document.querySelector("#temperature");
let temperature=response.data.temperature.current

let cityElement=document.querySelector("#city");
cityElement.innerHTML=response.data.city;
temperatureElement.innerHTML= Math.round(temperature);


    console.log(response.data.temperature.current);

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