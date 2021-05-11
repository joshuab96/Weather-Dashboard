//document selectors
const mainSectionEl = document.getElementsByClassName("main");
//search bar 
const searchButtonEl = document.getElementById("locationSearchButton");
const searchBarEl = document.getElementById("locationInput");
const searchbarContainer = document.getElementById("search");

//------------------------------------------------------------------------------------------------->

function userInputData() {

    let inputFieldData = searchBarEl.value;

    console.log(inputFieldData);

    currentlocalWeather(inputFieldData);

}

function currentlocalWeather(city) {

    var currentcity = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e29cd95f952ebb202a3a51f08c0a0d46`

    fetch(currentcity)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);


        });
}

function parseCityLatLong(lat, lon) {
    var citylatlong = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=e29cd95f952ebb202a3a51f08c0a0d46`

    fetch(citylatlong)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

        });
}







searchButtonEl.addEventListener("click", userInputData)

//Appednding dynamic weather cards forecast

for (var i = 0; i < 7; i++) {

    const weatherCard = document.createElement("div")

    weatherCard.classList.add("weatherCard")

    console.log(weatherCard);

    searchbarContainer.appendChild(weatherCard);


}

