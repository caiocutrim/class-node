var net = require('net');

var server = net.createServer();

// responsavel por armazenar os dados para fazermos broadcast na nossa mine-rede
var sockets = [];


server.on('connection', function(socket){
	// duplex stream socket
	socket.setEncoding('utf8');
  console.log("obtendo uma nova conexão.");
	//armazenando no array para broacasting
	sockets.push(socket);

	socket.on('data', function(data){
		console.log('obtendo um novo dado', data);
    //broadcasting
		sockets.forEach(function(anotherSocket){
      if(socket!= anotherSocket){
				anotherSocket.write("fulano disse: " + data);
			}
		});
	});

	socket.on('close', function(){
    var index = sockets.indexOf(socket);
		sockets.splice(index, 1);
	});

});


server.on('close', function(){
	console.log('bye, bye!');
});


server.on('error', function(err){
	console.log('err', err.message);
});


server.listen(4001, function(){
	console.log('user o nc localhost 4001 para se conectar com o servidor');
});
