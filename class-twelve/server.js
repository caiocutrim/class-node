var http = require('http');

var cluster = require('cluster');

var numCpus = require('os').cpus().length;

if (cluster.isMaster) {
	for(var i = 0; i < numCpus; i++){
		cluster.fork();
	}

	cluster.on("listening", function(worker){
		console.log("worker rodando com id %s", worker.process.pid);
	});

	cluster.on("disconnect", function(worker){
		console.log("worker desconectado com id %s", worker.process.pid);
	});
	
	cluster.on("exit", function(worker){
		console.log("worker  com id "+ worker.process.pid + " morreu");
	});

} else {

	http.createServer(function(req, res){
		res.writeHead(200);
		res.end("Hello, world with clusters");
	}).listen(8000);
}




