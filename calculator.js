const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extend: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  let n1 = Number(req.body.num1);
  let n2 = Number(req.body.num2);
  let jumlah = n1 + n2;
  res.send("thanks for your post " + jumlah);
});

app.get("/bmi", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmi", (req, res) => {
  let w1 = Number(req.body.weight);
  let h1 = Number(req.body.height);
  let rbmi = w1 / (h1 * h1);

  res.send("bmi: " + rbmi);
});

app.listen(port, () => {
  console.log("Example app listening on port 3000");
});
