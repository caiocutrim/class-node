var EventEmitter = require("events").EventEmitter;

var util = require("util"); // tool box

//pseudo class
function FileEvents() {

  EventEmitter.call(this);	
	// executando o metodo a partir da instance de fileEvents
	this.init();
}
util.inherits(FileEvents, EventEmitter);

FileEvents.prototype.init = function() {
	//subscrevendo
  this.on("data", function(data){
	 console.log("the data was readed ", data);
	});	 

  this.on("data", function(data){
	 console.log("eu to recebendo mais um vez um dado doido", data);
	});	 
};


FileEvents.prototype.write = function(data) {
	// publicando
	this.emit("data", data);
};

var fileEvents = new FileEvents();

fileEvents.write("Olá eu não sou o goku");
