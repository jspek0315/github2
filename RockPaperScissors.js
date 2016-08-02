var displayAlerts = false; 
var displayToConsole = true;

var promptInput = document.getElementById('userChoiceId');
promptInput.onkeydown = function(evt)
{
	if(evt.keyCode === 13)
	{
		startRockPaperScissors();
	}
}

function startRockPaperScissors()
{
	
	//Define Variables 
	var requestMsg1 = "";
	var requestMsg2 = "";
	var userInput = "";


	//Create Messages
	requestMsg1 = "Welecome to rock paper scissors\n";
	requestMsg1 += "What would you like to pick?";
	requestMsg2 = "Invalid input\n";
	requestMsg2 += "You must choose either: Rock,paper,or scissors";

	//Define functions

	function getUserInput()
	{
		var x = document.getElementsByName("userChoice");
		var str = x[0].value
		//var userVal = prompt(requestMsg1,"Rock");
		var userVal = str;
		return userVal;
	}

	function getUserInputError()
	{
		var userVal = prompt(requestMsg2,"Rock");
		return userVal;
	}


	//Obtain User Input
	userInput = getUserInput();

	computer = []

	while (userInput.toUpperCase() !== "ROCK" && userInput.toUpperCase() !== "SCISSORS" && userInput.toUpperCase() !== "PAPER" )
	{
		userInput = getUserInputError();
	}

	//Obtain Computer Input
	var computerInput = Math.floor(Math.random()* 3);
	var computerStringInput = ""; 

	//Convert computer input to string 
	switch(computerInput) {
		case 0:
			computerStringInput = "Rock"
			break;
		case 1:
			computerStringInput = "Scissors"
			break;
		case 2:
			computerStringInput = "Paper"
			break;
	}

	//Create Result Message
	var resultMsg = "";

	if (userInput.toUpperCase() === computerStringInput.toUpperCase())
	{
		resultMsg = "Game is tie.\n";
	}
	else if (computerStringInput.toUpperCase() === "ROCK" && userInput.toUpperCase() === "SCISSORS")
	{
		resultMsg = "Computer wins.\n";
	}
	else if (computerStringInput.toUpperCase() === "ROCK" && userInput.toUpperCase() === "PAPER")
	{
		resultMsg = "You win.\n";
	}
	else if (computerStringInput.toUpperCase() === "SCISSORS" && userInput.toUpperCase() === "ROCK")
	{
		resultMsg = "You win.\n";
	}
	else if (computerStringInput.toUpperCase() === "SCISSORS" && userInput.toUpperCase() === "PAPER")
	{
		resultMsg = "Computer wins.\n";
	}
	else if (computerStringInput.toUpperCase() === "PAPER" && userInput.toUpperCase() === "ROCK")
	{
		resultMsg = "Computer wins.\n";
	}
	else if (computerStringInput.toUpperCase() === "PAPER" && userInput.toUpperCase() === "SCISSORS")
	{
		resultMsg = "You win.\n";
	}
	else
	{
		resultMsg = "Error has occured\n";
	}

	var inputVals = "Computer Choice: " + computerStringInput + "\nUser Choice: " + userInput;
	var displayMsg = resultMsg + inputVals;

	
	if(displayAlerts === true)
	{
		alert(displayMsg);
	}
	
	if(displayToConsole === true)
	{
		console.log(displayMsg);
	}
	


	var gameResult = document.getElementById("gameResult");
	displayMsg = displayMsg.replace("\n","<br/>");
	displayMsg = displayMsg.replace("\n","<br/>");
	gameResult.innerHTML = displayMsg;
	
	/*var div = document.createElement('div');
	div.onclick = function()
	{
		alert("Hello");
	}
	
	document.body.appendChild(div);
	*/
}



/*
		var x = 3; 
		var s = 'Can\'t thouch this';
		var a = [7,-3,"hi",false,[7,3,1]]; 
		a[0] = 35; 
		
		function adam(){
			console.log(this)
		}
		
		var hello = document.getElementById('hello');
		hello.display = none;
		
		var o = {foo:adam,'bar':9,'ack bar': "hello"};
		
		console.log(o['ack bar'])
		
		function foo(a, b){
			return a + b;
		}
		
		var f = o.foo;
		f(); 
		
		o.foo();
		
*/
		
		/*
		for(var i= 0; i < 10; i++){
			console.log(a[i]);
		}
		
		console.log(a[4][0]);
		*/
		