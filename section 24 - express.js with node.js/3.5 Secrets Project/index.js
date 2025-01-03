//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
let currentPass = "DanDaRan";
let isAuthorised = false;

app.use(bodyParser.urlencoded({ extended: true }));

function validatePass(req, res, next) {
  console.log(req.body);
  const inputPass = req.body.password;
  if (inputPass === currentPass) {
    isAuthorised = true;
  } else {
    isAuthorised = false;
  }
  next();
}

app.use(validatePass);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  if (isAuthorised) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.redirect("/");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
