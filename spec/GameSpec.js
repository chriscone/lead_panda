var Game = require("../app/dummy.js");
describe("Game", function() {
  var game;

  beforeEach(function() {  
    game = new Game();
  });

  
  it("should return a non null game", function() {
    expect(game).not.toBeNull();
  });

});
