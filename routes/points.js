const express = require('express');
const router  = express.Router();
const { mapsWithAssociatedPoints, getPointsByUserId } = require('../db/queries')

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM points;`)
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
          res.
          status(500)
          .json({ error: err.message });
      });
  });

  router.get("/map/:id", (req, res) => {
    mapsWithAssociatedPoints(req.params.id)
    .then(map => {
      res.json(map);
    })
    .catch(err => {
      res.
      status(500)
      .json({ error: err.message });
    });
  });

  router.get("/user/:id", (req, res) => {
    getPointsByUserId(req.params.id)
    .then(points => {
      res.json(points);
    })
    .catch(err => {
      res.
      status(500)
      .json({ error: err.message });
    });
  })

  return router;
};
