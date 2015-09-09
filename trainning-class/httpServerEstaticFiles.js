var fs = require('fs');
var http = require('http');
var url = require('url');


var ROOT = './www';
// response == duplex
var server = http.createServer(function(request, response){
  var requestObj = url.parse(request.url, true);

	var requestPathName = requestObj.pathname;

	var localPath = ROOT + requestPathName; //www/ 

	fs.readFile(localPath, function(err, data){
		//hoisting
		var headers = {};
		if(err){
			//duplex
			response.writeHead(404, {"Content-type": "text/html"});
			response.write("<h1> Opps, arquivo não encontrado no servidor, status de resposta 404 </h1>");
			response.end();
		}
		else{
			var mimeType = mimeTypeQuery(requestPathName);
			if(mimeType)
				// lógica de negócio
        headers["Content-type"] = mimeType;
      response.writeHead(200, mimeType);				
			response.write(data);
		  response.end();	
		}
	});
});

// MIME w3c
function mimeTypeQuery(pathfile){
	var extensionValidator = pathfile.match(/[.](.*)$/);
	console.log('array match ', extensionValidator);
	if(!extensionValidator)
		return false;
	var ext = extensionValidator[1];
	return mimeTypeQuery[ext];
}

server.listen(3000, function(){
	console.log("online *3000");
});

