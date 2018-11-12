var express = require('express');
var router = express.Router();

var Users = require('../models/users');
var Teachers = require('../models/teachers');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/signup', function(req, res){
  res.render('signup');

});

router.get('/login', function(req, res){
  res.render('login');

});


router.get('/adminpanel',function(req,res){
  res.render('adminpanel');
});

router.get('/signup', function(req, res){
  res.render('signup');
});

router.post('/signup', function(req, res){
  console.log('request.....', req.body);
  var user = new Users({
    username: req.body.username,
    password: req.body.password
  });
  var promise = user.save();
  promise.then((user) => {
    console.log('user signed up with values', user);
  })
});

router.post('/login', function(req, res){
  if (req.body.username && req.body.password){
  Users.findOne({
    username:req.body.username,
    password: req.body.password
  },function(err, user){
    console.log('user logged in with values:', user);
    res.redirect('/home')
  })
}
  else { console.log('Not a valid id'); }
});

router.post('/adminpanel', function(req, res){
  console.log('request', req.body);
  var teacher = new Teachers({
    id: req.body.id,
    name: req.body.name
  });
  teacher.save().then((teacher) => {
    console.log('Your new teacher is:', teacher);
    Teachers.find().exec(function(err, teachers){
      res.render('adminpanel', {teachers})
    });
  });
});

module.exports = router;



