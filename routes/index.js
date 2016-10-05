var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var validate = require('express-validation')
var validation = require('../validations/user')

/* GET home page. */
router.get('/', function(req, res, next) {
 knex('users').then(function(results) {
  res.render('home', ({
   userlist: results
  }));
 })
});

router.post('/signup', validate(validation.signup), function(req, res, next) {
 knex('users')
  .where('email', req.body.email)
  .first()
  .then((result) => {
   if (result) {
     knex('users')
      .then((results) => {
        res.render('home', ({
          error: 'Duplicate email. Ya dumb.',
          userlist: results,
          user: req.body
        }))
      })
   } else {
    let userObj = req.body;
    knex('users').insert(userObj).then(function() {
     res.redirect('/')
    })
   }
  })
})

module.exports = router;
