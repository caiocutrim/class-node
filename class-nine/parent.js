var exec = require('child_process').exec;

var options = {
	env: {
		number: 666
	}
}

exec('node child.js', options, function(err, stdout, stderr){
	if(err) console.log(err.code);
  console.log("stdout: \n", stdout);
  console.log("stderr: \n", stderr);
});	
