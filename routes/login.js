const express = require('express');
const router  = express.Router();
const { getUserByEmail } = require('../db/queries')


module.exports = (db) => {

  router.get('/', (req, res) => {
    const user = null;
    res.render('login', {user});
  });


  router.post('/', (req, res) => {
    getUserByEmail(req.body.email)
      .then(user => {
        if (req.body.email === user.email){
          req.session.userId = user.id;
          res.redirect('/');
        } else {
          res.render('/login');
        }
      })
      .catch(err => {
        console.log("error", err)
        res.status(500)
        .json({ error: err.message });
      });
  });
  return router;
};



