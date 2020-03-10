const express = require('express');
const router  = express.Router();


module.exports = (db) => {

  router.get("/", (req, res) => {
    console.log('hey')
    db.query(`SELECT * FROM points WHERE type LIKE 'park';`)
      .then(data => {
        console.log(data)
        const users = data.rows;
        // res.json({ users });
        res.render('parks', );
      })
      .catch(err => {
        res.status(500)
        .json({ error: err.message });
      });
  });
  return router;
};

