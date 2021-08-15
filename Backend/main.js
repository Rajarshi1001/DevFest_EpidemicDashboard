require("dotenv").config();
const covidPerDayStatusInternational = "covidPerDayStatusInternational";
const covidPerDayStatusIndia = "covidPerDayStatusIndia";
const covidWorldStats = "covidWorldStats";
const covidIndia = "covidIndia";
const { getDB, connect, getPrimaryKey } = require("./db.js");

baseInternationaURL = `https://api.covid19api.com/`;
vaccineInternationalURL = `https://covid19.who.int/page-data/sq/d/3990568020.json`;
covidIndiaURL = `https://www.mygov.in/sites/default/files/covid/covid_state_counts_ver1.json?timestamp=${Date.now()}`;
vaccineIndiaURL = `https://www.mygov.in/sites/default/files/covid/vaccine/vaccine_counts_today.json?timestamp=${Date.now()}`;
// Playground for now, to check out and handle data request and manipulations.

const { MongoClient } = require("mongodb");
const dbURL = process.env.MONGO_URL;
const dbName = "mongodbVSCodePlaygroundDB";
const dbCollection = "newCollection";
const exampleComplexJSON = {
  World: {
    Global: {
      ForEachDay: true,
      NewConfirmed: 100282,
      TotalConfirmed: 1162857,
      NewDeaths: 5658,
      TotalDeaths: 63263,
      NewRecovered: 15405,
      TotalRecovered: 230845,
    },
    Continents: {
      Asia: {
        ForEachDay: true,
        NewConfirmed: 0,
        TotalConfirmed: 0,
        NewDeaths: 0,
        TotalDeaths: 0,
        NewRecovered: 0,
        TotalRecovered: 0,
        Time: "00000000",
      },
      Africa: {
        ForEachDay: true,
        NewConfirmed: 0,
        TotalConfirmed: 0,
        NewDeaths: 0,
        TotalDeaths: 0,
        NewRecovered: 0,
        TotalRecovered: 0,
        Time: "00000000",
      },
      "North America": {
        ForEachDay: true,

        NewConfirmed: 0,
        TotalConfirmed: 0,
        NewDeaths: 0,
        TotalDeaths: 0,
        NewRecovered: 0,
        TotalRecovered: 0,
        Time: "00000000",
      },
      "South America": {
        ForEachDay: true,
        NewConfirmed: 0,
        TotalConfirmed: 0,
        NewDeaths: 0,
        TotalDeaths: 0,
        NewRecovered: 0,
        TotalRecovered: 0,
        Time: "00000000",
      },
      Australia: {
        ForEachDay: true,
        NewConfirmed: 0,
        TotalConfirmed: 0,
        NewDeaths: 0,
        TotalDeaths: 0,
        NewRecovered: 0,
        TotalRecovered: 0,
        Time: "00000000",
      },
      Europe: {
        ForEachDay: true,
        NewConfirmed: 0,
        TotalConfirmed: 0,
        NewDeaths: 0,
        TotalDeaths: 0,
        NewRecovered: 0,
        TotalRecovered: 0,
        Time: "00000000",
      },
    },
    Vaccines: {
      "vaccine-name": "Country-name",
    },
    Countries: {
      ForEachDay: false,
      name: "",
      active: "",
      deaths: "",
      "cured-and-discharged-cases": 234234,
    },
  },
};

const client = new MongoClient(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function displayAllCollectionsDetails(client) {
  client
    .db(dbName)
    .listCollections()
    .toArray((err, result) => {
      if (err) console.error(err);
      else console.log(result);
    });
}

async function displayAllDataInCollection(client, collection) {
  client
    .db(dbName)
    .collection(collection)
    .find({})
    .toArray((err, result) => {
      if (err) console.error(err);
      else console.log(result);
    });
}

async function listDatabase(client) {
  databasesList = await client.db().admin().listDatabases();
  console.log(`Databases: `);
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}

async function createListing(client, collection, newListing) {
  const result = await client
    .db(dbName)
    .collection(collection)
    .insertOne(newListing);
  console.log(`New listing created with the id: ${result.insertedId}`);
}

async function createMultipleListing(client, collection, newListings) {
  const result = await client
    .db(dbName)
    .collection(collection)
    .insertMany(newListings);
  console.log(result.insertedIds);
}

async function findOneListingByName(client, collection, nameOfListing) {
  const result = await client
    .db(dbName)
    .collection(collection)
    .findOne({ trying: nameOfListing });
  if (result) {
    console.log(`Found Listing in ${dbCollection} as: `);
    console.log(result);
  } else {
    console.log(`No such Listing found in ${dbCollection} in ${dbName}`);
  }
}

async function updateListingByName(
  client,
  collection,
  nameOfListing,
  updatedListing,
  attribute
) {
  const result = await client.db(dbName).collection(collection).updateOne(
    { name: nameOfListing },
    { $set: updatedListing }
    // { upsert: true }
  );
}

async function updateAllListingsToHavePropertyType(client, collection) {
  await client
    .db(dbName)
    .collection(collection)
    .updateMany(
      { property_type: { $exists: false } },
      { $set: { property_type: "Unknown" } }
    );
  console.log(`${result.matchedCount} document(s) matched`);
  console.log(`${result.modifiedCount} document(s) were updated`);
}

async function deleteListingByName(client, collection, nameOfListing) {
  await client
    .db(dbName)
    .collection(collection)
    .deleteOne({ name: nameOfListing });
  console.log(`${result.deleteCount} document(s) were deleted`);
}

module.exports = {
  client,
  displayAllDataInCollection,
  displayAllCollectionsDetails,
  listDatabase,
  createListing,
  createMultipleListing,
  findOneListingByName,
  updateListingByName,
  deleteListingByName,
};
