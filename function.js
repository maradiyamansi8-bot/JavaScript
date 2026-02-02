//function
//what --> function is a block of code that performs a specific task.
//whay ---> to avoid code repetition and to make code modular and reusable.
//how ---> function keyword, name, parameters, body return, statment

//type of functions:
//function name(params){} --> function declaration
function abc() { }
//let fnc= function(){} --> arrow function --> fat arrow function 
let func1 = () => { }

function temp_cart() {
    console.log("adding producat")
}
temp_cart("laptop");
temp_cart("watch");
temp_cart("mobile");

//parameters vs argument
//parameters are the names listed in the function defination (params --> () ni andr lakheli values)
//argument are the real values passed to the function <argument --> function call karti () ni andar lakheli values)
function fullname(name) {
    console.log(`My Name is: ${name}`)
}
fullname("riddhi");
fullname("mansi");
fullname("jinal");


function fullname1(name, surname) {
    console.log(`Name:${name}  surname: ${surname}`)
}
fullname1("riddhi", "jikadra");
fullname1("mansi", "maradiya");
fullname1("jinal", "gohil");

function cart2(producat, price) { // product params
    console.log(`Adding ${producat} at ${price}`)
}
cart2("Laptop", 50000); // laptop -- args
cart2("Mac Book", 250000);
cart2("S25 ultra", 69000);

//convert into arrow function
//let fuc = () => {}
let fullname2 = (name, surname) => {
    console.log(`arrow function -- Name:${name}  surname: ${surname}`);
}
fullname2(" mansi", "maradiya");

//convert into function expression
//let fuc= function(){}
const fullname3 = function fullname1(name, surname) {
    console.log(`function expression -- Name:${name}  surname: ${surname}`)
}
fullname3("jinal", "gohil");

//defualt,rest paremeters in function
//defualt
function abcd(b = 10, price = 0) {
    console.log(b, price)
}
abcd(15);
//use case -- fees / flipkart ->platform fee

//reset 
//jyare function ma multiple argument pass krva to vafhare params banava pade chhe mate te na karvu pade to mate rest parameter use kariye chhiye (rest ---> ... jo function na parameter ni andar lakhvama aave chee)

function def(a, b, c, d, e, f, g,) {
    console.log(a, b, c, d, e, f, g)
}
def(1, 2, 3, 4, 5, 6, 7);

function def1(...name) {
    console.log(name);
}
def1("mansi", "jinal", "riddhi");

