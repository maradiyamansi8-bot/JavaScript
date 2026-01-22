<h1>Example of var, let and const</h1>
<h2>1. var</h2>
<p><code>var</code> keyword JavaScript ma old way chhe variable declare karvano.</p>
<ul>
  <li><code>var</code> can be <b>redeclared</b> and <b>reassigned</b></li>
  <li><code>var</code> is <b>function scoped</b></li>
  <li>Block scope follow nathi karto</li>
</ul>
<pre>
var a = "temp";
var _123 = "Hello";
var $123 = "hello";
b = 24; // never recommended (auto global)
</pre>
<h2>2. let</h2>
<p><code>let</code> ES6 ma introduce thayu chhe.</p>
<ul>
  <li><code>let</code> can be <b>reassigned</b> but <b>not redeclared</b></li>
  <li><code>let</code> is <b>block scoped</b></li>
</ul>
<pre>
let temp = "abc";
</pre>
<h2>3. const</h2>
<p><code>const</code> variable ni value change kari sakay nahi.</p>
<ul>
  <li>Must be initialized at declaration time</li>
  <li>Block scoped</li>
</ul>
<pre>
const temp_const = "Hello World!!";
</pre>
<h2>Declaration and Initialization</h2>
<pre>
var d;        // declaration
var d = 12;   // declaration + initialization
d = 24;       // reassigned
d = "hello";  // reassigned again
</pre>
<h2>Scope in JavaScript</h2>
<p>JavaScript ma mainly 3 scope hoy chhe:</p>
<ul>
  <li>Global Scope</li>
  <li>Block Scope</li>
  <li>Function Scope</li>
</ul>
<h3>var Scope Example</h3>
<pre>
var f = 23;
{
  var f = 43;
  console.log(f); // 43
}
console.log(f); // 43
</pre>
<h3>let Scope Example</h3>
<pre>
let e = 23;
{
  let e = 43;
  console.log(e); // 43
}
console.log(e); // 23
</pre>
<h2>Temporal Dead Zone (TDZ)</h2>
<p>
  TDZ <code>let</code> ane <code>const</code> par lagu pade chhe,
  <code>var</code> par nahi.
</p>
<pre>
console.log(temp_b);
var temp_b = 24; // undefined (no TDZ)
</pre>
<pre>
// console.log(j);
// let j = 12; // ReferenceError (TDZ)
</pre>
<h2>Hoisting</h2>
<p>
  Hoisting ma declaration upar jai chhe pan initialization niche j rahe chhe.
</p>
<ul>
  <li><b>var</b> → hoisted as <code>undefined</code></li>
  <li><b>let</b> → hoisted but TDZ error</li>
  <li><b>const</b> → hoisted but TDZ error</li>
</ul>
<pre>
var temp_d = 12;
</pre>
<div>
  <h3>Example 1:</h3>
  <p>console.log(nm);</p>
  <p>let nm = "name";</p>
  <p>Answer or Error:Error </p>
  <p>Why:we print console before intilization & use let keyword for declare variable .</p>
</div>
<div>
  <h3>Example 2:</h3>
  <p>console.log(b);</p>
  <p>var b= "username"; </p>
  <p>Answer or Error:Answer(undefinded)</p>
  <p>Why:When we print console before intilization & use var keyword for declare variable .</p>
</div>
<div>
  <h3>Example 3:</h3>
  <p>var x = 1 </p>
  <p>{
    var x = 2
    }
  </p>
  <p>consol.log(x) ;</p>
  <p>Answer or Error:Answer(2)</p>
  <p>Why:When we use var than in console print block scope.</p>
</div>
<h3>Example 4:</h3>
<p>let a 10; </p>
<p>{
  let a = 20;
  console.log("Inside:", a);</p>
}<p>
  console.log("Outside:", a);
</p>
<p>Answer or Error:Answer(Inside: 20 Outside: 10) </p>
<p>Why:In console first print block scope after print global scope. </p>
</div>
<h1>JavaScript Data Types</h1>
<p>JavaScript ma mainly <b>2 types na data types</b> hoy chhe:</p>
<ul>
  <li><b>Primitive Data Types</b></li>
  <li><b>Non-Primitive (Reference) Data Types</b></li>
