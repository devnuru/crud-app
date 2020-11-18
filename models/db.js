const mongoose = require("mongoose");

const url = "mongodb://localhost:27017";

mongoose.connect(
  "mongodb://localhost:27017/EmployeeDB",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Database connection successful");
    }
  }
);
require("./employee.model");
