const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

router.post('/login', (req, res) => {

  const {
    email,
    password
  } = req.body;

  getUserByEmail(email)
    .then(user => {

      if (user) {
        if (bcrypt.compareSync(password, user.password)) {
          res.json({
            token: jsonwebtoken.sign({ id: user.id }, process.env.JWT_SECRET)
          });
        } else {
          res.status(401).json({ error: 'Wrong email or password. Please try again!'});
        }
      } else {
        res.status(401).json({ error: 'No account linked to this email address'});
      }
    })
    .catch(err => res.json({
      error: err
    }));
});