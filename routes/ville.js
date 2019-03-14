var express = require('express');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var router = express.Router();

router.post('/', function(req, res, next) {
	var description = req.body.description
	var ville = req.body.ville
	
	var authKey = "471331340428842325379x1965"
	var villeUrl = "https://geocode.xyz/"+ville+"?json=1&auth="+authKey

	var req = new XMLHttpRequest();
	req.open("GET", villeUrl, false);
	req.send(null);
	console.log(req.responseText)
	var jsonReq = JSON.parse(req.responseText)
	
	var latt = jsonReq.latt
	var longt = jsonReq.longt
	//	description = description.replace(/\n/g, "<br>");
  	res.render('ville', { ville: ville, description: description, longt: longt, latt, latt });
});

module.exports = router;
