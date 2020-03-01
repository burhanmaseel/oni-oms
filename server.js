/** All the main application configurations are done here */


const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const dbUrl = require("./config/mongo.json").url;

const app = express();
app.use(bodyParser.json());

//MongoDB connection configurations
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
  console.log(`Database Connected Successfully`);
});

const authRoutes = require("./routes/authRoutes");

authRoutes(app);

//Server Connection is Defined here
const port = process.env.PORT || 5000; //You can change the port by changing the static port number 5000 to any other port or you can define it in .env file
app.listen(port, () => console.log(`Server is running on port ${port}`));
