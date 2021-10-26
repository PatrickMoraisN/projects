const router = require('express').Router();
const db = require('../db/connection');
const { ObjectId } = require('mongodb');

router.get('/', function(_req, res) {
  res.render('notes/create')
})

router.post('/', function(req, res) {
  const { title, description } = req.body;

  db.getDb()
    .db()
    .collection('notes')
    .insertOne({ title, description });

  return res.redirect(301, '/')
})

module.exports = router;