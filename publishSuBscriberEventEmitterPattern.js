var EventEmitter = require("events").EventEmitter;
var util = require("util");


/**
 * this is a simple publisher subscriber event emitter pattern
 */

var Calc = function(){
	EventEmitter.call(this);
	this.init();
}

util.inherits(Calc, EventEmitter);

Calc.prototype.init = function() {
  this.on("factorial", function(number){
		var result = number;
		var formatResult = [];
		if(number == 0) 
			console.log(1);
		else if(number < 0)
			console.log("impossível de calcular o fatorial deste número");
		else{
			while((number --) - 1){
        result = result * number;
				formatResult.push(number + 1);
			}
			console.log(result,formatResult.join('.'));
		}
	});	
};

Calc.prototype.factorial = function(number) {
   this.emit("factorial", number);	
};

var calc = new Calc();

calc.factorial(5);

