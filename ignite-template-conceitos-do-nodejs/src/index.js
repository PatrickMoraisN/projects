const express = require('express');
const cors = require('cors');

const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

function checksExistsUserAccount(request, response, next) {
  const {name} = request.body;
  const user = users.find(user => user.name === name);
  if(!user) {
    return response.status(404).json({error: 'User not found'});
  }
  return next();
}

app.post('/users', checksExistsUserAccount,(request, response) => {
  const { name, username } = request.body;
  const newUser = {
    id: uuidv4(),
    name,
    username,
    todos: [],
  }
  users.push(newUser);
  return response.status(201).json(newUser);
});

app.get('/todos', checksExistsUserAccount, (request, response) => {
  const { username } = request.headers;
  const user = users.find(user => user.username === username);
  return response.status(201).json(user.todos);
});

app.post('/todos', checksExistsUserAccount, (request, response) => {
  const {title, deadline} = request.body;
  const { username } = request.headers;
  const newTodo = {
    id: uuidv4(),
    title,
    done: false,
    deadline: new Date(deadline),
    created_at: new Date(),
  }
  const user = users.find(user => user.username === username);
  user.todos.push(newTodo);
  return response.status(201).json(newTodo);
});

app.put('/todos/:id', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.patch('/todos/:id/done', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.delete('/todos/:id', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

module.exports = app;