</ul>
<hr>
<h2>1. Primitive Data Types</h2>
<p>
  Primitive data types ma <b>actual value copy</b> thay chhe.
  Ek variable change karva thi bijo variable effect thato nathi.
</p>
<pre><code>
let a = 12;
let b = a;   // copy value
a = a + 3;
</code></pre>
<h3>Primitive Data Types List</h3>
<ul>
  <li>String</li>
  <li>Number</li>
  <li>Boolean</li>
  <li>Null</li>
  <li>Undefined</li>
  <li>Symbol</li>
  <li>BigInt</li>
</ul>
<h3>String</h3>
<p>String 3 rite lakhay chhe:</p>
<pre><code>
let d = "name";
d = 'username';
d = `firstname`;
</code></pre>
<h3>Number</h3>
<pre><code>
let e = 12;
e = 12.25;
</code></pre>
<h3>Boolean</h3>
<pre><code>
let f = true;
f = false;
</code></pre>
<h3>Null</h3>
<p>Null ma value manually aapvi pade chhe.</p>
<pre><code>
let g = null;
</code></pre>
<h3>Undefined</h3>
<p>Undefined default value hoy chhe, value assign na kari hoy.</p>
<pre><code>
let h;
</code></pre>
<h3>Symbol</h3>
<p>Symbol unique ane immutable value hoy chhe.</p>
<pre><code>
let u1 = Symbol("uid");
let u2 = Symbol("uid");
// u1 === u2 -> false

let obj = { uid: 1, name: "test", email: "test@test.com" };
let u3 = Symbol("uid");
obj[u3] = "101";
</code></pre>
<h3>BigInt</h3>
<p>BigInt large numbers handle karva mate use thay chhe.</p>
<pre><code>
let number = 9007199254740991;
number = number + 6;

let num2 = 900719925470991n;
num2 + 3n;
</code></pre>
<hr>
<h2>2. Non-Primitive (Reference) Data Types</h2>
<p>
  Non-primitive data types ma <b>reference copy</b> thay chhe.
  Ek variable change karva thi bijo variable par pan effect pade chhe.
</p>
<pre><code>
let temp_a = [1, 2, 3];
let temp_b = temp_a;
temp_b.pop(); // original array pan change thase
</code></pre>
<h3>Non-Primitive Types List</h3>
<ul>
  <li>Array</li>
  <li>Object</li>
  <li>Function</li>
</ul>
<h3>Array</h3>
<pre><code>
let temp_array = ["name", "age", "phone_number"];
</code></pre>
<h3>Object</h3>
<pre><code>
let obj1 = {
  name: "test",
  age: 9,
  phone_number: 558998554
};
</code></pre>
<h3>Function</h3>
<pre><code>
function name(params) {
  // function body
}
</code></pre>
<hr>
<h2>Dynamic Typing in JavaScript</h2>
<p>
  JavaScript <b>dynamically typed language</b> chhe.
  Etle ek variable alag-alag type ni value hold kari shake chhe.
</p>
<pre><code>
let temp_d = "name";   // string
temp_d = 123;         // number
temp_d = {};          // object
</code></pre>
<p>
  Aa reason thi JavaScript flexible chhe, pan large projects mate
  <b>TypeScript</b> use karvama aave chhe.
</p>
<pre><code>
// JavaScript --> TypeScript
</code></pre>
<hr>
<h2>typeof Operator</h2>
<p>
  Variable no type check karva mate <b>typeof</b> operator use thay chhe.
</p>
<pre><code>
typeof 12;        // "number"
typeof "hello";   // "string"
typeof true;      // "boolean"
</code></pre>
<h3>typeof Quirks (Confusing Cases)</h3>
<pre><code>
typeof NaN;       // "number"
typeof null;      // "object"  (JavaScript bug)
</code></pre>
<h4>Why typeof NaN is "number"?</h4>
<p>
  <b>NaN</b> no matlab chhe <i>Not a Number</i>,
  pan te ek <b>failed number operation</b> chhe,
  etle JavaScript eni type "number" j rakhe chhe.
</p>
<pre><code>
"hello" - 5;   // NaN
</code></pre>
<hr>
<h2>Type Coerction in JavaScript</h2>
<p>
  JavaScript automatic type conversion kare chhe,
  jene <b>Type Coerction</b> kahe chhe.
