"use strict";

var express = require("express");

var path = require("path");

var app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.get("/", function (req, res) {
  res.setHeader("Content-Type", "text/html"); // res.sendFile(path.join(__dirname, "views/home.html"));

  res.render("index", {
    title: "Node.Js"
  });
});
app.get("/about", function (req, res) {
  res.setHeader("Content-Type", "text/html"); // res.sendFile(path.join(__dirname, "views/home.html"));

  res.render("about", {
    title: "Node.Js"
  });
});
app.listen(3000, function (e) {
  if (e) throw e;
  console.log('server is running on port 3000');
});