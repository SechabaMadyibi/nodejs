"use strict";

const mongoose = require("mongoose"),
//create schema and add schema properties
  subscriberSchema = mongoose.Schema({
    name: String,
    email: String,
    zipCode: Number
  });
// subscriber model to use initiate new subscribers
module.exports = mongoose.model("Subscriber", subscriberSchema);
