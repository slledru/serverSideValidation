const Joi = require('joi');

module.exports = {
  register: {
    body: {
      username: Joi.string().min(10),
      firstname: Joi.string().min(10),
      lastname: Joi.string().min(10),
      email: Joi.string().min(10),
      password: Joi.string().min(10)
    }
  }
}
