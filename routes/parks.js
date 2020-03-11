const express = require('express');
const router  = express.Router();


module.exports = (db) => {

  router.get("/", (req, res) => {
    const user = null;

    db.query(`SELECT * FROM maps WHERE type='park';`)
    // db.query(`SELECT * FROM points WHERE type=$1;`, [parkNames])
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

