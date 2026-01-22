//Data Types:
//Two Type Of Data Types:
//1.Primitive data Types
//copy --> real value
let a = 12;
let b = a;// a-->12
a = a + 3;
//Types: string,number.boolean,null,undefined,symbol,bigint

//2. Non Primitive Date Types(Referance Data Types)
//copy --> give referance of parent
let temp_a = [1, 2, 3];
let temp_b = temp_a;
temp_b.pop();//remove 1 value
//types: array[], objrct{}, function()

// <------------primitive Data Type---------------->
//Types: string,number.boolean,null,undefined,symbol,bigint
//string:
//'' -single quotes
// "" - double quotes
// `` - backticks
let d = "name";
d = 'username';
d = `firstname`;

//Number
let e = 12;
e = 12.25;

//Boolean
let f = true;
f = false;

//null
//you give a value
let g = null;

//undefined;
// you can't give a value , by defualt value
let h;

//symbol:
//uniquw immutable value
let u1 = Symbol("uid");
let u2 = Symbol("uid");
//check u1===u2
let obj = { uid: 1, name: "test", email: "test@test.com" }
let u3 = Symbol("uid")
obj[u3] = "101"

//bigint:
// cheak range of number Number.Max_SAFE_INTEGER
let number = 9007199254740991;
number = number + 6;
 let num2 = 900719925470991n; 
 num2 +3n 

 // <------------Non-Primitive Data Type---------------->
 //types: array[], objrct{}, function()
//array:
let temp_array = ["name", "age", "phone_number"];
let obj1 = {name: "test", age: 9, phone_number:558998554}
function name (params) {}

// Dynamic Typing
let temp_d = "name";
temp_d = 123;
temp_d = {};
// javascript --> typescript
// typeof quirks
// typeof 12
// check type of variable use --> ex. typeof NaN, typeof null, 1 + "1", 1 == "1", 1 === "1"
// why typeof NaN --> number
//NaN is a failed number operations that why that type is number
//ex."hello" 5- NaN 
//type corection
//"5" + 1
//"5" - 1

// Truthy vs Falsy Values
// 0, false, "", null, undefined, NaN, documnet.all, false
// ex. 110 check value is true and false
// ex. if(null){), js convert it into false
// ex. if(-1){}, js convert it into true
// all --> true





