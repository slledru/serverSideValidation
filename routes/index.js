var express = require('express');
var router = express.Router();
var knex = require('../db/knex');


/* GET home page. */
router.get('/', function(req, res, next) {
  knex('users').then(function(results){
    res.render('home', ({userlist: results}));
  })
});

router.post('/signup', function (req, res, next) {
  let userObj = req.body;
  knex('users').insert(userObj).then(function(){
    res.redirect('/')
  })
})

module.exports = router;
