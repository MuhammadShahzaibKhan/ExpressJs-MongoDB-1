const express = require("express");
const usercontroller = require("../controllers/usercontroller");
const route = express.Router();

route.get("/", usercontroller.get);
route.get("/search", (req, res) => {});
route.get("/:id", usercontroller.getById);
route.post("/", usercontroller.add);
route.put("/:id", usercontroller.edit);
route.delete("/:id", usercontroller.del);

module.exports = route;
