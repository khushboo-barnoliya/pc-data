const { StringDecoder } = require("string_decoder"); 
  
const decoder = new StringDecoder("utf-8"); 
  
const text = Buffer.from("Khushboo", "utf-8"); 
let decoText = decoder.write(text); 
console.log("Decoded Text:", decoText)