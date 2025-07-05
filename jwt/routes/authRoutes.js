const express = require('express');
const router = express.Router();
const { register, login } = require('../controller/authController');
const authMiddleware = require('../middlewares/authController');

router.post('/register', register);
router.post('/login', login);
router.get('/protected', authMiddleware, (req, res) => {
  res.json({ msg: 'Access granted to protected route' });
});

module.exports = router;