</p>
<h3>Examples</h3>
<pre><code>
"5" + 1;   // "51"  (string concatenation)
"5" - 1;   // 4     (string converted to number)
</code></pre>
<hr>
<h2>Comparison Operators</h2>
<h3>Loose Equality (==)</h3>
<p>
  Type convert kari ne comparison kare chhe.
</p>
<pre><code>
1 == "1";   // true
</code></pre>
<h3>Strict Equality (===)</h3>
<p>
  Value ane type banne same hoy to j true return kare chhe.
</p>
<pre><code>
1 === "1";  // false
</code></pre>
<hr>
<p><b>Conclusion:</b></p>
<ul>
  <li>JavaScript dynamically typed chhe</li>
  <li><code>typeof</code> ma thoda quirks chhe</li>
  <li>Type coercion samajhvu important chhe</li>
  <li><code>===</code> always preferred over <code>==</code></li>
</ul>
<h1>JavaScript Operators</h1>
<p>This README covers basic JavaScript operators with examples.</p>
<hr>
<h2>Comparison Operators</h2>
<ul>
  <li><strong>==</strong> : Equal to (value only, type is ignored)</li>
  <li><strong>===</strong> : Strict equal (value + type)</li>
  <li><strong>!=</strong> : Not equal (value only)</li>
  <li><strong>!==</strong> : Strict not equal (value or type)</li>
  <li><strong>&gt;</strong> : Greater than</li>
  <li><strong>&lt;</strong> : Less than</li>
  <li><strong>&gt;=</strong> : Greater than or equal to</li>
  <li><strong>&lt;=</strong> : Less than or equal to</li>
</ul>
<pre><code>
5 == "5"        // true
5 == 6          // false

5 === "5"       // false
5 === 5         // true

5 != "5"        // false
5 != 6          // true

5 !== "5"       // true
5 !== 5         // false

10 > 5          // true
5 > 10          // false

5 < 10          // true
10 < 5          // false

10 >= 10        // true
8 >= 10         // false

10 <= 10        // true
12 <= 10        // false
</code></pre>
<hr>
<h2>Assignment Operators</h2>
<ul>
  <li><strong>=</strong> : Value assignment operator</li>
  <li><strong>+=</strong> : Add value to existing value</li>
  <li><strong>-=</strong> : Subtract value from existing value</li>
  <li><strong>*=</strong> : Multiply and assign</li>
  <li><strong>/=</strong> : Divide and assign</li>
  <li><strong>%=</strong> : Gives remainder</li>
</ul>
<pre><code>
let a = 12;
a += 3;

a -= 4;
a *= 2;
a /= 2;
a %= 2;
</code></pre>
<hr>
<h2>Logical Operators</h2>
<ul>
  <li><strong>&&</strong> : AND</li>
  <li><strong>||</strong> : OR</li>
  <li><strong>!</strong> : NOT</li>
</ul>
<pre><code>
true && true     // true
false && true   // false

true || true    // true
false || true   // true
false || false  // false

!true           // false
!false          // true

!!12            // true
</code></pre>
<hr>
<h2>Unary Operators</h2>
<ul>
  <li><strong>+</strong> : Convert string to number</li>
  <li><strong>-</strong> : Negative value</li>
  <li><strong>!</strong> : Logical NOT</li>
  <li><strong>typeof</strong> : Check data type</li>
  <li><strong>++</strong> : Increment</li>
  <li><strong>--</strong> : Decrement</li>
</ul>
<pre><code>
+"5"        // 5
+"Name"     // NaN

-5

!12         // false

typeof "name"   // string

let a = 12;
a++;        // post increment
++a;        // pre increment

let b = 3;
b--;
b++;
</code></pre>
<hr>
<hr>
<h2>Ternary Operator</h2>
<p>
  Ternary operator is a short form of <strong>if-else</strong>.
  It works on a condition and returns one of two values.
</p>
<ul>
  <li><strong>Syntax :</strong> condition ? trueExpression : falseExpression</li>
</ul>
<pre><code>
12 > 13 ? console.log("true") : console.log("false");
</code></pre>
<p>
  If the condition is <strong>true</strong>, first statement will execute.<br>
  If the condition is <strong>false</strong>, second statement will execute.
