const mongoose = require("mongoose");
const CovidPerDayStatusIndia = new mongoose.Schema({
  ForEachDay: { type: Boolean },
  NewConfirmed: { type: Number },
  TotalConfirmed: { type: Number },
  NewDeaths: { type: Number },
  TotalDeaths: { type: Number },
  NewRecovered: { type: Number },
  TotalRecovered: { type: Number },
  CuredDischargedMigrated: { type: Number },
  Time: { type: Date },
});
module.exports = mongoose.model(
  "CovidPerDayStatusIndia",
  CovidPerDayStatusIndia
);
