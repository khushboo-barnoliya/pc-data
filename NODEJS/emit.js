



var events = require("events");
var eventEmitter = new(events.EventEmitter());

var myEventHandler = () => {
  console.log("I am Aptech Student");

  eventEmitter.on("Aptech", myEventHandler);
  eventEmitter.emit("Aptech");
}