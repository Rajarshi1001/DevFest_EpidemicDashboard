const mongoose = require("mongoose");
const CovidPerDayStatusInternational = new mongoose.Schema({
  Global: {
    ForEachDay: { type: Boolean },
    TotalConfirmed: { type: Number },
    NewDeaths: { type: Number },
    TotalDeaths: { type: Number },
    NewRecovered: { type: Number },
    TotalRecovered: { type: Number },
    Time: { type: Date },
  },
  Continents: {
    Asia: {
      ForEachDay: { type: Boolean },
      NewConfirmed: { type: Number },
      TotalConfirmed: { type: Number },
      NewDeaths: { type: Number },
      TotalDeaths: { type: Number },
      NewRecovered: { type: Number },
      TotalRecovered: { type: Number },
      Time: { type: Date },
    },
    Africa: {
      ForEachDay: { type: Boolean },
      NewConfirmed: { type: Number },
      TotalConfirmed: { type: Number },
      NewDeaths: { type: Number },
      TotalDeaths: { type: Number },
      NewRecovered: { type: Number },
      TotalRecovered: { type: Number },
      Time: { type: Date },
    },
    Australia: {
      ForEachDay: { type: Boolean },
      NewConfirmed: { type: Number },
      TotalConfirmed: { type: Number },
      NewDeaths: { type: Number },
      TotalDeaths: { type: Number },
      NewRecovered: { type: Number },
      TotalRecovered: { type: Number },
      Time: { type: Date },
    },
    NorthAmerica: {
      ForEachDay: { type: Boolean },
      NewConfirmed: { type: Number },
      TotalConfirmed: { type: Number },
      NewDeaths: { type: Number },
      TotalDeaths: { type: Number },
      NewRecovered: { type: Number },
      TotalRecovered: { type: Number },
      Time: { type: Date },
    },
    SouthAmerica: {
      ForEachDay: { type: Boolean },
      NewConfirmed: { type: Number },
      TotalConfirmed: { type: Number },
      NewDeaths: { type: Number },
      TotalDeaths: { type: Number },
      NewRecovered: { type: Number },
      TotalRecovered: { type: Number },
      Time: { type: Date },
    },
    Europe: {
      ForEachDay: { type: Boolean },
      NewConfirmed: { type: Number },
      TotalConfirmed: { type: Number },
      NewDeaths: { type: Number },
      TotalDeaths: { type: Number },
      NewRecovered: { type: Number },
      TotalRecovered: { type: Number },
      Time: { type: Date },
    },
  },
});

module.exports = mongoose.model(
  "CovidPerDayStatusInternational",
  CovidPerDayStatusInternational
);
