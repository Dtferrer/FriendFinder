// LOAD DATA

var friendsData = require("../data/friends");

// ROUTING

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
    var userData = req.body.scores;
    var totalDifference = 0;
    var allDiff = [];
    console.log(userData);
      for (var i = 0; i < friendsData.length; i++) {
        for (var j = 0; j < friendsData[i].scores.length; j++) {
          var diff =  Math.abs(userData[j]-friendsData[i].scores[j]);
          parseInt(diff);
          totalDifference += diff;
        }
      
      allDiff.push(totalDifference);
      totalDifference = 0;
      }
      var min = allDiff[0];
      var minIndex = 0;

      for (var i = 1; i < allDiff.length; i++) {
        if (allDiff[i] < min) {
            minIndex = i;
        }
      }

      var daFriend = friendsData[minIndex];
      console.log(daFriend);
      res.json(daFriend);
  });
};
