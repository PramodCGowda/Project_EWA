const express = require("express");
const app = new express();
const mongoose = require("mongoose");
const cors = require("cors");

//Importing Routes
const services = require("./routes/service");
const users = require("./routes/user");
const providers = require("./routes/provider");
const categories = require("./routes/category");

// // create application/json parser
// var jsonParser = bodyParser.json()
app.use(cors());

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Welcome to RepairMate");
});

app.use("/api/service", services);

app.use("/api/provider", providers);

app.use("/api/category", categories);

app.use("/api/user", users);

const start = async () => {
  let port = 9000;
  try {
    await mongoose.connect(
      "mongodb+srv://pramodcgwd50:mH5Kc53lwA7yjBQI@ewa.ga9tynk.mongodb.net/repairmate?retryWrites=true&w=majority"
    );
    app.listen(port, () => console.log("Server started on port: " + port));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
start();
