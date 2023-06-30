"use strict";

const express = require("express"),
  app = express(),
  homeController = require("./controllers/homeController"),
  layouts = require("express-ejs-layouts");
//set port to the environment variable PORT value or 3000 if the former value is undefined
app.set("port", process.env.PORT || 3000);
//set view engine as ejs
app.set("view engine", "ejs");

app.use(layouts);
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());
// display requested url on the console
app.use((req, res, next) => {
  console.log(`request made to: ${req.url}`);
  next();
});
//
app.get("/name/:myName",homeController.respondWithName);
app.get("/items/:vegetable", homeController.sendReqParam);

app.post("/", (req, res) => {
  console.log(req.body);
  console.log(req.query);
  res.send("POST Successful!");
});

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
