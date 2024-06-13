// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Importing comments module
const comments = require('./comments.js');

// GET /comments
app.get('/comments', (req, res) => {
  res.json(comments.getComments());
});

// POST /comments
app.post('/comments', (req, res) => {
  const comment = req.body.comment;
  comments.addComment(comment);
  res.json(comment);
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});