
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert(userlist[0]),
        knex('users').insert(userlist[1]),
        knex('users').insert(userlist[2]),
        knex('users').insert(userlist[3]),
      ]);
    });
};

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
