var http = require('http');

http.createServer(function(req, res){
	// req é uma readable stream
	//res é uma writable stream
	
	res.writeHead(200, {'Content-type':'text/html'});

	res.write('<h1> Hello, world! I am learning abount streams in node!</h1>');
	
	res.end();

}).listen(3000, function(){
	console.log('eu to aqui no endereço http://localhost:3000 fi de rapariga!');
});