</p>
<hr>
<h2>Type Checking in JavaScript</h2>
<h3>typeof Operator</h3>
<ul>
  <li><strong>typeof null</strong> returns <code>object</code> (JavaScript bug)</li>
  <li><strong>typeof []</strong> returns <code>object</code></li>
  <li><strong>typeof NaN</strong> returns <code>number</code></li>
  <li><strong>typeof</strong> is mainly used for <strong>primitive data types</strong></li>
</ul>
<pre><code>
typeof null       // "object"
typeof []         // "object"
typeof NaN        // "number"
typeof "Hello"    // "string"
</code></pre>
<hr>
<h3>instanceof Operator</h3>
<p>
  <strong>instanceof</strong> is used to check the type of <strong>reference data types</strong>.
</p>
<ul>
  <li>Checks whether an object belongs to a constructor</li>
  <li>Mainly used for arrays, objects, classes</li>
</ul>
<pre><code>
let a = [];
a instanceof Array   // true
a instanceof Object  // true
</code></pre>
<p>
  <strong>Note:</strong><br>
  Use <code>typeof</code> for <strong>primitive data types</strong><br>
  Use <code>instanceof</code> for <strong>reference data types</strong>
</p>
<div>
  <h3>Example 1</h3>
  <p>let x = 10;</p>
  <p>let y = 20;</p>
  <p>if(x>5 && y > 5){
    console.log("Both are greater than 5");
    }else{
    console.log("One or both are not greater than 5");
    }</p>
  <p>Answer: Both are greater than 5</p>
  <p>Why: x and y both are greater than 5 and && operator needs both conditions true.</p>
</div>
<div>
  <h3>Example 2</h3>
  <p>let isAdmin = true;</p>
  <p>let isLoggedIn = false;</p>
  <p>if(isAdmin || isLoggedIn){
    console.log("Acess granted");
    }else{
    console.log("Acess Denied");
    }</p>
  <p>Answer: Access granted</p>
  <p>Why: OR (||) operator executes if any one condition is true.</p>
</div>
<div>
  <h3>Example 3</h3>
  <p>let temp = 35;</p>
  <p>if(!(temp > 30)){
    console.log("Hot day");
    }else{
    console.log("Pleasant day");
    }</p>
  <p>Answer: Pleasant day</p>
  <p>Why: temp > 30 is true, NOT operator makes it false so else runs.</p>
</div>
<div>
  <h3>Example 4</h3>
  <p>let a = 0;</p>
  <p>if(a){
    console.log("Truthy value");
    }else{
    console.log("Falsy value");
    }</p>
  <p>Answer: Falsy value</p>
  <p>Why: 0 is a falsy value in JavaScript.</p>
</div>
<div>
  <h3>Example 5</h3>
  <p>let score = 78;</p>
  <p>let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";</p>
  <p>console.log("Grade:", grade);</p>
  <p>Answer: Grade C</p>
  <p>Why: Score is greater than or equal to 70.</p>
</div>
<div>
  <h3>Example 6</h3>
  <p>let points = 120;</p>
  <p>let status = points >= 100 ? "Gold" : points >= 50 ? "Silver" : "Bronze";</p>
  <p>console.log("Status:", status);</p>
  <p>Answer: Status Gold</p>
  <p>Why: Points are greater than or equal to 100.</p>
</div>
<div>
  <h3>Example 7</h3>
  <p>let loggedIn = true;</p>
  <p>let hasToken = false;</p>
  <p>let access = loggedIn && hasToken ? "Allow" : "Deny";</p>
  <p>console.log("access:", access);</p>
  <p>Answer: Deny</p>
  <p>Why: AND (&&) operator requires both conditions true.</p>
</div>
<div>
  <h3>Example 8</h3>
  <p>let a = 5;</p>
  <p>a++</p>
  <p>console.log(a);</p>
  <p>Answer: 6</p>
  <p>Why: Post-increment increases value by 1.</p>
</div>
<div>
  <h3>Example 9</h3>
  <p>let a = 8;</p>
  <p>++a</p>
  <p>console.log(a);</p>
  <p>Answer: 9</p>
  <p>Why: Pre-increment increases value before execution.</p>
