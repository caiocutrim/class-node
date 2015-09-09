var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res){
	// res é uma writable stream

	var readAbleStream = fs.createReadStream('/caminho/para/o/arquivo/do/tamanho/da/tua/sogra/aquela/gorda.js');

	readAbleStream.on('data', function(data){
		if(!res.write(data)){
			readAbleStream.pause();
		}
	});

	res.on('drain', function(){
		readAbleStream.resume();
	});

	readAbleStream.on('end', function(){
    res.end();
	});

});	

server.listen(3000, function(){
	console.log('Olha eu to aqui ó fi de rapariga http://localhost:3000');
});
