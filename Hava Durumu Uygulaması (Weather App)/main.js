const url ='https://api.openweathermap.org/data/2.5/';
const key = 'ef6e93d872f90a3d5e59eed097d6c686';


const setQuery = (e) => {
    if(e.keyCode == "13"){
    getResult(searchBox.value)
    };
}

const getResult=(cityName)=>{
    let query= `${url}weather?q=${cityName}&appid=${key}&units=metric`
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)
}

const displayResult = (result) => {
    console.log(result);

    let city = document.querySelector('.city');
    city.innerText = `${result.name}, ${result.sys.country}`;

    let temp = document.querySelector('.temp');
    temp.innerText = `${Math.round(result.main.temp)}°C`;

    let desc = document.querySelector('.desc');
    desc.innerText = result.weather[0].description;

    let minmax = document.querySelector('.minmax');
    minmax.innerText = `${Math.round(result.main.temp_max)}°C / ${Math.round(result.main.temp_min)}°c`;
} 

const searchBox=document.getElementById("searchBox");
searchBox.addEventListener('keypress',setQuery);