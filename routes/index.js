const express = require('express')
const knex = require('../db/knex')
const ev = require('express-validation')
const validation = require('../validations/user')

const router = express.Router()

// GET home page.
router.get('/', (req, res, next) => {

  knex('users').then((results) => {
    res.render('home', {
      userlist: results
    })
  })

})

router.post('/login', ev(validation.login), (req, res, next) => {
  knex('users')
    .where('username', req.body.username)
    .then((results) => {
      if (results.length > 0) {
        if (results[0].password === req.body.password) {
          res.sendStatus(200)
        }
        else {
          const errors = [{
            field: 'username',
            location: 'body',
            messages: [`Entered incorrect credentials, ya dingus.`]
          }]
          const evError = new ev.ValidationError(errors, { status: 400, statusText: 'Bad Request' })
          return next(evError)
        }
      }
      else {
        const errors = [{
          field: 'username',
          location: 'body',
          messages: [`Entered incorrect credentials, ya dingus.`]
        }]
        const evError = new ev.ValidationError(errors, { status: 400, statusText: 'Bad Request' })
        return next(evError)
      }
    })
})

router.post('/signup', ev(validation.signup), (req, res, next) => {
  // Let's see if email already exists
  knex('users')
    .where('email', req.body.email)
    .then((results) => {

      if (results.length>0) {
        // Email exists already, create new ValidationError, pass to error handler with next()
        // The format of this Error object is specific so it matches the other validation errors from the Joi rules
        var errors = [
          {
            field: 'email',
            location: 'body',
            messages: ['Email already used, ya dingus.']
          }
        ]
        var evError = new ev.ValidationError(errors, { status: 400, statusText: 'Bad Request' })
        return next(evError)

      } else {
        // Email doesn't exist yet, insert & respond
        knex('users')
          .insert(req.body, '*')
          .then((rows) => {
            res.json(rows[0])
          })
      }

    })
})

module.exports = router
