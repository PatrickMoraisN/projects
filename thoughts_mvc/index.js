const express = require('express');
const expresshbs = require('express-handlebars');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const flash = require('express-flash');
require('dotenv').config();

const app = express();

const connection = require('./database/connection');
const PORT = process.env.PORT || 3000

connection
  .sync()
  .then(() => {
    console.log(`==== Server running on port ${PORT} ====`)
    app.listen(PORT);
  })
  .catch((error) => console.log(`Error: ${error}`));