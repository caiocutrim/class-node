var http = require('http');
var url = require('url');
var fs = require('fs');

// web server root 
var DocRoot = "./www";

var httpd = http.createServer(function(req, res){
	console.log(" request: ", req.url);

	var u = url.parse(req.url, true);
	var path =  u.pathname.split("/");
	
	var urlPathName = u.pathname;

	var urlFormated = urlPathName.replace(/[^/]+\/[.][.]/g,"");
  console.log(urlFormated); 
	var localPath = DocRoot + urlFormated.replace(/[.][.]/g, ".");
  console.log(localPath);
	console.log(" local path: ", localPath);

	fs.readFile(localPath, function(err, data){
		var headers = {};
    if(localPath == '/'){
			localPath += data;
		}
		if(err){
			headers["Content-type"] = "text/plain";
			res.writeHead(404, headers);
			res.write("404 file not found\n");
			res.end();
		} else {
			var mimeType = MIMEType(u.pathname);
      			
      // if we can't find a content type
			// let the client guess.
			if(mimeType)
				headers["Content-Type"] = mimeType;

			res.writeHead(200, headers);
			res.write(data);
			res.end();

		}
	});
});

// var MIMETypes = {
// 	"html" : "text/html",
// 	"js"   : "text/javascript",
// 	"css"  : "text/css",
// 	"txt"  : "text/plain"
// };

//cps
// mapeia extenções para tipos de media
function MIMEType(filename){
	var parsed = filename.match(/[.](.*)$/); 
	console.log('the matchers ', parsed);
	if(!parsed)
		return false;
	var ext = parsed[1];
	console.log("extension =>", ext);

	return MIMEType[ext];
}

//up the server
httpd.listen(3000, function(){
	console.log("servidor online no endereço http://localhost:3000");
});
