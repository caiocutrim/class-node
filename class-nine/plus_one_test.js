//client
var spawn = require('child_process').spawn;


var child = spawn('node', ['plus_one.js']);

setInterval(function(){
	var number = Math.floor(Math.random() * 100);

	child.stdin.write(number + '\n');

	child.stdout.once('data', function(data){
		console.log('child respondeu o ' + number + ' com ' + data);
	});
},1000);


child.stderr.on('data', function(data){
	process.stdout.write(data);
});

