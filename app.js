const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const dbConfig = require("./config/database.js");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Successfully connected to database");
  })
  .catch(err => {
    console.log("Could not connect to the databse", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.json({ message: "welcome" });
});

require("./app/routes/note.routes.js")(app);

app.listen(3000, () => {
  console.log("sever listening on port 3000");
});
