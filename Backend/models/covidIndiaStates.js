const mongoose = require("mongoose");
const CovidIndiaStates = new mongoose.Schema({
  state_helpline: { type: String },
  covid_portal_url: { type: String },
  covid_facilities: { type: String },
  state_donation_url: { type: String },
  "Total Confirmed cases": { type: Number },
  "Cured/Discharged/Migrated": { type: Number },
  last_death: { type: Number },
  Active: { type: Number },
  Time: { type: Number },
});
module.exports = mongoose.module("CovidIndiaStatus", CovidIndiaStates);
