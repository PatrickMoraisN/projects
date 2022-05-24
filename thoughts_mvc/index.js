const express = require('express');
const { engine } = require('express-handlebars');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const flash = require('express-flash');
require('dotenv').config();

const app = express();

const { sequelize } = require('./database/connection');

// Models
const { Thought } = require('./models');
const { User } = require('./models');

// Engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({
  extended: true,
}))
app.use(express.json());

// Session
app.use(
  session({
    name: "session",
    secret: "our_secret",
    resave: false,
    saveUninitialized: false,
    store: new FileStore({
      logFn: function() {},
      path: require('path').join(require('os').tmpdir(), 'sessions'),
    }),
    cookie: {
      secure: false,
      maxAge: 360000, // One day
      expires: new Date(Date.now() + 360000),
      httpOnly: true,
    }
  }),
)

// Flash Messages
app.use(flash());

// Public path
app.use(express.static('public'))

// Set Session to res
app.use((req, res, next) => {
  if(req.session.userId) {
    res.locals.session = req.session;
  }
  next();
})

const PORT = process.env.PORT || 3000

sequelize
  .sync()
  .then(() => {
    console.log(`==== Server running on port ${PORT} ====`)
    app.listen(PORT);
  })
  .catch((error) => console.log(`Error: ${error}`));