const express = require('express');
const router  = express.Router();
const { getFavsByUserId } = require('../db/queries')


module.exports = (db) => {

  router.get('/:id', (req, res) => {
    userId = req.params.id;
    getFavsByUserId(userId)
      .then(data => {
        res.json(data);
      })

  });
  return router;
};
