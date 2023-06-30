"use strict";

const fs = require("fs"),
  httpStatus = require("http-status-codes"),
  contentTypes = require("./contentTypes");

module.exports = {
  getFile: (file, res) => {
    // first reads file and checks for errors if theres an error, diplay error message on the browser
    //readfile function looks at file path and callback function
    fs.readFile(`./${file}`, (error, data) => {
      if (error) {
        res.writeHead(httpStatus.INTERNAL_SERVER_ERROR, contentTypes.html);
        res.end("There was an error serving content!");
      }
      res.end(data);
    });
  }
};

