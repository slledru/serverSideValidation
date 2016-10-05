var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var validate = require('express-validation');
var validation = require('../validations/register.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('users').then(function(results) {
    res.render('home', ({
      userlist: results
    }));
  })
});

router.post('/signup', validate(validation.register), function(req, res, next) {
  let userObj = req.body;

  knex('users')
    .where('username', userObj.username)
    .first()
    .then(function(exists) {
        if (exists) {
          knex('users').then(function(results) {
            res.render('home', ({
              userlist: results,
              user: req.body,
              error: 'Username already taken.'
            }));
          })
        } else {
          knex('users').insert(userObj).then(function() {
            res.redirect('/')
          })
        }
    })
})

module.exports = router;
