var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res){

	var readAbleStream = fs.createReadStream('/caminho/para/o/arquivo/do/tamanho/da/tua/sogra/aquela/gorda.js');

	readAbleStream.on('data', function(data){
		res.write(data);
	});

	readAbleStream.on('end', function(){
    res.end();
	});
});	

server.listen(3000, function(){
	console.log('Olha eu to aqui ó fi de rapariga http://localhost:3000');
});
