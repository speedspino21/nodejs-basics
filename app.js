const express = require("express");
const path = require("path");
const app =express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.setHeader("Content-Type", "text/html");
    // res.sendFile(path.join(__dirname, "views/home.html"));
    res.render("index", {
        title: "Node.Js"
    });
});

app.get("/about", (req, res) => {
    res.setHeader("Content-Type", "text/html");
    // res.sendFile(path.join(__dirname, "views/home.html"));
    res.render("about", {
        title: "Node.Js"
    });
});

app.listen(3000, (e) => {
    if (e) throw e;
    console.log('server is running on port 3000')
});