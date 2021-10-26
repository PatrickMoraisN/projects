const router = require('express').Router();

router.get('/', function(_req, res) {
  res.render('notes/create')
})

module.exports = router;