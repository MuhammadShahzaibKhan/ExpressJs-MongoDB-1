require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const coursesroute = require("./routes/courseroute");
const userroute = require("./routes/user");

const App = express();
App.use(express.json());

App.use("/courses", coursesroute);
App.use("/users", userroute);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    App.listen(process.env.PORT, () => {
      console.log(
        `server listening on port http://localhost:${process.env.PORT}`
      );
    });
  })
  .catch((err) => {
    console.log("err", err);
  });
