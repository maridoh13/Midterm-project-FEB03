const checkUser = (req, res) => {
  if (!req.session.user_id) {
    res.redirect('/login');
  }
};

module.exports = { checkUser };
