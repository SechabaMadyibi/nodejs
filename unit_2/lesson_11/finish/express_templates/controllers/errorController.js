"use strict";

const httpStatus = require("http-status-codes");

exports.logErrors = (error, req, res, next) => {
  //log error stack
  console.error(error.stack);
  // passing the error object in case it needs to be processed further.
  next(error);
};

exports.respondNoResourceFound = (req, res) => {
  let errorCode = httpStatus.NOT_FOUND;
  res.status(errorCode);
  res.send(`${errorCode} | The page does not exist!`);
};

exports.respondInternalError = (error, req, res, next) => {
  let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
  console.log(`ERROR occurred: ${error.stack}`);
  res.status(errorCode);
  res.send(`${errorCode} | Sorry, our application is experiencing a problem!`);
};
