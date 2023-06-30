"use strict";

const express = require("express"),
  app = express(),
  homeController = require("./controllers/homeController"),
  errorController = require("./controllers/errorController"),
  //Require the expressejs-layouts module
  layouts = require("express-ejs-layouts");

//Set the application to use ejs.
app.set("view engine", "ejs");
app.set("port", process.env.PORT || 3000);
app.use(
  express.urlencoded({
    extended: false
  })
);

app.use(express.json());
//Set the application to use the layout module.
app.use(layouts);
// takes an absolute path to the folder containing your static files
app.use(express.static("public"));

//Create a route for the home page.
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/courses", homeController.showCourses);
app.get("/contact", homeController.showSignUp);
//a POST route to handle submissions made from the form on the sign-up page
app.post("/contact", homeController.postedSignUpForm);

app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
