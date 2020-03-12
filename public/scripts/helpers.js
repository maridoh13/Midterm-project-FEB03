const checkUser = (req, res) => {
  if (!req.session.userId) {
    user = null;
  }
};

module.exports = { checkUser };
