// function printAlpha(row){
//   let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   let pattern = '';
//   for(var i = 0; i <= row; i++){
//     for(var j = 0; j<=i; j++){
//       pattern += alpha[j % 26]+' ';
//     }
//     pattern += '\n';
//   }

const { cwd } = require("process");

//   console.log(pattern);
// }

// printAlpha(25);


let i, j, k;

let row = 25;
let alphaBet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

for(i = 0; i <= row; i++){
  let pattern = '';

  for(k = 0; k <= row-i; k++){
    pattern += "  ";
  }

  for(j = 0; j <= i; j++){
    pattern += alphaBet[j % 26]+' '
  }

  pattern += '\n'
  console.log(pattern);
}

console.log(__dirname);
console.log(cwd());
