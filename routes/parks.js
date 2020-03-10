const express = require('express');
const router  = express.Router();


module.exports = (db) => {

  router.get("/", (req, res) => {
    console.log('hey')
    db.query(`SELECT * FROM points WHERE type='park';`)
    // db.query(`SELECT * FROM points WHERE type=$1;`, [parksName])
      .then(data => {
        const parkNames = data.rows;
        res.render('parks', { parkNames });
      })
      .catch(err => {
        res.status(500)
        .json({ error: err.message });
      });
  });
  return router;
};

