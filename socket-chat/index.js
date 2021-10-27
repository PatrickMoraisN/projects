const app = require('express')();
const http = require('http').createServer(app);
const cors = require('cors');

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000/',
    method: ['GET, POST' ]
  }
})

app.use(cors());

io.on('connection', (socket) => {
  console.log('Alguem se conectou')

  socket.on('disconnect', () => {
    console.log('vish alguem saiu INFERNO')
  })

  socket.on('message', (msg) => {
    io.emit('serverMessage', {message: msg })
  })

  socket.emit('welcome', 'Seja bem vindo ao TrybeChat!')

  socket.broadcast.emit('serverMessage', {message: 'Oba, alguem se conectou' })
})


app.get('/', (_req, res) => {
  return res.sendFile(__dirname + '/index.html');
});

http.listen(3000, () => {
  console.log('Servidor ouvindo na porta 3000')
})