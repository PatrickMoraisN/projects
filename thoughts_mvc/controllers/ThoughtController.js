const Thought = require('../models');
const User = require('../models');

module.exports = class ThoughtController {
  static async showThoughts(req, res) {
    res.render('thoughts/home');
  }
}