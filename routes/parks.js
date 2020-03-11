const express = require('express');
const router  = express.Router();
const {checkUser} = require('../public/scripts/helpers');
const {getMapByType} = require('../db/queries');



module.exports = (db) => {

  router.get("/", (req, res) => {
    // const user = req.session;
    // console.log(req.session)
    if (!req.session.userId) {
      user = null;
    } else {
      getMapByType('park')
        .then(data => {
          const parkNames = data;
          // req.session.userId = user.id;
          console.log('USER', user)
          res.render('parks', { parkNames, user });
        })
        .catch(err => {
          res.status(500)
          .json({ error: err.message });
        });
    }
  });
  return router;
};

