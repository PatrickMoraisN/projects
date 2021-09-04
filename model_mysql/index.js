const bodyParser = require('body-parser');
const express = require('express');
const Author = require('./models/Author');
const app = express();
const port = 3000;
const STATUS_OK = 200;
const STATUS_ERROR_NOTFOUND = 404;
const messageDefault = {
  message: 'Hello, welcome to the default page!',
}
const messageNotFound = {
  message: 'Page Not Found',
}

app.use(bodyParser.json());

app.get('/', async (_req, res) => {
  res.status(STATUS_OK).json(messageDefault)
});

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAllAuthors();
  res.status(STATUS_OK).json(authors)
});

app.post('/authors', async (req, res) => {
  const {first_name, middle_name, last_name} = req.body;

  if(!Author.isValid(first_name, middle_name, last_name)) return res.status(400).json({message: 'invalid data'})

  await Author.createAuthor(first_name, middle_name, last_name);

  return res.status(201).json({message: 'Author Created!'})
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const authors = await Author.findAuthorById(id);

  if (!authors) return res.status(STATUS_ERROR_NOTFOUND).json(messageNotFound)
  res.status(STATUS_OK).json(authors)
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// Req POST httpie 
// http POST :3000/authors first_name=Patrick middle_name=Morais last_name=Nunes