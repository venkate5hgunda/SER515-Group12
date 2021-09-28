const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5001;
app.use(cors());
app.use(express.json());
const appIndex = require('./controllers/app.controller');

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB connection established successfully");
});

app.use(express.static(`${__dirname}/../client/build`));
app.get("/health", (req,res) => {
    // res.send({
    //     health: "UP"
    // });
    res.send(appIndex.getIndexPage());
});
// Crypto Generation Route
app.get("/tokengenerator", (req,res) => {
    res.send(appIndex.getIndexPage());
});

app.get("/*", function(req,res) {
    res.sendFile(`${__dirname}/../client/build/index.html`, function(err) {
        if(err) {
            res.status(500).send(err);
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`Click here to open: http://localhost:${port}`);
});