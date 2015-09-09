var spawn = require('child_process').spawn;

var child = spawn('tail', ['-f', '/var/www/html/index.php']);


child.stdout.on('data', function(data){
	console.log('tail output: ', data.toString());
});


child.stderr.on('data', function(data) {
  console.log("erro ", data);	
});
