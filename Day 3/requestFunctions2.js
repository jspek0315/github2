var mainSrc = "http://localhost:8080/";

function main()
{
	//Get User ID
	var userID = getUserID();
	//Create URL 
	var requestURL = generateURL(userID);
	
	//Get JSON and Update HTML
	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() 
	{
		if (xhttp.readyState == 4 && xhttp.status == 200) 
		{
		    var txtJSON = xhttp.responseText;
			updateHTML(txtJSON);
		}
	}
	
	xhttp.open("GET", requestURL, true);
	xhttp.send();
}

function updateHTML(txtJSON)
{
	//Convert JSON to JavaScript Object
	var jsObj = JSON.parse(txtJSON);
	
	//Remove Old Images 
	removeImages();
	
	//Loop through jsObj
	for(var i=0; i < jsObj.length; i++)
	{
		var imgURL = mainSrc + "images/" +  jsObj[i].url;
		var desc = jsObj[i].description;
		
		//Create image element
		var imageNode = document.createElement("img");
		imageNode.setAttribute('src', imgURL);
		imageNode.setAttribute('title',desc);
		
		document.getElementById('divID').appendChild(imageNode);
	}
	
}

function removeImages()
{
	// Get the <ul> element with id="myList"
	var list = document.getElementById("divID");

	// As long as <ul> has a child node, remove it
	while (list.hasChildNodes()) 
	{   
		list.removeChild(list.firstChild);
	}
}
function getUserID()
{
	return document.getElementById("userID").value;
}

function generateURL(userID)
{
	var endURL = mainSrc + userID
	return endURL;
}