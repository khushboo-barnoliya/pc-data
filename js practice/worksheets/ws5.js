

// #1
function isValidNumber(num) {

  if(isNaN(num)){
      console.log(`${num} is not a number`)
  }
  else{
    console.log(`${num} is a valid number`)
  }
}

isValidNumber(11) //"11 is a valid number"
isValidNumber("19") //"19 is a valid number"
isValidNumber("xyz") //"xyz is not a number"
isValidNumber("17.5") //"17.5 is a valid number"
isValidNumber("21F") //"21F is not a number" 



// #2
function checkInRange(num, start, end) {

  if(num >= start && num <= end){
    console.log(`${num} is between the range ${start} and ${end}`)
  }
  else{
    console.log(`${num} is outside the range ${start} and ${end}`)    
  }
}

checkInRange(15,11,30) //"15 is between the range 11 and 30"
checkInRange(20,34,51) //"20 is outside the range 34 and 51"








// #3
function findTriangleType(side1, side2, side3) {

  if((side1 == side2) && (side1 == side3)){
    console.log(`Equilateral triangle.`)
  }
  else if ((side1 == side2) || (side2 == side3) || (side1 == side3)){
    console.log(`Isosceles triangle.`)
  }
  else{
    console.log(`Scalene triangle.`)
  }
}

findTriangleType(12,12,12) //"Equilateral triangle."
findTriangleType(20,20,31) //"Isosceles triangle."
findTriangleType(5,4,3) //"Scalene triangle."





// #4
function findLargest(num1, num2, num3) {

  if(num1 > num2 && num1 > num3){
    console.log(`${num1} is the largest number`)
  }
  else if (num2 > num3){
    console.log(`${num2} is the largest number`)
  }
  else{
    console.log(`${num3} is the largest number`)
  }
}

findLargest(21,45,13) //"45 is the largest number"
findLargest(34,18,52) //"52 is the largest number"
findLargest(64,11,11) //"64 is the largest number"





// #5
function findDaysInMonth(month, year) {

  if(month < 1 || month > 12){
    console.log(`Invalid Month of value ${month}`)
    return;
  }

  if(month ==2){
    if(isLeapYear(year)){
       console.log(`The Month has 29 days`)    
    }
    else{
       console.log(`The Month has 28 days`)    
    }
  }
  else if(month == 4 || month == 6 || month == 9 || month== 11){
     console.log(`The Month has 30 days`)    
  }
  else{
     console.log(`The Month has 31 days`)
  }
}

findDaysInMonth(2, 2012) //"The Month has 29 days"
findDaysInMonth(2, 2013) //"The Month has 28 days"
findDaysInMonth(4, 2012) //"The Month has 30 days'
findDaysInMonth(10, 2013) //"The Month has 31 days"



// #6
function evalNumbers(num1, num2, op) {

  if(op == "add"){
    console.log(`Sum of ${num1} and ${num2} is ${num1+num2}`)
  }
  else if(op == "subtract"){
    console.log(`Difference of ${num1} and ${num2} is ${num1-num2}`)
  }
  else if(op == "multiply"){
    console.log(`Product of ${num1} and ${num2} is ${num1*num2}`)
  }
  else if(op == "divide"){
    console.log(`Division of ${num1} and ${num2} is ${num1/num2}`)
  }
  else if(op == "modulus"){
    console.log(`Modulus of ${num1} and ${num2} is ${num1%num2}`)
  }
  else{
    console.log(`${op} is an invalid operation`)
  }
}

evalNumbers(15,10,"add") //"Sum of 15 and 10 is 25"
evalNumbers(20,8,"subtract") //"Difference of 20 and 8 is 12"
evalNumbers(12,4,"multiply") //"Product of 12 and 4 is 48"
evalNumbers(28,7,"divide") //"Division of 28 and 7 is 4"
evalNumbers(22,3,"modulus") //"Modulus of 22 and 3 is 1"
evalNumbers(31,3,"square") //"square is an invalid operation"




// #7
function findLargest(num1, num2) {

  if(num1 > num2){
    console.log(`${num1} is the largest number`)
  }
  else if (num2 > num1){
    console.log(`${num2} the largest number`)
  }
  else{
    console.log(`${num1} is equal to ${num2}`)
  }
}

findLargest(21,45) //"45 the largest number"
findLargest(34,18) //"34 is the largest number"
findLargest(41,41) //"41 is equal to 41"





// #9
function printEven(arr) {
  for (var i=0;i<arr.length;i++){
    if(arr[i]%2==0){
      console.log(arr[i]); //print even number
    }  
  }
}
var arr = [13,23,12,45,22,48,66,100]

printEven(arr) //12 22 48 66 100




// #10
function numPower(num,pow) {
  var res=1; //return 1 for pow=0
  for(var i=0;i<pow;i++){
     res=res*num;
  }
  return res;
}
console.log(numPower(4,3)); //64
console.log(numPower(16,2)); //256





// #11
function digitCount(num) {
  var count=0; //return 1 for pow=0
  while(num!=0){
    num=Math.floor(num/10);
    count++;
  }
  return count;
}
console.log(digitCount(8367)); //4
console.log(digitCount(563349)); //6




// #12
var arr = [2, 45, 3, 67, 34, 567, 34, 345, 123];  
var largest = arr[0];
for(var i=0;i<arr.length;i++){
   largest = arr[i]>largest ? arr[i]:largest; //Check largest number
}
console.log(largest) //567