</div>
<div>
  <h3>Example 10</h3>
  <p>let b = 4;</p>
  <p>let c = b++</p>
  <p>console.log(b, c);</p>
  <p>Answer: b = 5 , c = 4</p>
  <p>Why: Post-increment assigns old value first.</p>
</div>
<div>
  <h3>Example 11</h3>
  <p>let b = 4;</p>
  <p>let c = ++b</p>
  <p>console.log(b, c);</p>
  <p>Answer: b = 5 , c = 5</p>
  <p>Why: Pre-increment happens before assignment.</p>
</div>
<div>
  <h3>Example 12</h3>
  <p>let m = 10;</p>
  <p>console.log(m--)</p>
  <p>console.log(m);</p>
  <p>Answer: 10 then 9</p>
  <p>Why: Post-decrement prints value first then decreases.</p>
</div>
<div>
  <h3>Example 13</h3>
  <p>let n = 5;</p>
  <p>let result = n++ + ++n;</p>
  <p>console.log(result);</p>
  <p>Answer: 12</p>
  <p>Why: 5 + 7 = 12.</p>
</div>
<div>
  <h3>Example 14</h3>
  <p>let likes = 100;</p>
  <p>function likePost(){
    result ++likes;
    }</p>
  <p>console.log(likePost());</p>
  <p>console.log(likes);</p>
  <p>Answer: Error</p>
  <p>Why: Invalid syntax and undefined variable.</p>
</div>
<div>
  <h3>Example 15</h3>
  <p>let count = 5;</p>
  <p>if(count-- === 5){
    console.log("Matched");
    }else{
    console.log("Not Matched");
    }</p>
  <p></p>
  <p>Answer: Matched</p>
  <p>Why: Comparison happens before decrement.</p>
</div>
<h1>JavaScript Control Flow Statements</h1>
<p>
Control flow statements in JavaScript allow you to control the execution of code
based on conditions. This README explains <strong>if</strong>, <strong>if-else</strong>,
<strong>if-else if-else</strong>, and <strong>switch</strong> statements with examples.
</p>
<hr>
<h2>1. If Statement</h2>
<p>
The <strong>if</strong> statement executes a block of code only when the given condition
evaluates to <code>true</code>.
</p>
<pre><code>
// Example 1
if (12 &lt; 13) {
    console.log(true);
}
</code></pre>
<p><strong>Explanation:</strong> Since <code>12 &lt; 13</code> is true, the code runs.</p>
<pre><code>
// Example 2
if (1513) {
    console.log(true);
}
</code></pre>
<p>
<strong>Explanation:</strong> Any non-zero number in JavaScript is treated as
<code>true</code>, so this condition runs.
</p>
<pre><code>
// Example 3
if (112) {
    console.log("number");
}
</code></pre>
<p>
<strong>Explanation:</strong> Non-zero numbers are <strong>truthy</strong> values.
</p>
<hr>
<h2>2. If-Else Statement</h2>
<p>
The <strong>if-else</strong> statement runs one block if the condition is true and
another block if it is false.
</p>
<pre><code>
// Example 1
if (12 &lt; 13) {
    console.log(true);
} else {
    console.log(false);
}
</code></pre>
<pre><code>
// Example 2
if (15 &lt; 13) {
    console.log(true);
} else {
    console.log(false);
}
</code></pre>
<p>
<strong>Explanation:</strong> Since <code>15 &lt; 13</code> is false, the <code>else</code>
block executes.
</p>
<pre><code>
// Example 3
if (!12) {
    console.log("number");
} else {
    console.log("Not A Number");
}
</code></pre>
<p>
<strong>Explanation:</strong> <code>12</code> is truthy, so <code>!12</code> becomes
<code>false</code>, and the <code>else</code> block runs.
</p>
<hr>
<h2>3. If - Else If - Else Statement</h2>
<p>
This structure is used when multiple conditions need to be checked.
</p>
<pre><code>
let logedin = true;
let admin = false;

if (logedin && admin) {
    console.log("welcome admin");
} else if (logedin) {
    console.log("welcome user");
} else {
    console.log("go to login page");
}
</code></pre>
<p>
<strong>Explanation:</strong>
</p>
<ul>
    <li>If the user is logged in and is an admin → Admin message</li>
    <li>If the user is logged in but not an admin → User message</li>
    <li>If the user is not logged in → Redirect message</li>
