


// const prompt=require("prompt-sync")({sigint:true});

// // #1
// function printPage(){
//   window.print();
// }
// printPage();


// // #2
// let side1 = 5;
// let side2 = 6;
// let side3 = 7;

// var finalSide = (side1 + side2 + side3) / 2;

// const area = Math.sqrt(finalSide * ((finalSide - side1) * (finalSide - side2) * (finalSide - side3)))

// console.log(area)


// // #3

// var num = Math.ceil(Math.random() * 10)
// num = parseInt(num)
// console.log(num)

// var userNum = prompt("Enter any number: ")

// if (userNum == num) {
//   console.log("Good Work")
// }
// else {
//   console.log(`You Lose! The number was ${num}`)
// }

// // // #4
// alert(document.URL)
// console.log(document.URL)
// document.write(document.URL);

// // #5
// let fileName = "khushboo.php"

// let getFileExtension = fileName.split(".").pop();
// console.log(getFileExtension);


// // #6
// const diff = (n) => {
//   // if(n <= 15){
//   //   return (n - 15)
//   // }
//   // else{
//   //   return (n - 15) * 2
//   // }
//   return n <= 15 ? 15 - n : (n - 15) * 2
// }
// console.log(diff(5))
// console.log(diff(50))



// // #7
// function sum(x,y){
//   // if(x == y){
//   //   return (x + y) * 2
//   // }
//   // else{
//   //   return x + y
//   // }
//   return x == y ? (x + y) * 2 : x + y;
// }
// console.log(sum(20, 30))
// console.log(sum(50, 50))


// // #8
// function triple(a){
//   if(a > 25){
//     return (a - 25) * 3
//   }
//   return 25 - a
// }
// console.log(triple(5))
// console.log(triple(30))

// #9
// function pair(x, y){
//   // if((x == 50 || y == 50) || (x + y == 50)) return true
//   // else return false
//   if((x == 50 || y == 50) || (x + y == 50)) return true
//   else return false
// }
// console.log(pair(50, 50))
// console.log(pair(20, 30))
// console.log(pair(50, 20))
// console.log(pair(10, 50))
// console.log(pair(10, 10))

// // #10
// function sumArray(num){
//   return num[0] + num[1] + num[2]
// }
// console.log(sumArray([40, 25, 30]));
// console.log(sumArray([2, 2, 2])); 