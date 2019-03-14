import test from 'ava';

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const fs = require("fs");

var contenu;


test('Test si index.hjs contient un formulaire', t => {
	
	contenu = fs.readFileSync("./views/index.hjs", "UTF-8");	
	
	t.regex(contenu, /<form .*>/gmi)
	t.regex(contenu, /<\/form>/gmi)
		t.pass()
});

test('Test si la page ville contient bien la variable ville lors de requetes POST', t => {
	
	var ville = 'Paris'
	var url = "https://stormy-lake-19285.herokuapp.com/ville" 
	var jsonDataObj = {'ville': ville};
	var regex = new RegExp(ville, 'gmi');
	
	var req = new XMLHttpRequest();
	req.open("POST", url, false);
	req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	req.send("ville="+ville);

	t.regex(req.responseText, regex)
	t.pass()
});

test('Test si la page ville n\'existe pas  lors de requetes POST', t => {
	
	var ville = 'Pakjlzcnaeoicn,ezris'
	var url = "https://stormy-lake-19285.herokuapp.com/ville"
	
	var jsonDataObj = {'ville': ville};
	var regex = new RegExp("Ville inconnus", 'gmi');
	
	var req = new XMLHttpRequest();
	req.open("POST", url, false);
	req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	req.send("ville="+ville);

	t.regex(req.responseText, regex)
	t.pass()
});



