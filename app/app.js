
const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "healthy",
        application: "DevOps Learning Dashboard"
    });
});

module.exports = app;
