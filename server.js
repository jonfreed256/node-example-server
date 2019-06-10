const express = require("express");
const path = require("path");

const complements = [
  "You like nice today",
  "You're an awesome friend",
  "Have you been working out?",
  "You can do hard things",
  "You're a smart cookie",
  "You are awesome!",
  "I'm really proud of you",
  "I like your style",
  "You should be proud of yourself"
];

function getRandomComplement() {
  const randomIndex = Math.floor(Math.random() * complements.length);
  return complements[randomIndex];
}

const app = express();

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/complement", function(req, res) {
  res
    .json({
      complement: getRandomComplement()
    })
    .end();
});

app.use("/public", express.static("./public"));

app.listen(3000);
console.log("listening on http://localhost:3000");
