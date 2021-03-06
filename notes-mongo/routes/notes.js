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

router.post('/delete', function(req, res) {
  const { id } = req.body;

  db.getDb()
    .db()
    .collection('notes')
    .deleteOne({ _id: ObjectId(id) });
  
  return res.redirect(301, '/')
})

router.get('/edit/:id', async function (req, res) {
  const { id } = req.params;

  const note = await db.getDb().db().collection('notes')
    .findOne({ _id: ObjectId(id) });

  return res.render('notes/edit', { note })
})

router.post('/update', async function (req, res) {
  const { id, title, description } = req.body;

  await db.getDb().db().collection('notes')
    .updateOne({ _id: ObjectId(id) }, { $set: { title, description } });

  return res.redirect(301, '/')
})

router.get('/:id', async function (req, res) {
  const { id } = req.params;
  const notes = await db.getDb().db().collection('notes')
    .findOne({ _id: ObjectId(id) });

  return res.render('notes/detail', { notes })
})

module.exports = router;