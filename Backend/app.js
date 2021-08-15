require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const db = require("./db");
const PORT = process.env.PORT || 3000;
const covidPerDayStatusInternational = "covidPerDayStatusInternational";
const covidPerDayStatusIndia = "covidPerDayStatusIndia";
const covidInternational = "covidInternational";
const covidIndia = "covidIndia";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.connect((err) => {
  if (err) {
    console.log(`Unable to connect to DB: ${err}`);
    process.exit(1);
  } else {
    app.listen(PORT, () => {
      console.log(`Connected to DB, App listening on port ${PORT}.`);
    });
  }
});
