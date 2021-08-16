const mongoose = require("mongoose");
const CovidInternational = new mongoose.Schema({
    Countries: {
        ForEachDay: false,
         name: { type:String },
        active: "",
        deaths: "",
        cured-and-discharged-cases: 234234
      }
});

modue.exports = mongoose.model("CovidInternational", CovidInternational);
