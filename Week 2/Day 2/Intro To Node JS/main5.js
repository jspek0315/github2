var example = require ('./main4.js');
var xml = require('xml');

console.log("Start of Main 5");

var obj = {
	x: function(a,b){
		this.foo = 9;
		return a + b;
	}	
}

obj.x(2,3); 
console.log(obj.foo);


