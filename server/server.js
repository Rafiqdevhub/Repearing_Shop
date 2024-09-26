const express = require("express");
require("dotenv").config();
const connectDB = require("./config/dbConnection");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
app.use("/", express.static(path.join(__dirname, "public")));

connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ message: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
