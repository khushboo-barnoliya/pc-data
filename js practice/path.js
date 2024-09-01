const path = require("path");

const path1 = path.dirname("abc.txt");
console.log(path1)

const path2 = path.extname("abc.txt");
console.log(path2)

const path3 = path.isAbsolute("abc.txt");
console.log(path3)