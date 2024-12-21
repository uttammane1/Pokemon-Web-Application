const express = require('express');
const Pokemon = require('../models/Pokemon');
const router = express.Router();

// Fetch all Pokemon
router.get('/', async (req, res) => {
  try {
    const pokemons = await Pokemon.find();
    res.json(pokemons);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Pokemon' });
  }
});

// Create a new Pokemon
router.post('/', async (req, res) => {
  try {
    const { id, name, types, sprite } = req.body;
    const newPokemon = new Pokemon({ id, name, types, sprite });
    await newPokemon.save();
    res.status(201).json(newPokemon);
  } catch (error) {
    res.status(400).json({ error: 'Failed to save Pokemon' });
  }
});

module.exports = router;
