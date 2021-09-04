const express = require('express');
const Author = require('./models/Author');
const app = express()
const port = 3000
const messageDefault = {
  message: 'Hello, welcome to the default page!',
}

app.get('/', async (_req, res) => {
  res.status(200).json(messageDefault)
});

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAllAuthors();
  res.status(200).json(authors)
});

app.listen(port, () => console.log(`Example app listening on port port!`));