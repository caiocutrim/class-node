var spawn = require('child_process').spawn;


var child = spawn('ls', ['-la']);


child.stdout.on('data', function(data){
	console.log('dado do child :', data.toString());
});


child.on('exit', function(code){
	console.log('child process terminou com o code ', code);
	child.kill('SIGKILL');
});
