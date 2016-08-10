var express = require('express');
var dbStuff = require('./DataBasesStuff.js');
//Here is a comment//
var app = express();

app.get('/', 
	function (req, res) 
	{
	  res.send('Week 2 Day 3');
	}
);

app.get('/newTarget', 
	function (req, res) 
	{
	  res.send("Hi I'm in target");
	}
);

app.get('/tweets/:id/',
	function(req,res)
	{
		var id = req.params.id;
		
		dbStuff.getTweets(id).then
		(
			function(val)
			{
				console.log("./public/msg.html")
				res.send(formatListHTML(val));
				dbStuff.closeDB();
			},
			function(err)
			{
				res.send("Something Went Wrong");
				console.log("Errored");
				dbStuff.closeDB();
			}
		);
			
	}

);

function formatListHTML(arrayList)
{
	var jsonObj1 = JSON.parse(arrayList);
	
	
	var htmlText = "<html><head></head><body>"; 
	htmlText += "<h1>Here is a list of tweets</h1>";
	htmlText += "<ul>"
	for(var i = 0; i < jsonObj1.length; i++)
	{
		htmlText += "<li>";
		htmlText += jsonObj1[i].toString();
		htmlText += "</li>";
	}
	
	htmlText += "</ul></body></html>"
	return htmlText; 
}

app.use(express.static('./public'));
app.use(express.static('./files'));

app.listen(3000, 
	function () 
	{
		console.log('Server 2 is started on port 3000!');
	}
);