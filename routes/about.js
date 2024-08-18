const express = require('express');
const router = express.Router();

// Trasa dla strony "O Nas"
router.get('/', (req, res) => {
  res.render('about', { title: 'O Nas' });
});

module.exports = router;
