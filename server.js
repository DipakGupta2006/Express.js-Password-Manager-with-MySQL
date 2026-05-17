require("dotenv").config(); 
const express = require("express");
const pool = require("./db"); 
const app = express();
const path = require('path'); 
const { render } = require("ejs");
const { log } = require("console");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "dashboard.html"));
});
app.get("/dashboard", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "dashboard.html"));
});


app.get("/add", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "add.html"));
});

app.post("/submit", async (req, res) => {
    const app_name = req.body.app_name;
    const category = req.body.category;
    const username = req.body.username;
    const password = req.body.password;

    try{
        await pool.query(
            "INSERT INTO passwords (app_name, category, username, password) VALUES (?, ?, ? ,?)",
            [app_name, category, username, password]
        );
        const [rows] = await pool.query("SELECT * FROM passwords");
        res.render("view", {passwords:rows});
    }
    catch (err) {
        console.error("Error:", err);
        res.status(500).send("Internal Server Error");
    }
});

app.get("/view", async (req, res) => {
    try{
        const [rows] = await pool.query("SELECT * FROM passwords");
        res.render("view", { passwords:rows});
    }
    catch (err) {
        console.error("Error:", err);
        res.status(500).send("Internal Server Error");
    }
});

app.get("/generate", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "generate.html"))
})


app.listen(5000, () => {
    console.log("Server running at 5000 port");
})