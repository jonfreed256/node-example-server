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
  "You should be proud of yourself",
  "You're more helpful than you realize.",
  "You have a great sense of humor.",
  "You've got an awesome sense of humor!",
  "You are really courageous.",
  "Your kindness is a balm to all who encounter it.",
  "You're all that and a super-size bag of chips.",
  "On a scale from 1 to 10, you're an 11.",
  "You are strong.",
  "You're even more beautiful on the inside than you are on the outside.",
  "You have the courage of your convictions.",
  "I'm inspired by you.",
  "You're like a ray of sunshine on a really dreary day.",
  "You are making a difference.",
  "Thank you for being there for me.",
  "You bring out the best in other people."
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
