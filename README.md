# A quick server-side validation codealong.

What's included here: A one-page app that lets you register a new user and that displays a table containing previously registered users. These users are persisted in a postgres database. There is validation on the form, but no server-side validation.

What you need to create: server-side validation. If the form validation is somehow circumvented, any attempt to register a user with invalid credentials should be caught and
handled by the server.


Let's get it running!

Installation:

1. Clone this repo
2. $ npm install
3. $ createdb validations
4. $ knex migrate:latest
5. $ knex seed: run
6. $ nodemon
