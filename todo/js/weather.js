const weather = document.querySelector('.js-weather');
const img =  document.createElement('img');
const API_KEY = "8e9220877c3c2baec33ccbf605141d1b"
const COORDS = 'coords';

function getWeather(lat, long){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`)
    .then(function(response){
        return response.json();
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature}℃`;
        weather.appendChild(img);
        const icon = json.weather[0].icon;
        img.src = `http://openweathermap.org/img/wn/${icon}@2x.png`
    })
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        // lati tude : latitude,
        // longitude : longitude 밑에꺼와같다 키와 벌류가 같을댸
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(position){
    console.log("can't access geo location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else{
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
        console.log(loadedCoords);
        // getWeather
    }
}

function init(){
    loadCoords();
}

init();

