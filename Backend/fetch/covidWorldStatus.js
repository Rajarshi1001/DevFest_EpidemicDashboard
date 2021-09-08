require("dotenv").config({ path: "../.env" });
const { MongoClient, ObjectId } = require("mongodb");
const fetch = require("node-fetch");
const dbName = process.env.DB_NAME;
const dbCollection = "covidWorldStats";
const dbURL = process.env.MONGO_URL;

async function createListing(client, collection, newListing) {
  const result = await client
    .db(dbName)
    .collection(collection)
    .insertOne(newListing);
  if (result.error) {
    return result.error;
  }
  console.log(`New listing created with the id: ${result.insertedId}`);
}

async function deleteListingByName(client, collection, nameOfListing) {
  await client
    .db(dbName)
    .collection(collection)
    .deleteOne({ name: nameOfListing });
  console.log(`${result.deleteCount} document(s) were deleted`);
}

async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();
  console.log(`Databases: `);
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}

const url = "https://api.covid19api.com/summary";
async function fetch_world_data() {
  let response = await fetch(url);
  let data = await response.json();
  return data["Global"];
}

async function main() {
  const client = new MongoClient(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  try {
    await client.connect();
    await listDatabases(client);
    await fetch_world_data().then((data) => {
      console.log(data);
      createListing(client, dbCollection, data);
    });
    const display = await client
      .db(dbName)
      .collection(dbCollection)
      .find({})
      .toArray();
    console.log(display);
    console.log("*************************");
    console.log("*************************");
    console.log("*************************");
    console.log("*************************");
    console.log("*************************");
    console.log("*************************");
    // const deleting = await client
    //   .db(dbName)
    //   .collection(dbCollection)
    //   .deleteMany({});
    // console.log(display);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

main().catch((err) => console.error(err));
