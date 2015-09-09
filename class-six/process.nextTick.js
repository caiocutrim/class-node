function foo(){
	console.log("foo!");
	console.log("foo 2!");
}

console.log("bar");
process.nextTick(foo);
