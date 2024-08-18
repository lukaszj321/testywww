const express = require('express');
const router = express.Router();

// Trasa dla strony głównej
router.get('/', (req, res) => {
  res.render('index', { title: 'Strona Główna' });
});

module.exports = router;
