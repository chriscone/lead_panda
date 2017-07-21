var Game = require("../app/Game.js");
describe("Game", function() {
  var game;

  beforeEach(function() {  
    game = new Game();
  });

  
  it("should return a non null game", function() {
    expect(game).not.toBeNull();
  });

  it("should give a score of 20 when 1 pin is hit with each roll"
    , function() {
    var pins = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
    
    pins.forEach(function (pin) {
      game.roll(pin);
    });
    expect(game.score()).toEqual(20);
  });

  it("should give a score of 107"
    , function() {
    var pins = [4,2,10,8,2,6,4,3,1,8,2,5,4,2,7,1,5,7,2];
    pins.forEach(function (pin) {
      game.roll(pin);
    });
    expect(game.score()).toEqual(107);
  });

  it("should give a score of 73"
    , function() {
    var pins = [3,4,3,2,3,4,3,2,4,3,4,6,5,4,3,3,2,2,3,5];
    pins.forEach(function (pin) {
      game.roll(pin);
    });
    expect(game.score()).toEqual(73);
  });

  it("should give a score of 24"
  , function() {
  var pins = [1,1,1,1,1,1,5,1,1,1,1,1,1,1,1,1,1,1,1,1];
  pins.forEach(function (pin) {
    game.roll(pin);
  });

    expect(game.score()).toEqual(24);
  });

  it("should give a score of 72"
  , function() {
  var pins = [2,4,4,2,1,3,4,5,10,3,3,4,2,4,5,3,2,4,1];
  pins.forEach(function (pin) {
    game.roll(pin);
  });

    expect(game.score()).toEqual(72);
  });

});
