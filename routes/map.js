const express = require('express');
const router  = express.Router();
const {checkUser} = require('../public/scripts/helpers');
const { getMapByType, getUserById } = require('../db/queries');



module.exports = (db) => {

  router.get("/:id", (req, res) => {
    if(req.session.userId){
      user = req.session.userId;
      getUserById(user)
        .then(data => {
          user = data;
          res.render('create-maps', {user});
        })
    } else {
      res.render('create-maps', {user: null});
    }

  });
  return router;
};

