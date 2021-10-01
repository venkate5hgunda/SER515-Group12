const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require('path');

require("dotenv").config();
const app = express();
const port = process.env.PORT || 5001;
const routes = require('./routes/routes');

app.use(cors());
app.use(express.json());

// mongodb connection creation and opening
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {});
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB connection established successfully");
});

app.use('/static', express.static(path.join(__dirname,'../client/build/static'))); // Route for react static assets
app.use('/',routes); // routes are in routes.js file

// start the MERN app
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`Click here to open: http://localhost:${port}`);
});