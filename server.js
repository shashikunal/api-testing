/*------javascript ------------------*/

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.get("/", (req, res) => {
  let users = [
    {
      name: "shashi",
      company: "Qspiders",
      salary: 2000000,
      designation: "html developer",
    },
    {
      name: "sandeep",
      company: "Qspiders",
      salary: 2000000000,
      designation: "selenium trainer",
    },
    {
      name: "uday",
      company: "Qspiders",
      salary: 200000000000,
      designation: "Java trainer",
    },
    {
      name: "varun",
      company: "Qspiders",
      salary: 20000000000000000,
      designation: "SQL trainer",
    },
    {
      name: "vijay",
      company: "Qspiders",
      salary: 20000000000000000,
      designation: "PROJECT trainer",
    },
  ];
  res.status(200).json(users); //javascript code is converted into JSON
});

app.listen(4000, err => {
  if (err) throw err;
  console.log("my web server is running on port number " + 4000);
});
