/* const fetch = require('node-fetch'); */
let currCity = document.querySelector('.currCity');
const cityName = currCity.innerText;
const apiKey = '391cb458afed314af5e9f1fad92b26c1';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
const apiUrlDaily = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`;

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

async function fetchApi() {
  try {
    const response = await fetch(`${apiUrl}`);
    const jsonFetch = await response.json();
    const temp = jsonFetch.main.temp;

    const response1 = await fetch(`${apiUrlDaily}`);
    const jsonFetch1 = await response1.json();
    jsonFetch1.forEach((e) =>)

    console.log(jsonFetch1);
    let date = new Date(jsonFetch1.list[0].dt * 1000);
    let monthlyDate = date.toDateString();

    showDate('currDate', monthlyDate);
    renderTemp('big-weather', temp);
  } catch (error) {
    console.log(error);
  }
}

fetchApi();
/* window.onload = () => {
  fetchApi();
  innerText();
};
 */

/* return (element.innerText = `${temp.toFixed(1)}`); */

/* function innerText(e) {
    let element = document.querySelector(`.${e}`);
    return (element.innerText = `${e}`);
      let city = data.city.name;
    let date = new Date(data.list[0].dt * 1000);
    let monthlyDate = date.toLocaleDateString();
  }  */
