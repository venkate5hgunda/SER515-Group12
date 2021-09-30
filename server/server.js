const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5001;
app.use(cors());
app.use(express.json());

// mongodb connection creation and opening
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {});
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB connection established successfully");
});


app.use(express.static(`${__dirname}/../client/build`)); // re-direct client side routes to react
require('./routes/routes')(app); // routes have been moved to routes.js file

// start the MERN app
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`Click here to open: http://localhost:${port}`);
});