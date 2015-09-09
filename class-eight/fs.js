var fs = require('fs');


fs.stat('/etc/passwd', function(err, stats){
	if(err) throw err;
	console.log(stats);
	console.log('file', stats.isFile());
});
