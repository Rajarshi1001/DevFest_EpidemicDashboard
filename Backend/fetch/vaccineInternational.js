const fetch = require("node-fetch");
const url = "https://covid19.who.int/page-data/sq/d/3990568020.json";

async function fetchvaccineinfo() {
  let response = await fetch(url);
  let data = await response.json();
  //console.log(data);
  vaccine_data = data["data"]["allContentfulVaccines"]["nodes"]["0"]["vaccine"];
  console.log(JSON.stringify(vaccine_data));
}
fetchvaccineinfo();
/*
{
  data: {
    allContentfulVaccines: { nodes: [Array] },
    allContentfulCategories: { nodes: [Array] },
    allContentfulVaccineNumbers: { nodes: [Array] }
  }
}
*/
// { nodes: [ { vaccine: [Array] } ] }
/*
[{"label":"Anhui ZL - Recombinant","value":"Anhui ZL"},{"label":"AstraZeneca - Vaxzevria","value":"AstraZeneca"},{"label":"Beijing CNBG - BBIBP-CorV","value":"Beijing"},{"label":"Bharat - Covaxin","value":"Covaxin"},{"label":"CanSino - Convidecia","value":"CanSino"},{"label":"CIGB - CIGB-66","value":"Abdala"},{"label":"Finlay - FINLAY-FR ","value":"Soberana02"},{"label":"Gamaleya - Gam-Covid-Vac","value":"Gamaleya"},{"label":"Janssen - Ad26.COV 2-S","value":"Janssen"},{"label":"Moderna - mRNA-1273","value":"Moderna"},{"label":"Novavax - Covavax","value":"Novavax"},{"label":"Pfizer BioNTech - Comirnaty","value":"Pfizer"},{"label":"RIBSP - QazVac","value":"RIBSP"},{"label":"SII - Covishield","value":"Covishield"},{"label":"Sinovac - CoronaVac","value":"Sinovac"},{"label":"SRCVB - EpiVacCorona","value":"EpiVacCorona"},{"label":"Wuhan CNBG - Inactivated","value":"Wuhan"}]
*/
