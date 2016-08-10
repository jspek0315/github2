function displayImages(rawJSONdata)
{
	
	if(rawJSONdata !== "")
	{
		var imageArr = JSON.parse(rawJSONdata);
		
		clearImages();
		
		for(var i = 0; i < imageArr.length; i++)
		{
			console.log("imageArr[" + i + "]" + " : " + imageArr[i]);
			
			
			var imageNode = document.createElement("img");

			imageNode.setAttribute('src', "http://localhost:8080/images/" + imageArr[i].url);
			imageNode.setAttribute('title',imageArr[i].description);
			document.getElementById("divID").appendChild(imageNode);
		}
	}
	
	
}

function clearImages()
{
	var myNode = document.getElementById("divID");
	var fChild = myNode.firstChild;
	
	while(fChild)
	{
		myNode.removeChild(fChild);
		fChild = myNode.firstChild; 
	}
}

function getUser()
{
	var userID = "";
	
	userID = document.getElementById("userID").value;
	return userID;
}

function generateRequestURL(userID)
{
	var endURL = "http://localhost:8080/";
	endURL += userID;
	
	return endURL;
}

function getJSON()
{	
	//Get User ID
	var userID = getUser();
	
	//Generate URL Ajax request
	var requestURL = generateRequestURL(userID);
	
	
	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() 
	{
		if (xhttp.readyState == 4 && xhttp.status == 200) 
		{
			//document.getElementById("output").innerHTML = xhttp.responseText;
			displayImages(xhttp.responseText);
			
		}
	}

	xhttp.open("GET", requestURL, true);
	xhttp.send();
	
	
}

/*

*/

