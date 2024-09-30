const express = require("express");
require("express-async-errors");
require("dotenv").config();
const connectDB = require("./config/dbConnection");
const cors = require("cors");
const corsOptions = require("./cors/corsOption");
const path = require("path");

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;
app.use("/", express.static(path.join(__dirname, "public")));
app.use(cors(corsOptions));

// Home route
app.use("/", require("./routes/root"));

// Auth route
app.use("/auth", require("./routes/authRoute"));

// User route
app.use("/users", require("./routes/userRoute"));

// Note route
app.use("/notes", require("./routes/noteRoute"));

// page not found
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
  connectDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});
