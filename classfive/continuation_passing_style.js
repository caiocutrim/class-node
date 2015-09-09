function SayMyName(name, callback){
	callback(name);
}


SayMyName("Caio", function(name){
	console.log("My name is ", name);
});


function write(data, callback){
	callback(data);
}

write("oi, eu sou goku", function(goku){
	console.log("goku escreveu ", goku);
});
