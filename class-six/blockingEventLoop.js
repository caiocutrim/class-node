process.nextTick(function n1(){
	//o evento kurt cobain 
	var a = 0;
	while(true){
		a ++;
	}
});

process.nextTick(function n2(){
	// não executou
	console.log("next Tick");
});

setTimeout(function timeout() {
  // não executou	
  console.log("timeout");	
},1000);

