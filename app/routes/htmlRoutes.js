// Dependencies
const path = require("path");
console.log(path.join(__dirname, "../../"));

module.exports = function (app) {
    
    // GET Route to /survey which should display the survey page.
    app.get("/survey", function(req, res) {
        res.sendFile(__dirname, "../pages/survey.html");
    });

    // A default, catch-all route that leads to home.html which displays the home page.
    // Home page GET route
    app.get("*", function(req, res) {
        res.sendFile(__dirname, "../pages/home.html");
    });

    

   
}



