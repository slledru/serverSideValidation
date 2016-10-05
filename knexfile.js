module.exports = {
  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/validations',
    pool: {
      min: 1,
      max: 1
    }
  }
};
