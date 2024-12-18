import express from "express";
import { get } from "http";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

function randomPhrase() {
  let text = "";
  const weekdayPhrases = [
    "Keep pushing forward!",
    "You are capable of amazing things!",
    "Believe in yourself!",
    "Stay positive, work hard, make it happen!",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  ];

  const weekendPhrases = [
    "Relax and recharge!",
    "Enjoy your weekend!",
    "Take time to do what makes your soul happy!",
    "Weekends are for adventures!",
    "Make the most of this weekend!",
  ];

  const date = new Date();
  const today = date.getDay();
  const randomIndex = Math.floor(Math.random() * (weekdayPhrases.length));

  if (today >= 1 && today <= 5) {
    text = `Hey, it's a Weekday! ${weekdayPhrases[randomIndex]}`;
  } else{
    text = `Hey, it's the Weekend! ${weekendPhrases[randomIndex]}`;
  }

  console.log(text);
  return text;
}

app.get("/", (req, res) => {
  let phrase = randomPhrase();
  res.render("index", { phrase });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
