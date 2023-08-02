const express = require('express');
const passport = require('passport')
const { tokenSign } = require('../helpers/index')

const router = express.Router();

router.get('/login', (req, res, next) => {
  res.status(200).json({
    message: 'Ok'
  })
})

router.post('/login',
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {

      const user = req.user;
      const tokenPayload = {
        sub: user.id,
        role: user.role

      }

      const token = tokenSign(tokenPayload)

      res.json({
        user,
        token
      })
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;