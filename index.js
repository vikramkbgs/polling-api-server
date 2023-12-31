const express = require("express");
const mongoose = require("mongoose");

const app = express();
require("dotenv").config();

app.use(express.json());
app.use("/", require("./routes"));

const port = process.env.PORT || 3000;
const uri = process.env.ATLAS_URI;

app.listen(port, (req, res) => {
  console.log(`server running on port... ${port}`);
});

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection establised"))
  .catch((error) => console.log("MongoDB connection fail", error.message));
