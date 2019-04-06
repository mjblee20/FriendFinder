// Dependencies
const path = require("path");


var friends = require("../data/friends.js");


module.exports = function(app) {
    // loads the api table with all existing informations of people looking for friends
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {

        // retrieve user input from survey
        var data = req.body;

        let leastDifference = 40; // max difference is 40 (5-1) * 10

        let mostCompatible; // placeholder for most compatible friend

        // loop through all existing potential friends
        for (let i = 0; i < friends.length; i++) {
            // reset total difference for every potential friend in the friends array
            let totalDifference = 0; 

            // go through every score number and sum all the differences between two users
            for (let j = 0; j < 10; j++) {
                // math.abs to guarantee positive differences
                totalDifference += Math.abs(parseInt(data.scores[j]) - parseInt(friends[i].scores[j]));
            }

            // only save the potential friend with least difference
            if (totalDifference < leastDifference) {
                // updates the leastDifference score
                leastDifference = totalDifference;
                // keep track of the match with least difference
                mostCompatible = friends[i];
            }
        }
        // updates the api database with newly signed up user
        friends.push(data);
        // responds with the most compatible potential friend
        res.json(mostCompatible);
    });
}