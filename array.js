//Array --Hold multiple valuesz at same time
//[1, 2, 3, 4, 5]
//["Hello","a","B","C"]
//[2,"Bye","Hello",50]

//create
//define a variable = [multiple values]
let arr = [1, 2, 3, 4];

//access
//position
//access
//array_name[position]
//arr[3], arr[2], arr[10]

//modify
//array_name[position]=new value
//arr[0]=10

//Array Methods:(variable_name.method_name)
//push, pop, shift, unshift, splice. slice, reverse, sort
//push --> enter new value into array -- place it into last
arr.push(5);

//variable || function.method --> koi variable ke function in pachhal dot(.) kari ne lakho to te method kevai
//use case -- enter new products into existing product list
let beauty_product =["FaceWash","Searum","Scureb","Toner","Conditioner","Clenser"]
beauty_product.push("Shampoo")

//pop --> remove last value into array
beauty_product.pop()
//use case -- remove last product you add into your list

//shift -- remove first value into Array 
beauty_product.shift()
//use case --  remove old product automatic after sometimes

//unshift -- add value into array -- first 
beauty_product.unshift("Powder")
//use case -- add a value into top of that data you receive

//splice -- remove value into array -- specific position and specific number of values
//into() -- first index (position) , how many value you want to remove
let e = [50,60,30,40,10];
e.splice(3,2);
//use case -- select msg and remove multiple msg at on click

//slice - copy values from array -- specific position and specific number of values
//new variable = array_name.slice(start index, end index)
//start index -- include into copy
//end index -- not include into copy
let all_product=["FaceWash","Searum","Scureb","Toner","Conditioner","Clenser"];
let face_product=all_product.slice(0,3)
//use case -- copy specific data and save it into new variable
//generate a report based on date and generate a file or save the file into your local machine

//splice vs slice
//splice -- remove value into main array or modify new array
//slice -- copy valuse from main array and create a new array that hold the value that you can into

//reverse -- reverse value of array
let g = [25, 30, 35, 40, 85];
//g.reverse();
//use case -- show latest update first into your frontend

//sort -- set into assending order
let h = [50, 20, 80 , 10,40];
h.sort();
let h1=[11, 62, 3, 4,25];
let sr = h1.sort(function(a,b){
    return a - b;// ascending order
})

let h2 = [11, 62, 3, 4, 25];
let sr1 = h2.sort(function(a1,b1){
    return b1 - a1;// decending order
})