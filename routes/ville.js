var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
	var ville = req.body.ville
	var description = req.body.description
//	description = description.replace(/\n/g, "<br>");
  	res.render('ville', { ville: ville, description: description });
});

module.exports = router;
