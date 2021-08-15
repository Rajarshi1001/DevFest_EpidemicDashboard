# Resources

APIs used:

- [vaccine_api_India](https://www.mygov.in/sites/default/files/covid/vaccine/vaccine_counts_today.json?timestamp=1628951400)
- [covid_cases_India](https://www.mygov.in/sites/default/files/covid/covid_state_counts_ver1.json?timestamp=1628951400)
- [covid_status_International](https://api.covid19api.com/)
- [vaccine_name_International](https://covid19.who.int/page-data/sq/d/3990568020.json)

```json
{
  "World": {
    "Global": {
      "ForEachDay": false,
      "NewConfirmed": 100282,
      "TotalConfirmed": 1162857,
      "NewDeaths": 5658,
      "TotalDeaths": 63263,
      "NewRecovered": 15405,
      "TotalRecovered": 230845
    },
    "Continents": {
      "Asia": {
        "ForEachDay": false,
        "NewConfirmed": 0,
        "TotalConfirmed": 0,
        "NewDeaths": 0,
        "TotalDeaths": 0,
        "NewRecovered": 0,
        "TotalRecovered": 0,
        "Time": "00000000"
      },
      "Africa": {
        "ForEachDay": false,
        "NewConfirmed": 0,
        "TotalConfirmed": 0,
        "NewDeaths": 0,
        "TotalDeaths": 0,
        "NewRecovered": 0,
        "TotalRecovered": 0,
        "Time": "00000000"
      },
      "North America": {
        "ForEachDay": false,

        "NewConfirmed": 0,
        "TotalConfirmed": 0,
        "NewDeaths": 0,
        "TotalDeaths": 0,
        "NewRecovered": 0,
        "TotalRecovered": 0,
        "Time": "00000000"
      },
      "South America": {
        "ForEachDay": false,
        "NewConfirmed": 0,
        "TotalConfirmed": 0,
        "NewDeaths": 0,
        "TotalDeaths": 0,
        "NewRecovered": 0,
        "TotalRecovered": 0,
        "Time": "00000000"
      },
      "Australia": {
        "ForEachDay": false,
        "NewConfirmed": 0,
        "TotalConfirmed": 0,
        "NewDeaths": 0,
        "TotalDeaths": 0,
        "NewRecovered": 0,
        "TotalRecovered": 0,
        "Time": "00000000"
      }
    },
    "Vaccines": {
      "vaccine-name": "Country-name"
    },
    "Countries": {
      "ForEachDay": false,
      "name": "",
      "active": "",
      "deaths": "",
      "cured-and-discharged-cases": 234234
    }
  },
  "India": {
    "Total": {
      "ForEachDay": true,
      "NewConfirmed": 0,
      "TotalConfirmed": 0,
      "NewDeaths": 0,
      "TotalDeaths": 0,
      "NewRecovered": 0,
      "TotalRecovered": 0,
      "cured-and-discharged-cases": 234234,
      "Time": "00000000"
    },
    "States": {
      "ForEachDay": false,
      "name": 0,
      "NewConfirmed": 0,
      "TotalConfirmed": 0,
      "NewDeaths": 0,
      "TotalDeaths": 0,
      "NewRecovered": 0,
      "TotalRecovered": 0,
      "cured-and-discharged-cases": 234234
    },
    "Vaccination": {
      "state": {
        "helpline": 9090909090,
        "portal": "www.troll.in",
        "state-donation-url": "www.donate2troll.in",
        "covid-facilities-url": "https://leh.nic.in/notice/covid19-hospital/",
        "cured-and-discharged-cases": 234234
      }
    }
  }
}
```
