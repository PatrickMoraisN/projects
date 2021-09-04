const bodyParser = require("body-parser");
const express = require("express");
const Author = require("./models/Author");
const app = express();
const port = 3000;
const STATUS_OK_CREATED = 201;
const STATUS_ERROR_CREATE = 400;
const STATUS_OK = 200;
const STATUS_ERROR_NOTFOUND = 404;

const {
  messageDefault,
  messageNotFound,
  messageInvalidData,
  messageAuthorCreated,
} = require("./models/utils/messages");

app.use(bodyParser.json());

app.get("/", async (_req, res) => {
  res.status(STATUS_OK).json(messageDefault);
});

app.get("/authors", async (_req, res) => {
  const authors = await Author.getAllAuthors();
  res.status(STATUS_OK).json(authors);
});

app.post("/authors", async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Author.isValid(first_name, middle_name, last_name))
    return res.status(STATUS_ERROR_CREATE).json(messageInvalidData);

  await Author.createAuthor(first_name, middle_name, last_name);

  return res.status(STATUS_OK_CREATED).json(messageAuthorCreated);
});

app.get("/authors/:id", async (req, res) => {
  const { id } = req.params;
  const authors = await Author.findAuthorById(id);

  if (!authors) return res.status(STATUS_ERROR_NOTFOUND).json(messageNotFound);
  res.status(STATUS_OK).json(authors);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// Req POST httpie
// http POST :3000/authors first_name=Patrick middle_name=Morais last_name=Nunes
