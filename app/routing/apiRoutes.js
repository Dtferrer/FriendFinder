
// LOAD DATA

var friendsData = require("../data/friends");

// ROUTING

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
      for (var i = 0; i < 10; i++) {
        // loop through the friends array and compare each score to user score
        // return the friend that has the smallest total difference score
      }
  });
};
