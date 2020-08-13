const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const globalRouter = require("./route");

const app = express();
const PORT = 5000;

// middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// db
mongoose
  .connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    dbName: "flutterServer",
  })
  .then(() => console.log("mongodb Connected!"))
  .catch((err) => console.log(err));

// route
app.use("/", globalRouter);

// listen
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
