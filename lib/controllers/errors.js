const { Router } = require('express');
const error = require('../middleware/error');

module.exports = Router()
  .get('/teapot', (req, res, next) => {
    next({ status: 418 });
  });
