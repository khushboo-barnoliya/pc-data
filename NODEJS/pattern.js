function printPattern(row){
  for(var i = 1; i <= row; i++){
    var pattern = '';
  

  for(var j = 1; j <= row - i; j++){
    pattern = ' ';
  }

  for(var k = 1; k <= i * 2 - 1; k++){
    pattern += '* ';
  }
  console.log(pattern);
  }
}
const numOfRow = 10;

printPattern(numOfRow);


