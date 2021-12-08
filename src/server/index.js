const dotenv = require("dotenv");
dotenv.config();

var path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const mockAPIResponse = require("./mockAPI.js");

// Start up an instance of app
const app = express();

// Cors allows the browser and server to communicate without any security interruptions
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("dist"));

let searchInput = [];

app.get("/", function (req, res) {
  //res.sendFile("dist/index.html");
  res.sendFile(path.resolve("src/client/views/index.html"));
});

app.post("/analyzeData", async function (req, res) {
  const apiURL = "https://api.meaningcloud.com/sentiment-2.1?";
  const apiKey = process.env.API_KEY;
  searchInput = req.body.url;
  const apiReqUrl = `${apiURL}key=${apiKey}&url=${apiURL}&lang=en`;
  console.log("Requ Url :", apiReqUrl);
  const response = await fetch(apiReqUrl);
  const data = await response.json();
  res.send(data);
});
app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});
// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
  console.log("Example app listening on port 8080!");
});
