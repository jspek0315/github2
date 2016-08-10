var fs = require('fs');
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Default Webpage');
});

app.get('/SaveMSG',
	function(req,res)
	{
		console.log("Navigating to SaveMSG");
		var htmlText = "Missing HTML Location";
		
		var fp = fileReadPromise("./web/msg.html");
		
		fp.then(
			function(val)
			{
				res.send(val.toString());
			},
			function(err)
			{
				res.send(err);
			}
		)
		//res.send('Navigated to SaveMSG');
		//res.sendFile('msg.html',')
	}
	
);

app.use(express.static('./web'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

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

