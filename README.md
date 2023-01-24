function SellTicket() {
  this.currentId = 0;
}

SellTicket.prototype.assignId = function() {
  this.currentId +=1;
  return this.currentId;
};

SellTicket.prototype.calculateCost = function {
  if(...)
}

function Ticket(movieName, movieTime, customerAge) {
  this.movieName = movieName;
  this.movieTime = movieTime;
  this.customerAge = customerAge;
}

function takeForm(event) {
  event.preventDefault()
  let movieName = document.querySelector("")
}


## Describe: Ticket()

Test: it should create a ticket object.
Code: new Ticket("Movie Name", "Movie Time", "Special")
Expected Result: ticket with moviename = "Movie Name" movietime = "Movie Time" and special = "special"

Test: it should return ticket object.
code: return this.movieName + this.movieTime + this.special
Expected Result: "movieName + movieTime + special"