var http = require('http');
var url = require('url');
var docRoot = './www';
var fs = require('fs');

var server = http.createServer(function(request, response){
	var requestObj = url.parse(request.url, true /*para ativar o uso de querystring*/);
  var requestPathName = requestObj.pathname; /*acessado quando a string é passada por url.parse(request.url)*/  

	var localPath = docRoot + requestPathName;
	console.log("localpath ", localPath);

	fs.readFile(localPath, function(err, data){
		var headers = {};
		if(err){
			headers["Content-type"] = "text/plain";
			response.writeHead(404, headers);
			response.write("404 file not found \n");
			response.end();
		}else{
			var mimeType = MIMEType(requestPathName);
			if(mimeType)
				headers["Content-type"] = mimeType;
			response.writeHead(200, headers);
			response.write(data);
			response.end();
		};		
	});

});

function MIMEType(filename){
	var parsed = filename.match(/[.](.*)$/);
	if(!parsed)
		return false;
	var ext = parsed[1];
	return MIMEType[ext];
}

server.listen(3000, function(){
	console.log('online na porta 3000');
});
