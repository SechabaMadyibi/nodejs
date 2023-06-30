"use strict";

const port = 3000,
  express = require("express"),
  app = express();
// parse icoming requests that are url encoded
app.use(
  express.urlencoded({
    extended: false
  })
);
//incoming data must be in Json format
app.use(express.json());

app.use((req, res, next) => {
  console.log(`request made to: ${req.url}`);
  next();
});

app.post("/", (req, res) => {
  console.log(req.body);
  console.log(req.query);
  res.send("POST Successful!");
});

app.get("/items/:vegetable", (req, res) => {
  let veg = req.params.vegetable;
  res.send(`This is the page for ${veg}`);
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
