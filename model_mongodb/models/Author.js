const connection = require('./connection');
const { ObjectId } = require('mongodb');

const searialize = (author) => {
  const fullName = `${author.firstName} ${author.middleName ?? ''} ${author.lastName}`
  return {
    id: author.id,
    firstName: author.firstName,
    middleName: author.middleName ?? '',
    lastName: author.lastName,
    fullName
  }
}

const getAllAuthors = async () => {
  return connection()
    .then((db) => db.collection('authors').find().toArray())
    .then((authors) => {
      return authors.map((author) => {
        const newAuthor = {
          ...author,
          id: author._id
        }
        return searialize(newAuthor);
      })
    })
}

const findAuthorById = async (id) => {
  const authorData = await connection()
    .then((db) => db.collection('authors').findOne(ObjectId(id)))

  if (!authorData) return null;

  const { firstName, middleName, lastName } = authorData;

  console.log(authorData)
  return searialize({
    id,
    firstName,
    middleName,
    lastName
  });
}

const isValid = (firstName, _middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;

  return true;
}

const createAuthor = async (firstName, middleName, lastName) =>  {
  await connection()
    .then((db) => db.collection('authors').insertOne({firstName, middleName, lastName}))
}

module.exports = {
  getAllAuthors,
  findAuthorById,
  createAuthor,
  isValid,
};
