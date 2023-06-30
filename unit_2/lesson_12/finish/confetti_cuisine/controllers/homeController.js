"use strict";
// arrray storing courses and costs
var courses = [
  {
    title: "Event Driven Cakes",
    cost: 50
  },
  {
    title: "Asynchronous Artichoke",
    cost: 25
  },
  {
    title: "Object Oriented Orange Juice",
    cost: 10
  }
];
// pass courses array to view
exports.showCourses = (req, res) => {
  res.render("courses", {
    offeredCourses: courses
  });
};

//pass contacts to view
exports.showSignUp = (req, res) => {
  res.render("contact");
};
//pass thanks to view folder 
exports.postedSignUpForm = (req, res) => {
  res.render("thanks");
};
