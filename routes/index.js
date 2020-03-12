const express = require('express');
const router  = express.Router();
const { getUserById } = require('../db/queries')


module.exports = (db) => {

  router.get('/', (req, res) => {
    if(req.session.userId){
      user = req.session.userId;
      getUserById(user)
        .then(data => {
          user = data;
          res.render('index', { user });
        })
    } else {
      res.render('index', { user: null });
    }
  });
  return router;
};



