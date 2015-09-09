var EventEmitter = require("events").EventEmitter;

var util  = require('util');

function MyEvent() {
	if(!(this instanceof MyEvent)) return new MyEvent();
  EventEmitter.call(this); // this referencia pra my event	
}

util.inherits(MyEvent, EventEmitter);

MyEvent.prototype.write = function(data) {
	this.emit("myEvent", data);
};


var myEvent = new MyEvent();
myEvent.on("myEvent", function(data){
 console.log("message =>", data);	
});

myEvent.write("Parece que funciona mesmo!");
myEvent.write("Olá como vai, tudo bem?");
