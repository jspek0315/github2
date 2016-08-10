var fs = require('fs');

var fileData = "";

function fileReadPromise(path)
{
	return new Promise
	(
		function(resolve,reject)
		{
			fs.readFile(path, 
				function (err,data) 
				{
				  if (err) 
				  {
					reject(err);
				  }
				  else
				  {
					resolve(data);
				  }
				  
				}
			);
		}
	);
}

function fileWritePromise(path,txt)
{
	return new Promise
	(
		function(resolve,reject)
		{
			fs.writeFile(path, txt, 
				function(err) 
				{
					if(err) 
					{
						reject(err);
					}
					else
					{
						resolve("The file was saved!");
					}
					
				}
			);
		  
		}
	);
}


var fp = fileReadPromise('./input.txt');

fp.then(
	function(val)
	{
		fileWritePromise('./output.txt',val.toString()).then(
			function(val)
			{
				console.log(val.toString());
			},
			function(err)
			{
				console.log(err.toString());
			}
		);
	},
	function(err)
	{
		console.log("Couldn't open file");
	}
);



console.log("Program End");