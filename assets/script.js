var citySearch =document.querySelector("#citySearch");
var searchBtn = document.querySelector(".searchBtn");
var cityHistory = [];

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

            // 1. Create element
            var tempEl = document.createElement('p');

            //2. Give element content (.textContent)
            tempEl.textContent = data.current.temp;

            //3. Append to the page 
            forecast.append(tempEl)



        })
}

searchBtn.addEventListener("click", getCity)