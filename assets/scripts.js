";
//prompt user input for city search
const city = "Austin";
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`;



fetch(url).then((response) => {
    //going to be a json string 
    //parse the json

    response.json ().then (weatherData => {
        console.log(weatherData);
    })
});
