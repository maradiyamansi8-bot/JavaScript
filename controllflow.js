//Control Flow Statements in JavaScript
// If-Else Statement (if, if else, if else-if else)
// if (condition) {})
if (12 < 13) {
    console.log(true);
}
if (1513) {
    console.log(true);
} // condition is false that why if statement not run
if (112) {
    console.log("number");
}
// if-else Statement
if (12 < 13) {
    console.log(true);
} else {
    console.log(false);
} 
if (15 < 13) {
    console.log(true);
} // condition is false that why if statement not run
else {
    console.log(false);
}
if (!12) {
    console.log("number");
} else {
    console.log("Not A Number");
}

// if-else if-else Statement
/*
if (condition) {
} else if (condition) {
} else{}
*/
let logedin = true;
let admin = false;
if (logedin && admin) {
    console.log("welcom admin")
}
else if(logedin){
    console.log("welcom user")
}
else {
    console.log("go to login page")
}

//Switch case Statement

switch ('Today') { // value--->Case value sathe match karshe
case 'Today':
console.log("A")
break; I
case 'B':
console.log("B")
break;
case 'C':
console.log("C")
break;
default:
console.log("D")
break;
}

let day = 'Monday';

switch (day) {   // value -> case value sathe match thase
  case 'Monday':
    console.log("Start of the week");
    break;
  case 'Friday':
    console.log("Almost weekend");
    break;
  case 'Sunday':
    console.log("Holiday");
    break;
  default:
    console.log("Normal day");
    break;
}

//Early Return Pattern
function score (value) {
if (value > 90) {
return "Value is more than 90";
} else if (value < 80) {
return "Value is less than 80";
} else if (value < 70) {
return "Value is less than 70";
} else if (value < 60) {
return "Value is less than 60";
} else {
return "Value is less than 60";
}
}
score (100);

function score1 (value) {
if (value > 90) return "Value is less than 90";
else if (value < 80) return "Value is less than 80";
else if (value < 70) return "Value is less than 70";
else if (value < 60) return "Value is less than 60";
else return "Value is more than 90";
}

function score2(value) {
if (value < 60) return "Value is less than 60";
else if (value < 70) return "Value is less than 70";
else if (value < 80) return "Value is less than 80";
else if (value < 90) return "Value is less than 90";
else return "Value is more than 90";
}

function rps (user, computer) {
if(user === "rock" && computer === "scissor") return "user wins";
if(user === "scissor" && computer === "paper") return "user wins";
if(user === "paper" && computer === "rock") return "user wins";
if(user === "scissor" && computer === "rock") return "computer wins"
if(user === "rock" && computer === "paper") return "computer wins"
if(user === "paper" && computer === "scissor") return "computer wins"
return "return is tie"
}

function rps2(user, computer) {
if(user === computer) return "It's a tie!";
if(user === "rock" && computer === "scissor") return "user wins";
if(user === "scissor" && computer === "paper") return "user wins";
if(user === "paper" && computer === "rock") return "user wins";
return "computer wins";
}