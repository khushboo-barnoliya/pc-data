function printAlpha(row){
  let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let pattern = '';
  for(var i = 0; i <= row; i++){
    for(var j = 0; j<=i; j++){
      pattern += alpha[j % 26]+' ';
    }
    pattern += '\n';
  }

  console.log(pattern);
}

printAlpha(25);