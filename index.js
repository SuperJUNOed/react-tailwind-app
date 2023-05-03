const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my application." });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (email === "superjuno1018@gmail.com" && password === "wjd1018115") {
    return res.status(200).json({ message: "Login successful" });
  } else {
    return res.status(401).json({ message: "Invalid email or password" });
  }
});

app.get("/api/data", (req, res) => {
  fs.readdir("./jsonfiles", (err, files) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error retrieving data");
    } else {
      const data = [];

      files.forEach((file) => {
        fs.readFile(`./jsonfiles/${file}`, "utf8", (err, jsonData) => {
          if (err) {
            console.log(err);
            res.status(500).send("Error retrieving data");
          } else {
            const dataObj = JSON.parse(jsonData);
            dataObj.fileName = file;
            data.push(dataObj);

            if (data.length === files.length) {
              res.json(data);
            }
          }
        });
      });
    }
  });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
