const apiKey = "8db965459e689988c56f9bc2eafac014";

//prompt user input for city search
const city = "Austin";
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`;
const weatherData = url;
let forecastContainer = document.querySelector("#forecastContainer");

// GIVEN a weather dashboard with form inputs

// WHEN I search for a city

// THEN I am presented with current and future conditions for that city and that city is added to the search history

// WHEN I view current weather conditions for that city

// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed
//name
//icon
//(grab one hour of day)
//temp_min
//temp_max
//humidity
//wind.speed

// WHEN I view future weather conditions for that city

// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
//name
//icon
//dt_text
//wind.speed
//humidity

// WHEN I click on a city in the search history

// THEN I am again presented with current and future conditions for that city

fetch(url).then(function (response) {
  // response is going to be a json string
  // parse the json
  response.json().then(function (weatherData) {
    for (let index = 0; index < weatherData.list.length; index++) {
      let element = weatherData.list[index];
      console.log(element);
    }
//setting innerText of dayCard 
    for (let index = 0; index < 5; index++) {
    let dayCard = document.querySelector(`#dayCard-${index + 1}`);
    let p = dayCard.children[2];
     p.innerText = weatherData.list[index].main.temp;
let dayOfWeek = dayCard.children[0];
let month = dayCard.children[1];

let date = new Date(weatherData.list[index].dt_txt);
month.innerText = date ; 
    }
  });
});
