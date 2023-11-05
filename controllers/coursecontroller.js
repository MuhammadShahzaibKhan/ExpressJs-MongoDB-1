const CourseModel = require("../DBmodels/coursemodel");
const { SendResponse } = require("../helpers/helpers");

const courses = [
  {
    id: 1,
    name: "Mathematics",
    description: "Introduction to mathematics and its principles.",
    instructor: "John Doe",
  },
  {
    id: 2,
    name: "History",
    description: "Explore the history of civilizations and events.",
    instructor: "Jane Smith",
  },
  {
    id: 3,
    name: "Computer Science",
    description: "Learn programming and software development.",
    instructor: "Sam Johnson",
  },
  {
    id: 4,
    name: "Biology",
    description: "Study living organisms and their interactions.",
    instructor: "Alice Brown",
  },
  {
    id: 5,
    name: "Art and Design",
    description: "Express your creativity through art and design.",
    instructor: "David Wilson",
  },
];

const coursecontroller = {
  add: async (req, res) => {
    try {
      const { name, shortName, fee } = req.body;
      let obj = { name, shortName, fee };

      let errArr = [];

      if (!obj.name) {
        errArr.push("Required name");
      }
      if (!obj.shortName) {
        errArr.push("Required Short Name");
      }
      if (errArr.length > 0) {
        res.status(400).send(SendResponse(false, "Validation Error !", errArr));
      } else {
        let Course = new CourseModel(obj);
        let result = await Course.save();

        res
          .status(200)
          .send(SendResponse(true, "Data Added successfully", result));
      }
    } catch (e) {
      res.status(500).send(SendResponse(false, "Internal Server Error", e));
    }
  },
  get: async (req, res) => {
    try {
      let result = await CourseModel.find();
      res.status(200).send(SendResponse(true, "", result));
    } catch (e) {
      res.status(500).send(SendResponse(false, "Internal Server Error", e));
    }
  },
  getById: async (req, res) => {
    try {
      let id = req.params.id;
      let result = await CourseModel.findById(id);
      res.status(200).send(SendResponse(true, "", result));
    } catch (e) {
      res.status(500).send(SendResponse(false, "Internal Server Error", e));
    }
  },
  edit: async (req, res) => {
    try {
      let id = req.params.id;
      let result = await CourseModel.findByIdAndUpdate(id, req.body);
      res
        .status(200)
        .send(SendResponse(true, "Data Edited Successfully", result));
    } catch (e) {
      res.status(200).send(SendResponse(true, "Data Edited UnSuccessfull", e));
    }
  },
  del: (req, res) => {
    try {
      let id = req.params.id;
      CourseModel.findByIdAndDelete(id)
        .then(() => {
          res.status(200).send(SendResponse(true, "Data Deleted Successfully"));
        })
        .catch((err) => {});
    } catch (e) {
      res.status(400).send(SendResponse(false, "Bad request", e));
    }
  },
};

module.exports = coursecontroller;
