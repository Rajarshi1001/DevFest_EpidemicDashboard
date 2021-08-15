const fetch = require("node-fetch");
const url = "https://api.covid19api.com/summary";
async function fetch_world_data() {
  let response = await fetch(url);
  let data = await response.json();

  console.log(data["Global"]);
}
fetch_world_data();

/*
{
  NewConfirmed: 188826,
  TotalConfirmed: 206440699,
  NewDeaths: 3132,
  TotalDeaths: 4351391,
  NewRecovered: 0,
  TotalRecovered: 0,
  Date: '2021-08-15T10:24:33.028Z'
}
*/
