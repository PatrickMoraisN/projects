const express = require('express');

const app = express(); // 1

app.get('/hello', handleHelloWorldRequest);
app.get('/hello2', handleHelloWorld2Request); // 2

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
}); // 3

function handleHelloWorld2Request(_req, res) {
  res.send('Hello World 2');
}

function handleHelloWorldRequest(req, res) {
  res.status(200).send('Hello World!'); // 4
}
