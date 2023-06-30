"use strict";

const Subscriber = require("../models/subscriber");
//Export getAllSubscribers to pass data from the database to the next middleware function.
//using the empty object to make it clear that you want to get all subscribers with no conditions attached.
exports.getAllSubscribers = (req, res, next) => {
  //Query with find on the Subscriber 
  Subscriber.find({}, (error, subscribers) => {
    if (error) next(error);
    //Set data that comes back from MongoDB on Continue to the request object.
    req.data = subscribers;
    next();
  });
};
