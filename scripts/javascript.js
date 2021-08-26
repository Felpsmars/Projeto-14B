// const fetch = require('node-fetch');
// let currCity = document.querySelector('.currCity');
const cityName = "Sao Paulo";
const apiKey = '391cb458afed314af5e9f1fad92b26c1';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
const apiUrlDaily = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`;

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function renderTemp(className, data) {
  let element = document.querySelector(`.${className}`);
  element.innerText = `${data.toFixed(1)}`;
}

function showDate(className, data) {
  let element = document.querySelector(`.${className}`);
  element.innerText = `${data}`;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createWeatherCard(weather, temperature, monthlyDate) {
  const card = document.createElement('div');
  card.className = 'card';
  
  card.appendChild(createCustomElement('span', 'weather-desc', weather));
  card.appendChild(createCustomElement('span', 'temperature', temperature));
  card.appendChild(createCustomElement('p', 'week-day', monthlyDate));
  
  return card;
}
const containerForecast = document.querySelector('.forecast');
async function fetchApi() {
  try {
    const response = await fetch(`${apiUrl}`);
    const jsonFetch = await response.json();
    const temp = jsonFetch.main.temp;

    const response1 = await fetch(`${apiUrlDaily}`);
    const jsonFetch1 = await response1.json()
    .then((e) => {
      for (i=0;i<3;i+=1){
        let date = new Date(e.list[((i+1)*8)-1].dt * 1000);
        let monthlyDate = date.toLocaleDateString();
        let weather = e.list[((i+1)*8)-1].weather[0].description;
        let temperature = e.list[((i+1)*8)-1].main.temp;
        let minTemp = e.list[((i+1)*8)-1].main.temp_min;
        let maxTemp = e.list[((i+1)*8)-1].main.temp_max;
        let humidity = e.list[((i+1)*8)-1].main.humidity;
        console.log(monthlyDate, weather, temperature, minTemp, maxTemp, humidity);
        containerForecast.appendChild(createWeatherCard(weather, temperature, monthlyDate));
      };
    });

    let todayDate = new Date(jsonFetch.dt * 1000);
    let todayIs = todayDate.toDateString();
    console.log(todayIs);
    showDate('currDate', todayIs);
    renderTemp('big-weather', temp);
  } catch (error) {
    console.log(error);
  }
}


window.onload = () => {
  fetchApi();
};


/* return (element.innerText = `${temp.toFixed(1)}`); */

/* function innerText(e) {
    let element = document.querySelector(`.${e}`);
    return (element.innerText = `${e}`);
      let city = data.city.name;
    let date = new Date(data.list[0].dt * 1000);
    let monthlyDate = date.toLocaleDateString();
  }  */
