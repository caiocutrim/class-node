var child_process = require('child_process');
var exec = child_process.exec;

var options = {
	timeout: 10000,
	killSignal: 'SIGKILL'
};

exec('ls', options, function(err, stdout, stderr){
  if(err) {
		console.log('opps esse cara não foi possível de ser executado :', err.code);
	}	
	console.log(stdout);
});

