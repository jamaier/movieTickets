// Business Logic -------

function Ticket(movieName, movieTime, special) {
  this.movieName = movieName;
  this.movieTime = movieTime;
  this.special = special;
}

Ticket.prototype.selectedTicket = function() {
  return this.movieName + " " + this.movieTime + " " + this.special;
}


// UI Logic -------

// function displayTicketDetails(event) {
//   const ticket = 
// }
