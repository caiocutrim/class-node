var net = require('net');

var server = net.createServer();
/*
 * armazenar a mensagem dos clients via broadcast
*/
var sockets = [];


server.on('connection', function(socket){
	/**
	 * duplex stream
	 * a nossa regra de negocio
	 */
	console.log('obetendo uma nova conexao');

  sockets.push(socket);
	socket.setEncoding('utf8');


	socket.on('data', function(data){
		console.log("fulano disse :", data);

    //broadcasting
    sockets.forEach(function(anotherSocket){
			if(socket != anotherSocket){
				anotherSocket.write("alguém disse: " + data);
			}
		});
	});


	//fechar a nossa conexao
	socket.on('close', function(){
    console.log('conexao fechada');

    var index = sockets.indexOf(socket); 		
    sockets.splice(index, 1);
	});
});


server.on('error', function(err){
	console.log('error ', err.message);
});


server.on('close', function(){
	console.log('bye, bye');
});


server.listen(4001, function(){
	console.log('use o nc localhost 4001 para se conectar ao chat');
});
