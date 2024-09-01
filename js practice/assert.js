//1
const assert = require('assert').strict;
 
try {
    assert(0)
} catch(error) {
    console.log("Error:", error)

}


//2
// const assert = require('assert').strict;

// try {
//     assert(3)
//     console.log("No Error Occurred")
// } 
// catch(error) {
//     console.log("Error:", error)
// }