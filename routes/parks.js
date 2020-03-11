const express = require('express');
const router  = express.Router();
const {checkUser} = require('../public/scripts/helpers');
<<<<<<< HEAD
const {getMapByType} = require('../db/queries');
=======
>>>>>>> 2a517e64d406a63c8692f00c2baed66b678505b8



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

