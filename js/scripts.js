// Business Logic -------

function Ticket(movieName, movieTime, special) {
  this.movieName = movieName;
  this.movieTime = movieTime;
  this.special = special;
}

Ticket.prototype.selectedTicket = function() {
  return this.movieName + " " + this.movieTime + " " + this.special;
}

Ticket.prototype.calculateCost = function() {
   let cost = 10;
    if ( this.special === "matinee") {
        return cost += 5.00;
    }else if(this.special === "youth") {
        return cost += 7.00;
    }else if (this.special === "senior") {
        return cost += 4.00;
    }
}

// UI Logic -------

function handleFormSubmission(event){
    event.preventDefault();
    const selectedMovieName = document.querySelector("select#movie-name").value; // alt document.getElementById("movie-name").value;
    const selectedMovieTime = document.querySelector("select#movie-time").value;
    const selectedSpecial = document.querySelector("select#special").value;
    let newTicket = new Ticket(selectedMovieName, selectedMovieTime, selectedSpecial);
    console.log(newTicket.selectedTicket());
    console.log(newTicket.calculateCost());
}

window.addEventListener("load", function() {
  document.getElementById("movie-tickets").addEventListener("submit", handleFormSubmission);
});

// function displayTicketDetails(event) {
//   const ticket = 
// }
