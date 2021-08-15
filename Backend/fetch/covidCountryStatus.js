const fetch = require("node-fetch");
const url = "https://api.covid19api.com/countries";

let countries = [];
async function getCountries() {
  let response = await fetch(url);
  let data = await response.json();
  //console.log(data["0"]);
  for (let i = 0; i < data.length; i++) countries.push(data[i]["Slug"]);
}
async function getCountryData() {
  for (let i = 0; i < countries.length; i++) {
    let country = countries[i];
    country_url = `https://api.covid19api.com/live/country/${country}/status/confirmed`;
    let res = await fetch(country_url);
    let country_data = await res.json();
    console.log(country_data);
  }
}
getCountries().then(getCountryData);
