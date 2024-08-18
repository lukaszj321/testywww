const express = require('express');
const router = express.Router();

// Strona logowania
router.get('/login', (req, res) => {
  res.render('auth/login', { title: 'Logowanie' });
});

// Obsługa logowania
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  // Prosta weryfikacja (w prawdziwej aplikacji użyj bazy danych)
  if (username === 'admin' && password === 'admin123') {
    req.session.user = username;
    res.redirect('/admin/new');
  } else {
    res.redirect('/login');
  }
});

// Obsługa wylogowania
router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/login');
  });
});

module.exports = router;
