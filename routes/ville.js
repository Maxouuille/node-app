var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
	var ville = req.body.ville
	var description = req.body.description
  res.render('ville', { ville: ville, description: description });
});

module.exports = router;
