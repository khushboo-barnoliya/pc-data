function dollPattern(height){
  const head = '~O~';
  const body = '/|\\';
  const legs = '/ \\'

  const top = ' '.repeat(height - 3);
  const doll = [
    top + head,
    top + body,
    top + legs
  ]

  const fullBody = doll.join('\n');
  return fullBody + '\n';

}

const height = 3;
console.log(dollPattern(height));