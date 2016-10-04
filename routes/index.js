var express = require('express');
var router = express.Router();


let userlist = [
  {
    username: 'SugarRay113',
    email:'sugarray113@aol.com',
    firstname: 'James',
    lastname: 'Freeman',
    password: 'markmcgrath4eva'

  },
  {
    username: 'CarolinaCoderD00D',
    email: 'mattyb@galvanize.com',
    firstname: 'Matthew',
    lastname: 'Boo',
    password: 'banjos4lifeDJ3d09'
  },
  {
    username: 'HerokuHuntress2k',
    email: 'ekope@galvanize.com',
    firstname: 'Elana',
    lastname: 'Kopelevich',
    password: '#staplebatteryhorseNINTENDO'
  },
  {
    username: 'CraiggoMYEggo',
    email: 'craig.quincy@galvanize.com',
    firstname: 'Craig',
    lastname: 'Quincy',
    password: 'password123'
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', ({userlist: userlist}));
});

router.post('/signup', function (req, res, next) {
  let userObj = req.body;
  userlist.push(userObj)
  console.log(`Here's the req.body:`, req.body);
  res.redirect('/')
})

module.exports = router;
