const express = require('express');
const router  = express.Router();
const {checkUser} = require('../public/scripts/helpers');



module.exports = (db) => {

  router.get("/", (req, res) => {
    const user = null;
    // checkUser(req, res);

    db.query(`SELECT * FROM points WHERE type='park';`)
      .then(data => {
        const parkNames = data.rows;
        res.render('parks', { parkNames, user });
      })
      .catch(err => {
        res.status(500)
        .json({ error: err.message });
      });
  });
  return router;
};

