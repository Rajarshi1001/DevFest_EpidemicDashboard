require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
// const models = require("./models");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

// mongoD connection
mongoose.connect(`${process.env.MONGO_URL}/${process.env.DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/login", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/login.html"));
});
app.use("/world", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/world.html"));
});
app.use("/india", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/india.html"));
});

const icovidIndiaStates = new mongoose.Schema({
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

// mongoD models
const covidIndiaStates = mongoose.model("covidIndiaState", icovidIndiaStates);
// const covidInternational = mongoose.model(
//   "covidInternational",
//   icovidInternational
// );
// const covidPerDayStatusInternational = mongoose.model(
//   "covidPerDayStatusInternational",
//   icovidPerDayStatusInternational
// );
// const covidPerDayStatusIndia = mongoose.model(
//   "covidPerDayStatusIndia",
//   icovidPerDayStatusIndia
// );

app.listen(process.env.PORT, () => {
  console.log(`Server listening on ${process.env.PORT}...`);
});
