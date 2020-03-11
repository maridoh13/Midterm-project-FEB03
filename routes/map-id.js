const express = require('express');
const router  = express.Router();
const { getUserById, mapsWithAssociatedPoints, getMapNameById } = require('../db/queries');



module.exports = (db) => {

  router.get("/:id", (req, res) => {
    if(req.session.userId){
      user = req.session.userId;
      getUserById(user)
        .then(data => {
          user = data;
          res.render('create-maps', {user});
        })
    } else {
      user = null;
    }

    getMapNameById(req.params.id)
      .then(data => {
        mapName = data.name;
      })

    mapsWithAssociatedPoints(req.params.id)
      .then(map => {
        res.render('create-maps', { map, user, mapName });
      })
      .catch(err => {
        res.
        status(500)
        .json({ error: err.message });
      });
  });
  return router;
};

