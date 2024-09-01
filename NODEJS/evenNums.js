
let e = "\nEven numbers";
console.log(e);

function evenNumber (limit){
  for(var i = 1; i <= limit; i++){
    if (i % 2 === 0){
      console.log(i);
    }
  }
}

evenNumber(10);

let o = "\nOdd numbers";
console.log(o);

function oddNumber (limit){
  for(var j = 1; j <= limit; j++){
    if (j % 2 !== 0){
      console.log(j);
    }
  }
}

oddNumber(10);