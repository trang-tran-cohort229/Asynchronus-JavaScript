var today = new Date();
var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("date").innerHTML = day[today.getDay()] + ', ' + month[today.getMonth()] + ' ' + today.getDate() + ' ' + today.getFullYear();

let weather = {
    "apiKey": "71af62c3dac16f915b5f4ed8a45479eb",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=metric&appid=" 
            + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.getWeather(data));
    },
    getWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed)
        document.querySelector(".city").innerText = name;
        document.querySelector(".description").innerText = description;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".temperature").innerText = "Temperature: " + temp + "°C";      
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading")
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".button").addEventListener("click", function () {
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
});

weather.fetchWeather("London");

