var Refactoring = require('../app/refactoring_v2.js');
describe("Refactoring", function() {
  var refactoring;

  beforeEach(function() {
    refactoring = new Refactoring();
  });

  var properResult = 'Rental Record for martin'+
                             'Ran     3.5'+
                             'Trois Couleurs: Bleu    2'+
                         'Amount owed is 5.5'+
                         'You earned 2 frequent renter points';
  it("should return the proper result", function() {
  properResult = properResult.replace(/\s+/g,'');
  var actualResult = refactoring.statement().replace(/\s+/g,'');
    expect(actualResult).toEqual(properResult);
  });
});