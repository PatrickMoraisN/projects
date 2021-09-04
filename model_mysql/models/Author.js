const connection = require('./connection');

const searialize = (author) => {
  const fullName = `${author.first_name} ${author.middle_name} ${author.last_name}`
  return {
    id: author.id,
    firstName: author.first_name,
    middleName: author.middle_name,
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

module.exports = {
  getAllAuthors,
};
