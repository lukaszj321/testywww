const express = require('express');
const router = express.Router();

// Trasa dla strony "Certyfikaty"
router.get('/', (req, res) => {
  res.render('certificates', { title: 'Certyfikaty' });
});

module.exports = router;
