var http = require("http");

var querystring = require("querystring");

var post = querystring.stringify({
	"msg": "tio google, por favor me dê um real de pão"
});

var options = {
	hostname:"www.google.com",
	port:80,
	method:"POST",
	path:"/io",
	headers:{
		"Content-type":"application/x-www-forms-urlenconded",
		"Content-length": post.length
	}
}
var request = http.request(options, function(res){
	console.log("STATUS =>", res.statusCode);
	console.log("HEARDER =>", JSON.stringify(res.headers));

	res.setEncoding("utf8");

	res.on("data", function(data){
		console.log("BODY ", data);
	});
	
	res.on("end", function(){
		console.log("response ended");
	});
});

request.write(post);

request.end();
