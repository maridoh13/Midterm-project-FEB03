const express = require('express');
const router  = express.Router();
const { getUserById, getMapsByUserId } = require('../db/queries')


// module.exports = (db) => {

//   router.get('/', (req, res) => {
//     if(req.session.userId){
//       user = req.session.userId;
//       getUserById(user)
//         .then(data => {
//           user = data;
//           res.render('profile', { user });
//         })
//     } else {
//       res.render('profile', { user: null });
//     }
//   });


//   return router;
// };

module.exports = (db) => {

  router.get("/", (req, res) => {
    if(req.session.userId){
      user = req.session.userId;
      getUserById(user)
      .then(data => {
        user = data;
      })
    } else {
      user = null;
    }
    console.log(user)

    getMapsByUserId(user)
      .then(data => {
        const listName = data

        res.render('profile', {listName, user})
      })

    // mapsWithAssociatedPoints(req.params.id)
    //   .then(map => {
    //     const mapId = req.params.id;
    //     res.render('profile', { allMapsByUser, map, user, mapId });
    //   })
      .catch(err => {
        res.
        status(500)
        .json({ error: err.message });
      });
  });
  return router;
};
