var citySearch =document.querySelector("#citySearch");
var searchBtn = document.querySelector(".searchBtn");
var cityHistory = [];
//var currentForecast = $("#currentForecast");
var TempElement = document.querySelector("#TempElement");
var feelsLike = document.querySelector("#feelsLike");
var windSpeed = document.querySelector("#windSpeed");
var humidity = document.querySelector("#humidity");



var apiKey="f70e2df530793c052e1517053f70294a"

function getCity(){
    var city = citySearch.value;
    cityHistory.push(city)
    callLocation(city)
}



function callLocation(city) {
   // var currentWeather="https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=" + apiKey;
    var currentWeather=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    fetch(currentWeather)
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            oneCall(data.coord.lat, data.coord.lon)
        })
}


function oneCall(lat,lon) {
    var oneCallApi=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
        fetch(oneCallApi)
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            console.log(data)



            // the data when you press the search button       should I append to different location in html?
            


            
            TempElement.textContent = (data.current.temp);
            feelsLike.textContent = (data.current.feels_like);
            windSpeed.textContent = (data.current.wind_speed);
            humidity.textContent = (data.current.humidity);
            /*
            var tempEl = $("<p>");
            tempEl.text(data.current.temp);
            currentForecast.append(tempEl);

            var feelsLike = $("<p>");
            feelsLike.text(data.current.feels_like);
            currentForecast.append(feelsLike);

            var windSpeed = $("<p>");
            windSpeed.text(data.current.wind_speed);
            currentForecast.append(windSpeed);

            var humidity = $("<p>");
            humidity.text(data.current.humidity);
            currentForecast.append(humidity);
            */
            


        })
}

searchBtn.addEventListener("click", getCity)