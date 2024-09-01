const os = require('os');
 
// return the cpu architecture
console.log("CPU Architecture: " + os.arch());
 
// returns the amount of free system memory
console.log("Free Memory: " + os.freemem());
 
// return total amount of system memory
console.log("Total Memory: " + os.totalmem());

// returns the host name
console.log("Hostname: " + os.hostname());