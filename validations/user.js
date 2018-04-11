var Joi = require('joi');

module.exports = {
  signup: {
    body: {
      username: Joi.string().required(),
      firstname: Joi.string().required(),
      lastname: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required()
    }
  },
  login: {
    body: {
      username: Joi.string().required(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required()
    }
  }
}
