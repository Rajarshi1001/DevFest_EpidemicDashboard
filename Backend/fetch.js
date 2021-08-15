const fetch = require("node-fetch");
const duration = 12 * 3600;
let timeList = [];
let time = Date.now();
let numberOfIterationsOfCallingData = 60;
for (let i = 0; i < numberOfIterationsOfCallingData; i++) {
  timeList.push(Date.now() - duration * i);
}
console.log(timeList);
let url = `https://www.mygov.in/sites/default/files/covid/covid_state_counts_ver1.json?timestamp=${time}`;

let stateNamesJSON = {};
let timeDataArray = [];

async function getStateNameJSON() {
  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      stateNamesJSON = data["Name of State / UT"];
    });
}

getStateNameJSON()
  .then(() => {
    timeList.forEach(async (time) => {
      // console.log(time);
      statesDetailJSON = {};
      await fetch(
        `https://www.mygov.in/sites/default/files/covid/covid_state_counts_ver1.json?timestamp=${time}`
      )
        .then((res) => res.json())
        .then((data) => {
          for (let j = 0; j < 36; j++) {
            state_name = statesDetailJSON[j] = {
              state_helpline: data["state_helpline"][j],
              covid_portal_url: data["covid_portal_url"][j],
              covid_facilities: data["covid_facilities"][j],
              state_donation_url: data["state_donation_url"][j],
              "Total Confirmed cases": data["Total Confirmed cases"][j],
              "Cured/Discharged/Migrated": data["Cured/Discharged/Migrated"][j],
              last_death: data["last_death"][j],
              Active: data["Active"][j],
              Time: time,
            };
            timeDataArray.push(statesDetailJSON);
            // console.log(statesDetailJSON);
          }
        });
    });
  })
  .then(() => {
    // console.log(stateNamesJSON);
    console.log(timeDataArray);
  });
// .then(() => {
//   for (let i = 0; i < timeDataArray.length; i++) {
//     console.log(timeDataArray[i][stateNamesJSON["30"]]["last_death"]);
//   }
// });
