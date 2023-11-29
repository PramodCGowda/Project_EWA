const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const sequelize = require("./db/mysql");

//Importing Routes
const services = require("./routes/serviceRoute");
const users = require("./routes/userRoute");
const providers = require("./routes/providerRoute");
const orders = require("./routes/orderRoute");

async function startServer() {
  const app = express();
  const PORT = 9000;

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.get("/", (req, res) => {
    res.send("Welcome to RepairMate");
  });

  app.use("/api/service", services);

  app.use("/api/provider", providers);

  app.use("/api/user", users);

  app.use("/api/order", orders);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  try {
    await sequelize.sync();
    console.log("Sequelize synchronized successfully!");
    //await productSeeder.up();
    console.log("Data seeded successfully!");
  } catch (error) {
    console.error("Error during synchronization or seeding:", error);
  }
}

startServer();
