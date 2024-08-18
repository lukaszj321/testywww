const express = require('express');
const router = express.Router();

// Trasa dla listy postów na blogu
router.get('/', (req, res) => {
  res.render('blog/index', { title: 'Blog', posts: [] }); // "posts" będzie tablicą z przykładowymi postami
});

// Trasa dla pojedynczego posta na blogu (opcjonalnie)
router.get('/:id', (req, res) => {
  const postId = req.params.id;
  res.render('blog/post', { title: `Post ${postId}`, postId: postId });
});

module.exports = router;
