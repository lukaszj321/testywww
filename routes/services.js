const express = require('express');
const router = express.Router();

// Trasa dla strony "Usługi"
router.get('/', (req, res) => {
  res.render('services', { title: 'Nasze Usługi' });
});

module.exports = router;
