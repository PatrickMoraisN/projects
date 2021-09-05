const connection = require('./connection');

const searialize = (author) => {
  const fullName = `${author.first_name} ${author.middle_name ?? ''} ${author.last_name}`
  return {
    id: author.id,
    firstName: author.first_name,
    middleName: author.middle_name ?? '',
    lastName: author.last_name,
    fullName
  }
}

const getAllAuthors = async () => {
  const [authors] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM authors');
  // Pega apenas o primeiro elemento do array

  const result = authors.map(searialize);
  return result;
}

const findAuthorById = async (id) => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM authors WHERE id=?',
    [id]
  );

  if (authors.length === 0) return null;

  const result = authors.map(searialize)[0];

  return result;
}

const isValid = (firstName, _middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;

  return true;
}

const createAuthor = async (firstName, middleName, lastName) =>  {
  await connection.execute(
    'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?, ?, ?)',
    [firstName, middleName, lastName],
  )};

module.exports = {
  getAllAuthors,
  findAuthorById,
  createAuthor,
  isValid,
};
