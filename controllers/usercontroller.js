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
  
  const usercontroller = {
    add: (req, res) => {
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
        res.send({
          isSucessfull: false,
          message: "Validation Error !",
          data: errArr,
        });
      } else {
        obj.id = courses.length + 1;
  
        courses.push(obj);
  
        res.send({
          isSucessfull: true,
          message: "Data Added Successfully",
          data: obj,
        });
  
        res.send(obj);
      }
    },
    get: (req, res) => {
      res.send(courses);
    },
    getById: (req, res) => {
      let id = req.params.id;
  
      let obj = courses.find((x) => x.id == id);
      if (obj) {
        res.send({
          isSucessfull: true,
          data: obj,
          message: "",
        });
      } else {
        res.send({
          isSucessfull: true,
          data: null,
          message: "Data not found",
        });
      }
    },
    edit: (req, res) => {
      console.log(req.body);
  
      res.send({
        message: "Data edited",
      });
    },
    del: (req, res) => {
      console.log(req.params);
  
      res.send({
        message: "Data deleted",
      });
    },
  };
  
  module.exports = usercontroller