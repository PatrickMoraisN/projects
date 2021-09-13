const Author = require('../models/Author');

const getAll = async () => Author.getAll();

const findById = async (id) => Author.findById(id);

const create = async (firstName, middleName, lastName) =>
  Author.create(firstName, middleName, lastName);

module.exports = {
  getAll,
  findById,
  create,
};