const myURL = new URL('https://example.org/khus#boo'); 
  
console.log("Before Change"); 
console.log(myURL.href); 
  
console.log(); 
myURL.hash = 'hboo'; 
myURL.host = 'example.com:23';
myURL.port = '3350'
  
console.log("After Change"); 
console.log(myURL.href); 