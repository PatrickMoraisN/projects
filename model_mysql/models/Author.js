const connection = require('./connection');

const getAllAuthors = async () => {
  const [authors] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM authors');
  // Pega apenas o primeiro elemento do array
  
  return authors;
}

module.exports = {
  getAllAuthors,
};
