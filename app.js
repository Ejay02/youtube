const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const morgan = require("morgan");

const DBconnection = require("./config/db");

dotenv.config({ path: "./config/.env" });

DBconnection();

const app = express();

// check if dev server or production
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// display on page
app.use((req, res, next) => {
  res.json({ title: "hello world!" });
});

// move to env usage
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`API Running on http://localhost:${PORT}`.brightYellow.italic);
});
