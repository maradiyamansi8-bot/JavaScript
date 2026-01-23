//function
//what --> function is a block of code that performs a specific task.
//whay ---> to avoid code repetition and to make code modular and reusable.
//how ---> function keyword, name, parameters, body return, statment

//type of functions:
//function name(params){} --> function declaration
function abc(){}
//let fnc= function(){} --> arrow function --> fat arrow function 
let func1 = () => {}

function temp_cart(){
    console.log("adding producat")
}
temp_cart("laptop");
temp_cart("watch");
temp_cart("mobile");

//parameters vs argument
//parameters are the names listed in the function defination (params --> () ni andr lakheli values)
//argument are the real values passed to the function <argument --> function call karti () ni andar lakheli values)
function fullname(name){
    console.log(`My Name is: ${name}`)
}
fullname("riddhi");
fullname("mansi");
fullname("jinal");


function fullname1(name,surname){
    console.log(`Name:${name}  surname: ${surname}`)
}
fullname1("riddhi","jikadra");
fullname1("mansi","maradiya");
fullname1("jinal","gohil");

function cart2 (producat, price) { // product params
console.log(`Adding ${producat} at ${price}`)
}
cart2("Laptop", 50000); // laptop -- args
cart2("Mac Book", 250000);
cart2("S25 ultra", 69000);

//convert into arrow function
//let fuc = () => {}
let fullname2 =(name,surname) => {
    console.log(`arrow function -- Name:${name}  surname: ${surname}`);
}
fullname2(" mansi","maradiya");

//convert into function expression
//let fuc= function(){}
const fullname3 =function fullname1(name,surname){
    console.log(`function expression -- Name:${name}  surname: ${surname}`)
}
fullname3("jinal","gohil");

//defualt,rest paremeters in function
//defualt
function abcd(b=10,price=0){
    console.log(b,price)
}
abcd(15);
//use case -- fees / flipkart ->platform fee

//reset 
//jyare function ma multiple argument pass krva to vafhare params banava pade chhe mate te na karvu pade to mate rest parameter use kariye chhiye (rest ---> ... jo function na parameter ni andar lakhvama aave chee)

function def(a,b,c,d,e,f,g,){
    console.log(a,b,c,d,e,f,g)
}
def(1,2,3,4,5,6,7);

function def1(...name){
    console.log(name);
}
def1("mansi","jinal","riddhi");

function def1(a,...name){
    console.log(a,name);
}
def1("mansi","jinal","riddhi");
//early return -->function mathi n=bhar nikalva mate
function score1 (value) {
if (value > 90) return "Value is less than 90";
else if (value < 80) return "Value is less than 80";
else if (value < 70) return "Value is less than 70";
else if (value < 60) return "Value is less than 60";
else return "Value is more than 90";
}
let result = score1(80);
console.log(result);
//first class function and their types:
//function can be treated as variables
//let temp_a = function(){} -first class function
const cart3 = function (producat, price) { // product params
console.log(`Adding ${producat} at ${price}`);
};

cart3("function expression -s25",45000);
//function can be passed as arguments to other functions
function temp_b(fnc){
fnc();
}
temp_b(function fnc2(){
    console.log("First Class Function");
});

//function can be return from other functions
function abcd(){
    return function(){
        console.log("function return other function")
    };
}
//abcd();
abcd()();//call a function that return other function

//higher order function(HOF)
//function that taker another function as an an argument or returns a function as a result (eva function je return kare ek function athva acept kare ek function params ma)
//function abcd(val){(val);} --> abcd(function(){console.log("hello")})
//function abcd(val){} --> higher order function 
function abcd(val) {
    val(); // call the function passed as argument
}
abcd(function() {
    console.log("Hello from argument function");
});
//function abcd(){return function(){}}}abcd()()--> higher order
function abcd() {
    return function() {
        console.log("Hello from returned function");
    };
}
abcd()();