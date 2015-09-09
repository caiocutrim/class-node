//normaly function
function factNormaly(n){
	var temp;
	if(n == 0) return 1;
	else{
	 temp = n;
   while((n = n - 1) - 1){
	   temp = temp * n;
	 }
	 return temp;
	}
}	


console.log(factNormaly(6));

function factNormal(n){
	if(n == 0) return 1;
	else{
		return n * factNormal(n - 1);
	}
}

console.log(factNormal(3));
//with the continuation passing style
function factCPS(n, ret){
	if(n == 0)
		ret(1);
	else
		factCPS(n - 1, function(temp){
			ret(n * temp);
		});
}

factCPS(5, function(n){
	console.log(n);
});

function sayName(name, sayname){
	return sayname(name);
}

sayName("caio", function(name){
	console.log(name);
});

// tail-recursive factorial
function factRecursiveTailDefinition(n, ret){
	return tailFact(n, 1, ret);
}

function tailFact(n, a, ret){
	if (n == 0)
		return ret(a);
	else
		return tailFact(n - 1 , n * a, ret);
}

factRecursiveTailDefinition(5, function(n){
	console.log(n);
});
