const url  = require("url");
var link = 'http://localhost:2000/default.htm?name=Khushboo&age=23';

var i = url.parse(url, true);
var idata = i.query;
console.log(idata.name + " " + idata.age);

