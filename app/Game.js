var score;
var rolls = [];
var roll;

var Game = function() {
  score = 0;
  roll = 0;
};

Game.prototype.roll = function(num) {
  rolls[roll++] = num;
};

Game.prototype.score = function() {
  var rollIndex = 0;
  for (var i = 0; i < 10; i++) {
    var pins = rolls[rollIndex];

    if (pins == 10) {
      score = score + 10 + rolls[rollIndex + 1] + rolls[rollIndex + 2];
      rollIndex++;
    }else if(pins + rolls[rollIndex + 1] == 10) {
      score = score + 10 + rolls[rollIndex + 2];
      rollIndex = rollIndex + 2;
    }else {
      score = score + pins + rolls[rollIndex + 1];
      rollIndex = rollIndex + 2;
    }
  }
  console.info("score: "+score);
  return score;
};
module.exports = Game;
