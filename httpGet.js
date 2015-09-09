var http = require("http");

http.get("http://www.google.com/index.html", function(res){
	console.log("got response: ", res.statusCode);
}).on("error", function(e){
	console.log("got error ", e.message);
});
