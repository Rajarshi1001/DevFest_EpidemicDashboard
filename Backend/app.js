require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const { MongoClient, ObjectId } = require("mongodb");
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

// mongoD client declaration
const client = new MongoClient(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/login", function (req, res) {});
client.connect((err) => {
  if (err) {
    console.log(`Unable to connect to DB: ${err}`);
    process.exit(1);
  } else {
    app.listen(PORT, () => {
      client
        .db(process.env.DB_NAME)
        .listCollections()
        .toArray((err, result) => {
          if (err) console.error(err);
          else console.log(result);
          console.log(`Connected to DB, App listening on port ${PORT}.`);
        });
    });
  }
});
app.
