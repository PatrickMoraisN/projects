const express = require('express');
const Author = require('./models/Author');
const app = express()
const port = 3000
const STATUS_OK = 200;
const STATUS_ERROR_NOTFOUND = 404;
const messageDefault = {
  message: 'Hello, welcome to the default page!',
}
const messageNotFound = {
  message: 'Page Not Found',
}

app.get('/', async (_req, res) => {
  res.status(200).json(messageDefault)
});

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAllAuthors();
  res.status(200).json(authors)
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const authors = await Author.findAuthorById(id);

  if (!authors) return res.status(404).json(messageNotFound)
  res.status(200).json(authors)
});

app.listen(port, () => console.log(`Example app listening on port port!`));
