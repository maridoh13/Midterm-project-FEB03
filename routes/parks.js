const express = require('express');
const router  = express.Router();
const {checkUser} = require('../public/scripts/helpers');
const {getMapByType} = require('../db/queries');



module.exports = (db) => {

  router.get("/", (req, res) => {
    const user = null;
    // checkUser(req, res);
    getMapByType('park')
      .then(data => {
        const parkNames = data;
        res.render('parks', { parkNames, user });
      })
      .catch(err => {
        res.status(500)
        .json({ error: err.message });
      });
  });
  return router;
};

