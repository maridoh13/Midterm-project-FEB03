const express = require('express');
const router  = express.Router();
// const {checkUser} = require('../public/scripts/helpers');



module.exports = (db) => {

  router.get("/", (req, res) => {
      if (!req.session.userId) {
        res.render('create-maps', {user: null});
      }
  });
  return router;
};

