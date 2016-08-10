
/*****************************Keys Example*****************/
var arr = ["First element", "Second Element","Third Element"];

var it = arr.keys();

i = it.next()

while (i.done === false)
{
	console.log(i.value);
	i = it.next();
}
/**********************************************************/
console.log("");

/*********************lastIndexOf Example******************/
var array = [2, 5, 9, 2];
console.log(array.lastIndexOf(2));     // 3
console.log(array.lastIndexOf(2, 2));  // 0
/**********************************************************/

console.log("");
/********************map & push example*********************/
var arr = [1,2,3,4,5,6];

var arr2 = []; 

arr.map(
	function(val)
	{
		arr2.push(val*2);
	}
);

console.log(arr2);
/**********************************************************/
console.log("");

/***********************pop example*************************/
var popped = arr.pop();
console.log(popped);
console.log(arr);
/**********************************************************/

/***********************for each example*************************/
var arr3 = ['Alex','bob','carlo','dogbert','eddy'];

function printFormatedElement(element1,index1,array1)
{
	console.log("The array: [" + array1 + "] at index: " + 
		index1 + " has a value of " + element1);
}

arr3.forEach(printFormatedElement);
/**********************************************************/




