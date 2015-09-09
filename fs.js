var fs = require("fs");

fs.readFile("enconding.txt", function(err, fileContent){
	if(err){
		throw err;
	}
	console.log('file content', fileContent.toString());
});
