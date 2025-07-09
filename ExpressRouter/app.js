const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

// Middleware to parse JSON
app.use(express.json());

// Use routes
app.use('/api/users', userRoutes);

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
