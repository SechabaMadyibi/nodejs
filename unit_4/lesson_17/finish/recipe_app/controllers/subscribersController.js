"use strict";

const Subscriber = require("../models/subscriber");

exports.getAllSubscribers = (req, res) => {
  //find subscribers
  Subscriber.find({})
  //Return a promise action. from the find query
    .exec()
    //Send saved data to the next then code block.
    .then(subscribers => {
      //render subscribers webpage. 
      res.render("subscribers", {
        subscribers: subscribers
      });
    })
    //Catch errors that are rejected in the promise.
    .catch(error => {
      console.log(error.message);
      return [];
    })
    .then(() => {
    
      console.log("promise complete");
    });
};
// render contacts page
exports.getSubscriptionPage = (req, res) => {
  res.render("contact");
};
/*Add an action to save subscribers. saveSubscriber collects data from the request and allows the body-parser package
  to read the request body’s contents. . A new model instance is created, mapping the subscriber’s fields to the request
body parameters*/
exports.saveSubscriber = (req, res) => {
  let newSubscriber = new Subscriber({
    name: req.body.name,
    email: req.body.email,
    zipCode: req.body.zipCode
  });
  //Save a new subscriber with a promise return.
  newSubscriber
    .save()
    .then(result => {
      res.render("thanks");
    })
    .catch(error => {
      if (error) res.send(error);
    });
};
