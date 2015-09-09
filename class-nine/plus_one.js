//disparar stdin stream
process.stdin.resume();

process.stdin.on('data', function(data){
	//octet stream ou binario
	var number;
	try{
		number = parseInt(data.toString(), 10);
    number += 1;//


		//out put the number
		process.stdout.write(number + "\n");

	}catch(err){

		process.stderr.write(err.message + "\n");
	}
});


