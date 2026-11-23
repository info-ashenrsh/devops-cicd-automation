
const express = require("express");
const path = require("path");

const app = require("./app");
const PORT = process.env.PORT || 3000;

// Serve frontend files
app.use(express.static(path.join(__dirname, "public")));

// Application health endpoint
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "healthy",
        application: "DevOps Learning Dashboard"
    });
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
