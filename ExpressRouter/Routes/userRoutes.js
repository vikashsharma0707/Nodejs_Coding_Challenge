const express = require('express');
const router = express.Router();

// @route    GET /api/users
router.get('/', (req, res) => {
  res.send('Get all users');
});

// @route    GET /api/users/:id
router.get('/:id', (req, res) => {
  res.send(`Get user with ID: ${req.params.id}`);
});

// @route    POST /api/users
router.post('/', (req, res) => {
  const user = req.body;
  res.send(`User created: ${JSON.stringify(user)}`);
});

// @route    PUT /api/users/:id
router.put('/:id', (req, res) => {
  res.send(`User with ID: ${req.params.id} updated`);
});

// @route    DELETE /api/users/:id
router.delete('/:id', (req, res) => {
  res.send(`User with ID: ${req.params.id} deleted`);
});

module.exports = router;
