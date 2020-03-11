const express = require('express');
const router  = express.Router();
const { deletePoint, mapsWithAssociatedPoints, getPointsByUserId, addMyPoints } = require('../db/queries')

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

  router.post("/", (req, res) => {
    console.log("req body", req.body);
    // res.status(200).send('OKAY!!')

    const userId = 4;
    const mapId = 1;
    const address = req.body.address;
    const name = req.body.name;
    const lat = req.body.lat;
    const lng = req.body.lng;
    const desc = req.body.content;

    let object = {
      user_id: userId,
      map_id: mapId,
      name: name,
      address: address,
      lat: lat,
      lng: lng,
      description: desc
    };
    // 7 keyvalue pairs
    addMyPoints(object)
      .then(data => {
        res.redirect('/')
      })
      .catch(err => {
        res.
        status(500)
        .json({ error: err.message });
      });

  });


  router.post("/map/:id/delete", (req, res) => {
    console.log("DELETING", req.body);
    // res.status(200).send('OKAY!!')

    const userId = 4;
    const mapId = 1;
    const address = req.body.address;
    const name = req.body.name;
    const lat = req.body.lat;
    const lng = req.body.lng;
    const desc = req.body.content;

    let object = {
      user_id: userId,
      map_id: mapId,
      name: name,
      address: address,
      lat: lat,
      lng: lng,
      description: desc
    };
    // 7 keyvalue pairs
    deletePoint(object)
      .then(data => {
        res.redirect('/map/:id')
      })
      .catch(err => {
        res.
        status(500)
        .json({ error: err.message });
      });

  });


  // router.post('/map/:id/delete', (req, res) => {
  //   deletePoint()
  //   res.redirect('/map/:id');
  // })


  return router;
};
