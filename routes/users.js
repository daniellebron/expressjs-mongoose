var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET users listing. */
router.get('/', function(req, res) {
  	//res.send('respond with a resource');
	var User = mongoose.model('User');
	User.find({}, function (err, users) {
		res.render('users', { title: 'Usuarios', users: users });
	});
});

module.exports = router;
