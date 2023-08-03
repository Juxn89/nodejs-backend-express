const express = require('express');
const passport = require('passport')
const AuthService = require('../services/auth.service')

const router = express.Router();
const service = new AuthService();

router.get('/login', (req, res, next) => {
  res.status(200).json({
    message: 'Ok'
  })
})

router.post('/login',
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {

      const { user, token } = service.singToken(req.user)

      res.json({
        user,
        token
      })
    } catch (error) {
      next(error);
    }
  }
);

router.post('/recovery',
  async (req, res, next) => {
    try {
      const { email } = req.body;
      const response = await service.sendMail(email);

      res.json(response)
    } catch (error) {
      next(error)
    }
})

module.exports = router;