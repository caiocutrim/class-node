var http = require('http');


var server = http.createServer(function(req, res){
	//lembre-se req, é uma readable stream
	// e res é uma writable stream
	

	var body = '';
	// queremos obter dados com utf8 strings
	// se você não definir uma condificação, você irá receber objetos do tipo Buffer
	req.setEncoding('utf8');


	// streams dos tipo readable emitem eventos do tipo 'data' uma vez que um listener(callback)
	// é adicionado
	req.on('data', function(chunk){

		body += chunk;

	});

	// o 'end' alerta quando você obter o corpo inteiro da requisição
	// a estrutura é simples, igualmente seguida de um listener(callback)
	req.on('end', function(){
		try{
			var data = JSON.parse(body);
		}catch(err){
			res.statusCode = 400;
			return res.end('error: ' + err.message);
		}

		// retorna a escrita de algo interessante para o client;
		res.write(typeof data);
		res.end();
	});

});


server.listen(8080, function(){
	console.log("server on hair http://localhost:8080 \n use o curl localhost:8080 -d 'objeto' para ver algo interessante");
});
