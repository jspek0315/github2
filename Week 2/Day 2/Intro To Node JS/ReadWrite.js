console.log("Program Started");

var fs = require('fs');

var fileData = "";
//
fs.readFile('./input.txt', 
	function (err,data) 
	{
	  if (err) 
	  {
		return console.log(err);
	  }
	  fileData = data;
	  console.log(fileData.toString());
	  fs.writeFile("./output.txt", fileData.toString(), 
		function(err) 
	    {
			if(err) {
				return console.log(err);
			}

			console.log("The file was saved!");
		}
	  ); 
	}
);


console.log("Program End");