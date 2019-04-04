// Dependencies
const path = require("path");


var friends = require("../data/friends.js");


module.exports = function (app) {
    // loads the api table with all existing informations of people looking for friends
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/tables", function(req, res) {
        // Note the code here. Our "server" will respond to requests and let user know info has been registered
        // It will do this by sending out the value "true" have a table
        // req.body is available since we're using the body parsing middleware
        friends.push(req.body);
        res.json(true);
    });
}