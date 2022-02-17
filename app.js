const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const morgan = require("morgan");

const DBconnection = require("./config/db");

const errorHandler = require('./middleware/error')

const categoryRoutes = require('./routes/categories')

dotenv.config({ path: "./config/.env" });

DBconnection();


const app = express();
app.use(express.json());
// check if dev server or production
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// initial display on page: dont need when routes are set
// app.use((req, res, next) => {
//   res.json({ title: "hello world!" });
// });

app.use('/api/v1/categories', categoryRoutes)

app.use(errorHandler)

// use env
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`API Running on http://localhost:${PORT}`.brightYellow.italic);
});
