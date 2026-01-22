//var ,let and const
//var
var a = "temp"
var _123 = "Hello";
var $123 = "hello";
b = 24;//never uses
//let
let temp = "abc";
//const
const temp_const = "Hello World!!"

//declaration and initilization
var d;//declare
var d = 12;//declare and intitialize for first time
//var ni value direct window mathi add thai sake
//var can be redeclares and reassigened
//var is a functional scope
d = 24;//reassigened
d = "hello world!!"//redeclare

// temp_const="hello mansi!!"

//scope(globel,Block,functional)
//print variabels in console using var keyword
var f = 23; //global scope
{
   var f = 43;//block scope
   console.log("block Scope" + f);
}
function abc() {//sunctional scope
   var f = 30;
   console.log("functional scope" + f);
}
abc();
console.log(f);

//print variabels in console using let keyword
let e = 23; //global scope
{
   let e = 43;//block scope
   console.log("block Scope " + e);
}
function abc() {//sunctional scope
   let e = 30;
   console.log("functional scope " + e);
}
abc();
console.log(e);

//Temporal Dead Zon(TDZ)
//TDZ not Working On var
console.log(temp_b);
var temp_b = 24;//on var there is no TDZ

//console.log(j);
//let j = 12;

//Hosting Imapact
//Hosting ====> When your create a variable into js that break into two part first is declare part that go to up and there intialization part that go down
var temp_d = 12;
//var temp_d = undefined;==> that go to up
//temp_d = 12; ==>that go to down(means stuck into line 64)
// if you use console.log before intialization that give you undefined;
let temp_d_let = 24;
//let variable not use before intialization
//if you use console.log before intialization that give you error;
//Hosting Impace on var,let,cont
/* 
var --> hoist --> undefined
let --> hoist --> error
const --> hoist --> error
*/
//Example 1
// console.log(nm);
// let nm = "name";

//Example 2
// console.log(g);
// var g= "username";

//Example 3
var x = 1;
{
   var x = 2
}
console.log(x);

//Example 4
let M = 10;
{
   let M = 20;
   console.log("Inside:", M);
}
console.log("Outside:", M);

//Example 5
// const person = {name: "demo"};
// console.log()
// person.name= "user";
// person = {};