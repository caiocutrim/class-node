var EventEmitter = require('events').EventEmitter;
var util = require('util');

function EventCalc() {
	if(!(this instanceof EventCalc)) return new EventCalc();
	EventEmitter.call(this);
	this.calcFactorial();
}
// inherits every atrributes from EventEmitter
util.inherits(EventCalc, EventEmitter);

// now I can do prototypes from EventCalc
EventCalc.prototype.calcFactorial = function(){
	this.on("factorial", function(){
		console.log("Hello, world!");
	});
};

EventCalc.prototype.factorial = function() {
	this.emit("factorial");
};

var eventCalc = new EventCalc();


eventCalc.calcFactorial();
