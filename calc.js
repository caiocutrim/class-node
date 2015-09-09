var calc = {};
calc.fatValidation = function(n){
	if(n == 0){
		return 1
	}
	else if (n < 0){
		return "não é possível calcular o fatorial deste número";
	}
	else{
		return n * this.fatValidation(n - 1); //recursividade
	}
}


calc.fatResolution = function(n){
	for(var i = 1, temp = []; i < n; i ++){
		temp.unshift(i);
	}

	return n + "." + temp.join(".");
};

module.exports = calc;
