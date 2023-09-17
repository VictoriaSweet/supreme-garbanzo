const apiKey = "8db965459e689988c56f9bc2eafac014";

//prompt user input for city search
const city = "Austin";
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`;
const weatherData = url;


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
    let next5Days = [weatherData.list[0]];

    let previousDate = new Date(weatherData.list[0].dt_txt);
    previousDate.setHours(0, 0, 0, 0);
    for (let index = 0; index < weatherData.list.length; index++) {
      let day = weatherData.list[index];
      let date = new Date(day.dt_txt);
      let hour = date.getHours();
      date.setHours(0, 0, 0, 0);

      // check the next day and see if the date changed
      if (previousDate < date && hour == 9) {
        previousDate = date;
        next5Days.push(day);
      }
      // if so add it to next5Days, and update previousDate
    }

    // setting data from each day of dayCard
    for (let index = 0; index < next5Days.length; index++) {
      let day = next5Days[index];
      let dayCard = document.querySelector(`#dayCard-${index + 1}`);
      let p = dayCard.children[2];
      p.innerText = day.main.temp;
      let dayOfWeek = dayCard.children[0];
      let month = dayCard.children[1];
      console.log(day.main);
      let date = new Date(day.dt_txt);
      //setting view of of data in card
      dayOfWeek.innerText = date.toLocaleDateString("en-us", {
        weekday:"long"});
      month.innerText = date.toLocaleDateString("en-us", {
        month: "short",
        day:"numeric",
        hour: "numeric",
        year:"numeric",
        
      });
      var iconurl = "http://openweathermap.org/img/w/" + day.weather[0].icon + ".png";
  weatherIcon = dayCard.children[3];
  weatherIcon.setAttribute("src",iconurl);
 
     
      console.log(weatherIcon);
     
    }
  });
});
