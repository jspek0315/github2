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
		//var oJSON1 = JSON.parse(req.params.toString());
		//console.log(oJSON1.id);
		var id = req.params.id;
		
		dbStuff.getTweets(id).then
		(
			function(val)
			{
				console.log(val);
			},
			function(err)
			{
				console.log(err);
			}
		);
		
		
		
		res.send(id);
		
		//res.send("JASON File");
	}

);

app.use(express.static('./public'));
app.use(express.static('./files'));

app.listen(3000, 
	function () 
	{
		console.log('Server 2 is started on port 3000!');
	}
);