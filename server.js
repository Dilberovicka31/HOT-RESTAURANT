// const { table } = require("console");
const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 4000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const tableLink = [];
const waitList = [];


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });

  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

  app.get("/api/tablelink", function(req, res) {
    return res.json(tableLink);
  });

  app.get("/api/waitlist", function(req, res) {
    return res.json(waitList);
  });



app.post("/api/tablelink", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    let newCustomer = "testcustomer";
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    // newCustomer.routeName = newCustomer.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newCustomer);
  
    res.json(newCustomer);

    // if (tableLink.length < 5) {

    //     tableLink.push(newCustomer);

    // }
  });


app.listen(PORT, function() {
    console.log("test working")
});
