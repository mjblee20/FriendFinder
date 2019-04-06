// Dependencies
const express = require("express");

const app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing (middleware functions)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);


// global variables


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
