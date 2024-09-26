const express = require("express");
require("dotenv").config();
const connectDB = require("./config/dbConnection");
const path = require("path");

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;
app.use("/", express.static(path.join(__dirname, "public")));

connectDB();

// Home route
app.use("/", require("./routes/root"));

// User route
app.use("/users", require("./routes/userRoute"));

// 404 route
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
