const express = require('express');
const router  = express.Router();
const { getUserById, mapsWithAssociatedPoints } = require('../db/queries');



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

    mapsWithAssociatedPoints(req.params.id)
      .then(map => {
        console.log('map', map.name);
        console.log('user', user);
        res.render('create-maps', { map, user });
      })
      .catch(err => {
        res.
        status(500)
        .json({ error: err.message });
      });

  });
  return router;
};

