const express = require("express");
const coursecontroller = require("../controllers/coursecontroller");
const route = express.Router();

route.get("/", coursecontroller.get);
// route.get("/search", (req, res) => {});
route.get("/:id", coursecontroller.getById);
route.post("/", coursecontroller.add);
route.put("/:id", coursecontroller.edit);
route.delete("/:id", coursecontroller.del);

module.exports = route;
