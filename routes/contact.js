const express = require('express');
const router = express.Router();

// Trasa dla strony "Kontakt"
router.get('/', (req, res) => {
  res.render('contact', { title: 'Kontakt' });
});

module.exports = router;
