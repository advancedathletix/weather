

// 5 day forcast var
var citySearch5 = document.querySelector("#citySearch5");
var searchBtn5 = document.querySelector(".searchBtn5");
var cityHistory5 = [];

var apiKey = "f70e2df530793c052e1517053f70294a"

function get5DayInfo() {
    var cityFive = citySearch5.value;
    cityHistory5.push(cityFive)
    callLocation(cityFive)
}

function callLocation(cityFive) {
    var fiveDayFor = `https://api.openweathermap.org/data/2.5/forecast?q=${cityFive}&appid=${apiKey}`;
    fetch(fiveDayFor)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            oneCall(data.coord.lat, data.coord.lon)
        })
}

function oneCall(lat, lon) {
    var oneCallApiFive = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    fetch(oneCallApiFive)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data)

        })











    }

    searchBtn5.addEventListener("click", get5DayInfo)