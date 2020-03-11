const express = require('express');
const router  = express.Router();
const {checkUser} = require('../public/scripts/helpers');
const {getMapByType} = require('../db/queries');



module.exports = (db) => {

  router.get("/", (req, res) => {
    const user = null;
    // checkUser(req, res);
    getMapByType('restaurant')
      .then(data => {
        const restoNames = data;
        res.render('restaurants', { restoNames, user });
      })
      .catch(err => {
        res.status(500)
        .json({ error: err.message });
      });
  });
  return router;
};

