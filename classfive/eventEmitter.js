var EventEmitter = require("events").EventEmitter;

var util = require("util"); // tool box


function Calc() {
  if(!(this instanceof Calc)) return new Calc();
  EventEmitter.call(this); 
	this.init();
}

util.inherits(Calc, EventEmitter);

Calc.prototype.init = function() {
	this.on("factorial", function(number){
    var result = number;
		if(number == 0)
			console.log(1);
		else if(number < 0)
			console.log("impossible!");
		else{
			while((number = number - 1) - 1){
		    result = result * number;	
			}
			console.log(result);
		}
	});
};


Calc.prototype.calculator = function(number){
	this.emit("factorial", number);
}


var calc = new Calc();

calc.calculator(0);



