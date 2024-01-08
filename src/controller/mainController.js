module.exports = {
  index: (req, res) => {
    res.render("index");
  },
  signUp: (req, res) => {
    res.render("signup");
  },
  signIn: (req, res) => {
    res.render("signin");
  },
  postSignUp: (req, res) => {
    res.send(req.body);
  },
};
