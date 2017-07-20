var Dummy = require("../app/dummy.js");
describe("Dummy", function() {
  var dummy;

  beforeEach(function() {  
    dummy = new Dummy();
  });

  
  it("should return a non null dummy", function() {
    expect(dummy).not.toBeNull();
  });

});
