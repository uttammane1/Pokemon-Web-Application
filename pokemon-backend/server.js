const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const pokemonRoutes = require('./routes/pokemon');

require('dotenv').config();

// Initialize Express App
const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// API Routes
app.use('/api/pokemon', pokemonRoutes);

// Default Route
app.get('/', (req, res) => {
  res.send({ message: 'Pokemon Backend is running!' });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
