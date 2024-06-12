const path = require('path');

const correctUsername = "Chamindu";
const correctPassword = "12345";

const login = (req, res) => {
  const { username, password } = req.body;
  if (username === correctUsername && password === correctPassword) {
    res.status(200).json({ success: true });
  } else {
    res.status(400).json({ success: false, message: 'Username or password incorrect' });
  }
};

module.exports = {
  login,
};