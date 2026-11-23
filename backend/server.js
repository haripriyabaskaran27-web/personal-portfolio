
require("dotenv").config();

const express = require("express");
const path = require("path");
const mysql = require("mysql2/promise");

const app = express();
const PORT = process.env.PORT || 3000;

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

app.get("/api/projects", async function(req, res) {
    try {
        const [projects] = await db.query(
            "SELECT * FROM projects"
        );
        res.json(projects);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Database connection error"
        });
    }
});

app.use(express.static(path.join(__dirname, "..")));

app.listen(PORT, function() {
    console.log(`Server running at http://localhost:${PORT}`);
});
