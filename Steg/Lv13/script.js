const API_KEY = '48d760931d43d77bab5104dcd6524ad3';
const URL = `https://api.openweathermap.org/data/2.5/weather?id=1848354&appid=${API_KEY}`

let nowWeather, nowTemp, nowWind;
fetch(URL)
    .then(response => response.json())
    .then(weatherData => {
        console.log(weatherData);
        nowWeather = weatherData.weather[0].main;
        nowTemp = Math.round((weatherData.main.temp - 273.15) * 10) / 10;
        nowWind = weatherData.wind.speed;
    })
    .then(() => {
        console.log(nowWeather);
        console.log(nowTemp);
        console.log(nowWind);
        document.getElementById('weather').innerHTML = `<p>現在の天気: ${nowWeather}</p><p>現在の気温: ${nowTemp} ℃</p><p>現在の風速: ${nowWind} m/s</p>`
    });



