var Refactoring  = function() {

};

Refactoring.prototype.statement = function() {
    var customer = {
      "name": "martin",
      "rentals": [
        {"movieID": "F001", "days": 3},
        {"movieID": "F002", "days": 1},
      ]
    };

    var movies = {
      "F001": {"title": "Ran",                     "code": "regular"},
      "F002": {"title": "Trois Couleurs: Bleu",     "code": "regular"},
      // etc
    };
    let totalAmount = 0;
    let frequentRenterPoints = 0;
    let result = `Rental Record for ${customer.name}\n`;
    for (let r of customer.rentals) {
      let movie = movies[r.movieID];
      let thisAmount = 0;

      thisAmount = determineAmountForMovie(movie.code, r);

      //add frequent renter points
      frequentRenterPoints++;
      // add bonus for a two day new release rental
      if(movie.code === "new" && r.days > 2) 
      frequentRenterPoints++;

      //print figures for this rental
      result += `\t${movie.title}\t${thisAmount}\n` ;
      totalAmount += thisAmount;
    }
    // add footer lines
    result += `Amount owed is ${totalAmount}\n`;
    result += `You earned ${frequentRenterPoints} frequent renter points\n`;

    return result;
  };

  function determineAmountForMovie(movieCode, rental){
      var thisAmount = 0;
      console.info("*******rental days "+rental.days);
      switch (movieCode) {
        case "regular":
          thisAmount = 2;
          if (rental.days > 2) {
            thisAmount += (rental.days - 2) * 1.5;
          }
          break;
        case "new":
          thisAmount = rental.days * 3;
          break;
        case "childrens":
          thisAmount = 1.5;
          if (rental.days > 3) {
            thisAmount += (rental.days - 3) * 1.5;
          }
          break;
      }
      return thisAmount;
    }

  module.exports = Refactoring;