</ul>
<hr>
<h1>JavaScript Switch Case & Early Return Pattern</h1>
<hr>
<h2>1. Switch Case Statement</h2>
<p>
The <strong>switch</strong> statement compares a given value with multiple
<code>case</code> values. When a match is found, that block of code is executed.
</p>
<h3>Example 1</h3>
<pre><code>
switch ('Today') { 
  case 'Today':
    console.log("A");
    break;
  case 'B':
    console.log("B");
    break;
  case 'C':
    console.log("C");
    break;
  default:
    console.log("D");
    break;
}
</code></pre>
<p>
<strong>Explanation:</strong><br>
<ul>
  <li><code>'Today'</code> value <code>case 'Today'</code> sathe match thase</li>
  <li>So output: <strong>A</strong></li>
  <li><code>break</code> statement switch ne stop kare che</li>
</ul>
</p>
<hr>
<h3>Example 2</h3>
<pre><code>
let day = 'Monday';

switch (day) {
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
</code></pre>
<p>
<strong>Explanation:</strong><br>
<code>day</code> ni value <strong>Monday</strong> che, etle output:
<strong>"Start of the week"</strong>
</p>
<hr>
<h2>2. Early Return Pattern</h2>
<p>
<strong>Early return</strong> pattern ma function ne jaldi return kari devay che
jethi unnecessary condition check na thay.
</p>
<h3>Example 1 (Normal if-else)</h3>
<pre><code>
function score(value) {
  if (value > 90) {
    return "Value is more than 90";
  } else if (value < 80) {
    return "Value is less than 80";
  } else if (value < 70) {
    return "Value is less than 70";
  } else if (value < 60) {
    return "Value is less than 60";
  } else {
    return "Value is equal or between 80 to 90";
  }
}
score(100);
</code></pre>
<p>
<strong>Note:</strong> Condition order important che, wrong order thi incorrect result avi sake.
</p>
<hr>
<h3>Example 2 (Early Return Pattern)</h3>
<pre><code>
function score1(value) {
  if (value > 90) return "Value is more than 90";
  if (value > 80) return "Value is less than 90";
  if (value > 70) return "Value is less than 80";
  if (value > 60) return "Value is less than 70";
  return "Value is less than or equal to 60";
}
</code></pre>
<p>
<strong>Advantages of Early Return:</strong>
<ul>
  <li>Code clean & readable bane che</li>
  <li>Less nested conditions</li>
  <li>Performance better</li>
</ul>
</p>
<hr>
<h2>Conclusion</h2>
<p>
<ul>
  <li><strong>Switch case</strong> use thay che multiple fixed values mate</li>
  <li><strong>Early return</strong> pattern logic ne simple ane efficient banave che</li>
</ul>
</p>
<h1>JavaScript Early Return Pattern</h1>
<p>
Early Return Pattern JavaScript ma function ne clean, readable ane efficient banava
mate use thay che.
</p>
<hr>
<h2>What is Early Return?</h2>
<p>
Early return etle function ma condition match thata j value return kari devi,
jethi baki na conditions check karva na pade.
</p>
<ul>
  <li>Code short bane che</li>
  <li>Readability vadhe che</li>
  <li>Nested if-else avoid thay che</li>
</ul>
<hr>
<h2>Wrong Logic Example</h2>
<pre><code>
function score(value) {
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
</code></pre>
<p>
<strong>Problems:</strong>
</p>
<ul>
  <li><code>value &lt; 80</code> pehla check thay che</li>
  <li><code>value &lt; 70</code> ane <code>value &lt; 60</code> kabhi reach nathi thata</li>
  <li>Duplicate return statements che</li>
</ul>
<hr>
<h2>Correct Early Return Pattern</h2>
<pre><code>
function score(value) {
  if (value < 60) return "Value is less than 60";
  if (value < 70) return "Value is less than 70";
  if (value < 80) return "Value is less than 80";
  if (value < 90) return "Value is less than 90";
  return "Value is more than 90";
}
</code></pre>
<p>
<strong>Why this is correct?</strong>
</p>
<ul>
  <li>Conditions low to high order ma che</li>
  <li>Ek condition true thay etle function turant return kare che</li>
  <li>No unnecessary else blocks</li>
</ul>
<hr>
<h2>Incorrect Early Return Example</h2>
<pre><code>
function score1(value) {
  if (value > 90) return "Value is less than 90";
  else if (value < 80) return "Value is less than 80";
  else if (value < 70) return "Value is less than 70";
  else if (value < 60) return "Value is less than 60";
  else return "Value is more than 90";
}
</code></pre>
<p>
<strong>Issues:</strong>
</p>
<ul>
  <li>Wrong return message</li>
  <li>Incorrect condition sequence</li>
  <li>Confusing output</li>
</ul>
<hr>
<h2>Rock Paper Scissors (Early Return)</h2>
<h3>Simple Version</h3>
<pre><code>
function rps(user, computer) {
  if (user === "rock" && computer === "scissor") return "user wins";
  if (user === "scissor" && computer === "paper") return "user wins";
  if (user === "paper" && computer === "rock") return "user wins";

  if (user === "scissor" && computer === "rock") return "computer wins";
  if (user === "rock" && computer === "paper") return "computer wins";
  if (user === "paper" && computer === "scissor") return "computer wins";

  return "It's a tie";
}
</code></pre>
<hr>
<h3>Optimized Version</h3>
<pre><code>
function rps2(user, computer) {
  if (user === computer) return "It's a tie!";

  if (
    (user === "rock" && computer === "scissor") ||
    (user === "scissor" && computer === "paper") ||
    (user === "paper" && computer === "rock")
  ) {
    return "user wins";
  }

  return "computer wins";
}
</code></pre>
<p>
<strong>Advantages:</strong>
</p>
<ul>
  <li>Short and clean code</li>
  <li>Easy to understand</li>
  <li>Best practice for interviews</li>
</ul>
<hr>
<h1>JavaScript Loops</h1>
<p>This repository demonstrates different types of loops in JavaScript with examples.</p>
<hr>
<h2>For Loop</h2>
<p>
Use a <b>for loop</b> when you know how many times you want to repeat a block of code.
</p>
<p><b>Syntax:</b></p>
<pre><code>
for (start; condition; change) {
  // code
}
</code></pre>
<p><b>Example: Print numbers from 1 to 10</b></p>
<pre><code>
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
</code></pre>
<p><b>Example: Print numbers from 20 to 10</b></p>
<pre><code>
for (let i = 20; i >= 10; i--) {
  console.log(i);
}
</code></pre>
<hr>
<h2>While Loop</h2>
<p>
Use a <b>while loop</b> when the number of repetitions is not fixed.
</p>
<p><b>Syntax:</b></p>
<pre><code>
start;
while (condition) {
  // code
  change;
}
</code></pre>
<p><b>Example: Print numbers from 10 to 20</b></p>
<pre><code>
let j = 10;
while (j <= 20) {
  console.log(j);
  j++;
}
</code></pre>
<p><b>Example: Countdown from 30 to 21</b></p>
<pre><code>
let c = 30;
while (c > 20) {
  console.log(c);
  c--;
}
</code></pre>
<p><b>Example: Print "hello" 5 times</b></p>
<pre><code>
let i = 0;
while (i < 5) {
  console.log("hello");
  i++;
}
</code></pre>
<hr>
<h2>Do While Loop</h2>
<p>
A <b>do while loop</b> runs at least once even if the condition is false.
</p>
<p><b>Syntax:</b></p>
<pre><code>
do {
  // code
  change;
} while (condition);
</code></pre>
<p><b>Example: Print numbers from 1 to 5</b></p>
<pre><code>
let riddhi = 1;
do {
  console.log(riddhi);
  riddhi++;
} while (riddhi <= 5);
</code></pre>
<p><b>Example: Print numbers from 10 to 1</b></p>
<pre><code>
let h = 10;
do {
  console.log(h);
  h--;
} while (h >= 1);
</code></pre>
<hr>
<h2>Conclusion</h2>
<ul>
  <li><b>for loop</b> → when repetition count is known</li>
  <li><b>while loop</b> → when condition-based repetition is needed</li>
  <li><b>do while loop</b> → when code must run at least once</li>
</ul>


