const express = require("express");
require("dotenv").config();
const connectDB = require("./config/dbConnection");

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
