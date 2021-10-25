const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');


const app = express();
const port = 8000;

// Template Engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.get('/', (_req, res) => {
  return res.render('home')
})

app.listen(port, () => {
  console.log(`Online at port ${port}`)
})