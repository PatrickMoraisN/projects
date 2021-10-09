const express = require('express');

const server = express();
server.use(express.json());
server.listen(3000);

const cursos = ["NodeJS", "JAVA", "PHP"]

// middleware global
server.use((_req, _res, next) => {
  console.log('Passando pelo middleware global');
  return next();
});

// query params
server.get('/cursos', (_req, res) => {
  return res.json(cursos);
})


// route params 
server.get('/cursos/:id', (req, res) => {
  const id = req.params.id;
  return res.json(cursos[id]);
});

// criando curso
server.post('/cursos', (req, res) => {
  const { name } = req.body;
  cursos.push(name);
  return res.json(cursos);
});

// editando curso
server.put('/cursos/:id', (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  cursos[id] = name;
  return res.json(cursos);
});

// deletando curso
server.delete('/cursos/:id', (req, res) => {
  const { id } = req.params;
  cursos.splice(id, 1);
  return res.json({message: "curso deletado"});
});