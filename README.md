# _{Application Name}_

#### By _Jacob Maier & Mitchel Gantz_

#### _A webpage for displaying options to purchase movie tickets._

## Technologies Used

* _JavaScript_
* _HTML_
* _CSS_
* _GIT_

## Description

_A webpage based around Object Oriented Programming to purches a movie ticket and total cost based on optionss selected_

## Setup/Installation Requirements

* _clone this repo_
* _Navigate to the top level of the file_
* _Open index.html in your browser window_

## Known Bugs

* _Busines logic is in progress for snack bar but no UI yet_


## License

_MIT_

Copyright (c) _2023_ _Jacob Maier & Mitchel Gantz_


let snack = new SnackBar("Pepsi", "", "");

Define: SnackBar

test: It should return a cost of 7

code: new SnackBar("Pepsi")
Expected output: 7

Define: SnackBar

test: It should return a cost of total snacks.

code: new SnackBar("Pepsi", "Skittles")
Expected output: 12

this too




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