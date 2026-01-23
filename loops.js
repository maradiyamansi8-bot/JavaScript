// //loops -- repeating code blocks
// // 1 2 3 4 5 6
// // for loop
// // why use for loop? when you know how many times you want to repeat a block
// // print 1 to 10-> console.log(1); console.log(2); ... console.log(10);
// // kaya thi javanu chhe --> kaya sudhi javanu chhe --> kevi rite javanu chhe
// // for (ex. 1> 50 -> increment by 1)
// //(start; end; change)
// for (let i = 1; i <= 10; i++) {
// console.log(i);
// }
// for(let i= 20; i >=10; i--){
// console.log(i)
// }

// // while loop do while loop
// // kaya thi javanu chhe --> Kaya rokavanu chhe --> Kevi rite javanu chhe
// // while (ex. 1> Hello world -> stop when condition false)
// // start
// // while(end) {
// // code
// // change
// // }
// let j = 10;
// while (j <= 20) {
// console.log("j:", j);
// j++;
// }
 
// let riddhi=1;
// do{
//     console.log(riddhi);
//     riddhi++;
// }
// while(riddhi <= 5);

//loop
// ========================================
// let k= 10;
// while(k <= 20){
//     console.log(k);
//     k++;
// }

// let a = 0;
// while (a <= 20) {
//   console.log(a);
//   a++;
// }

// let c = 30;
// while (c > 20) {
//   console.log(c);
//   c--;
// }

// let i = 0;
// while (i < 5) {
//   console.log("hello");
//   i++;
// }

// let f = 50;
// while (f <= 60) {
//   console.log(f);
//   f++;
// }

// let q = 60;
// while (q >= 50) {
//   console.log(q);
//   q--;
// }

//do while loop
// do {} while (end);
// start
// do{
// code
// change}
// while(end);
// let g = 10;
// do {
// console.log("do while:", g);
// g++;
// } while (g <= 20);

// let h = 10;
// do {
// console.log("do while: ", h);
// h--;
// } while (h >= 1);

//break
// for(let k=1; k<= 201; k++){
//     console.log(k);
//     if(k === 32){
//         break;
//     }
// }

// for(let m=1; m<=20; m++){
//     console.log(m);
//     if(m === 15){
//         break;
//     }
// }

//continue
// for(let a=1; a<=10;a++)
// {
//     if(a===50){
//         continue;
//     }
//     console.log(a);
// }

// for(let a=2; a<=20;a++)
// {
//     if(a === 50){
//         continue;
//     }
//     console.log(a)
// }

//Example 1:

// for(let i=1;i<=10;i++){
//     console.log(i)
// }

//Example2:

// let q = 10;
//  while (q >= 1) {
//   console.log(q);
//   q--;
//  }

//Example 3:
// for(let i=1; i<=20; i++){
//     if(i%2 === 0){
//     console.log(i);
//     }
// }

// Example 4:
// let i= 1;
// while(i<=15){
//     if(i%2 !==0){ 
//     console.log(i);
//     }
//     i++;
// }

//Example 5:
// for(let i=1; i<=10; i++){
//     console.log(`5 x ${i} = ${5*i}`);
// }

//Example 6:
//
// let sum = 0;
// for(let i=1; i<=100; i++){
//     // let sum =0;
//     sum = sum + i;
//     // console.log(sum);
// }
// console.log(sum);

//Example 7:
// for(let i=1; i<=50; i++){
//     if(i%3 === 0){
//         console.log(i);
//     }
// }

//Example 8:
// let num = prompt("give a number");
// for(let i=1; i <=num ; i++){
//     if(i%2 ===0){
//         console.log(i, " is even");
//     }else{
//         console.log(i, " is odd");
//     }
// }

//example 9:
// for(let i=1; i<=100; i++){
//     if(i%3 ===0 || i%5 ===0){
//         console.log(i);
//     }
// }

//Example 10:
// for(let i=1; i<=100; i++){
//     console.log(i);
//     if(i%7 ===0){
//         break;
//     }
// }

//Example 11:
// for(let i=1; i<=20; i++){
//     if(i%3 ===0){
//         continue;
//     }
//     console.log(i);

// }

//Example 12:
count = 0;
for(let i =1; i<=100; i++){
    if(i%2 ===1){
        count++;
        console.log(i)
    }
    console.log(i);
    if(count ===5){
        break;
    }
}