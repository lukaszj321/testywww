const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Trasa do wyświetlania formularza dodawania posta
router.get('/new', (req, res) => {
  res.render('admin/newPost', { title: 'Nowy Post' });
});

// Trasa do obsługi dodawania nowego posta
router.post('/new', async (req, res) => {
  const { title, summary, content } = req.body;

  try {
    await Post.create({ title, summary, content });
    res.redirect('/blog');
  } catch (error) {
    res.status(500).send('Błąd podczas tworzenia posta');
  }
});

// Trasa do wyświetlania formularza edycji posta
router.get('/edit/:id', async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (post) {
      res.render('admin/editPost', { title: 'Edytuj Post', post });
    } else {
      res.status(404).send('Post nie znaleziony');
    }
  } catch (error) {
    res.status(500).send('Błąd podczas pobierania posta');
  }
});

// Trasa do obsługi edycji posta
router.post('/edit/:id', async (req, res) => {
  const { title, summary, content } = req.body;

  try {
    await Post.update({ title, summary, content }, {
      where: { id: req.params.id }
    });
    res.redirect('/blog');
  } catch (error) {
    res.status(500).send('Błąd podczas aktualizacji posta');
  }
});

// Trasa do obsługi usuwania posta
router.post('/delete/:id', async (req, res) => {
  try {
    await Post.destroy({
      where: { id: req.params.id }
    });
    res.redirect('/blog');
  } catch (error) {
    res.status(500).send('Błąd podczas usuwania posta');
  }
});

// Middleware do sprawdzania, czy użytkownik jest zalogowany
router.use((req, res, next) => {
    if (!req.session.user) {
      return res.redirect('/login');
    }
    next();
  });
  

module.exports = router;
