const db = require("../models/index");

const getAllBooks = async (req, res) => {
  try {
    const books = await db.Book.findAll({
        // attributes: ['id', 'title', 'author', 'publishedDate', 'genre']
    });
    res.status(200).send(books);
  } catch (error) {
    res.status(500).send("Error");
  }
};

module.exports = { getAllBooks };