function def1(a, ...name) {
    console.log(a, name);
}
def1("mansi", "jinal", "riddhi");
//early return -->function mathi n=bhar nikalva mate
function score1(value) {
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

cart3("function expression -s25", 45000);
//function can be passed as arguments to other functions
function temp_b(fnc) {
    fnc();
}
temp_b(function fnc2() {
    console.log("First Class Function");
});

//function can be return from other functions
function abcd() {
    return function () {
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
abcd(function () {
    console.log("Hello from argument function");
});
//function abcd(){return function(){}}}abcd()()--> higher order
function abcd() {
    return function () {
        console.log("Hello from returned function");
    };
}
abcd()();


//pure vs impure function
//pure function --> function je same input par same output aape ane koi bahar na state ne modify na kare (pure fiunction --> je function bahar na state ne modify na kare)
let a = 10;
function abcd_pure() {
    console.log("Hello");
}

//impure function --> function je same input par different output aapse athava bahar na state ne modify kare(impur function --> je function bahar na state ne modify kare)
function abcd_impure() {
    a++;
    console.log();
}
//closure function
//function je potana parent function na variable ne access kari shake(return thava valo function use karshe parent function na koi variable) (function within function)
function outer() {
    let count = 0;
    function inner() {
        count++;//accessing outer(parent) function variable
        console.log(count);
    }
    return inner;
}
let fnc = outer();
fnc();

function riddhi() {
    let a1 = "mansi";
    function nidhi() {
        a1 += " jinal";
        console.log(a1);
    }
    return nidhi;
}
let fnc1 = riddhi();
fnc1();

//lexical scope --> nested function can access variables declared in their outer scope 
//Example1
function outer1() {
    let outer_var = "outer function variable";
    function inner1() {
        let inner_var = "inner function variable";
        console.log(outer_var);
        function most_inner() {
            console.log(inner_var);
            console.log(outer_var);
            let most_inner_var = "most inner function variaqble";
            function abc() {
                console.log(most_inner_var);
                console.log(inner_var);
                console.log(outer_var);
            }
            abc();
        }
        most_inner();
    }
    inner1();
}
outer1();
//Example 2
function clg() {
    let faculty = "abcd";
    function fac() {
        let student = "student abcd ";
        console.log(faculty);
        function dumb_student() {
            console.log(student);
            console.log(faculty);
        }
        dumb_student();
    }
    fac();
}
clg();

//IIFE -Immediatly Invoked Function Expression
(function () { })();

(function () {
    console.log("This Is ITFE Function")
}())

//Hosting in Function
abcde();

function abcde() {
    console.log("This is hosting function");
}

// hostedafunction1();
// let hoisttedFunction1 = function(){
//     console.log("Hosted Function Expression called")
// }

// hoistedFunction2();
// let hostedafunction2 = () =>{
//     console.log("Hoisted Arow Function Called")
// }

//Example 3
let add = (a, b) => {
    console.log(a, b);
}
add(5, 23)

//Example 6
function temp_user(name = "Guest") {
    console.log("Hello " + name);
}
temp_user();

//Example 7
function number(...numbers) {
    console.log(numbers);
}
number(1, 2, 3, 4, 5)
//Example 8
function calculateTotal(...scores) 
{ let total = 0; for (let i = 0; i <= scores.length; i++) 
    { 
        total += scores[i]; 
    } return total; 
}

function calculateTotal(...scores) 
{ 
    let total = 0; scores.forEach(function (val) 
    { 
        total = total + val; 
    });
     return total; 
}

calculateTotal(10, 20, 30, 40, 50)

let sumtotal = calculateTotal(10, 20, 30, 40, 50)

//Example 9
checkAge();
function checkAge(age){
    if(age < 18){ 
        console.log("Too Young"); 
    } 
    else 
    { console.log("Access Granted"); 

    } 
}
//
function f(){ return;}

// Example 11: Functions are first-class citizens
function greet() {
    console.log("Hello");
}
let fn = greet;
fn();


// Example 12: Assign function to variable and call it
let a = function () {
    console.log("Hello");
};
a();


// Example 13: Pass a function into another function
function abcd(val) {
    val();
}
abcd(function () {
    console.log("Hello");
});


// Example 14: Higher Order Function (function returning function)
function higherOrder() {
    return function () {
        console.log("I am returned from another function");
    };
}
higherOrder()();


// Example 15: Identify higher order function
let result = [1, 2, 3].map(function (x) {
    return x * 2;
});
console.log(result);


// Example 16: Impure function
let total = 5;
function num(n) {
    total += n;
}
num(3);
console.log(total);


// Example 17: Pure version of example 16
function pureNum(total, n) {
    return total + n;
}
let newTotal = pureNum(5, 3);
console.log(newTotal);


// Example 18: Closure example
function outer() {
    let msg = "Hello from closure";
    return function () {
        console.log(msg);
    };
}
let closureFn = outer();
closureFn();


// Example 19: Closure counter
function outerCounter() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    };
}
const counter = outerCounter();
counter();
counter();


// Example 20: IIFE conversion
(function () {
    console.log("Initialized");
})();


// Example 21: IIFE with private variable
let fun = (function () {
    let score = 0;
    return {
        getScore: function () {
            console.log(score);
        },
        setScore: function (val) {
            score = val;
        }
    };
})();
fun.getScore();
fun.setScore(10);
fun.getScore();


// Example 22: Function expression hoisting
// temp_var(); // Uncomment to see error
var temp_var = function () {
    console.log("Hello");
};


// Example 23: Function declaration hoisting
temp_var2();
function temp_var2() {
    console.log("Hello");
}
