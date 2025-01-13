// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');

router.post('/register', async (req, res) => {
    try {
      const { names, email, password, lastNames } = req.body;
  
      // Validar datos antes de llamar a la función de registro
      // ...
  
      const userId = await userModel.registerUser({ names, email, password, lastNames });
      res.json({ success: true, userId });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ success: false, error: error.message });
    }
  });

router.get('/all', async (req, res) => {
  try {
    const usuarios = await userModel.getAllUsers();
    res.json(usuarios);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
