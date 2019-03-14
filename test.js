import test from 'ava';

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const fs = require("fs");

var contenu;


test('Test si index.hjs contient un formulaire', t => {
	contenu = fs.readFileSync("./views/index.hjs", "UTF-8");
	var result = t.regex(contenu, /<form .*>/gmi)
	t.regex(contenu, /<form .*>/gmi)
	t.regex(contenu, /<\/form>/gmi)
		t.pass()
});

test('Test si la page ville contient bien la variable ville lors de requetes POST', t => {

	var jsonDataObj = {'ville': 'Paris'};
	var regex = new RegExp('Paris', 'gmi');
	var req = new XMLHttpRequest();
	req.open("POST", "https://stormy-lake-19285.herokuapp.com/ville", false);

	req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	req.send("ville=Paris");
	t.regex(req.responseText, regex)
	t.pass()

});



