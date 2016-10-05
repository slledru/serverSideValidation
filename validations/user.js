var Joi = require ('joi');

module.exports = {
  signup: {
    body:{
      username: Joi.string().required(),
      firstname: Joi.string().required(),
      lastname: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required()
    }
  }
}
