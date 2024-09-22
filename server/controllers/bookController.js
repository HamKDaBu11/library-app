const moment = require("moment/moment");
const db = require("../models/index");
const { where } = require("sequelize");

const insertBook = async (req, res) => {
  // console.log("REQ: ", req.body.publishedDate)

  var dt = moment(new Date(req.body.publishedDate)).format("YYYY-MM-DD");

  // console.log("DATE: ", dt)

  try {
    const book = await db.Book.create({
      // id: req.body.id,
      title: req.body.title,
      author: req.body.author,
      publishedDate: dt,
      genre: req.body.genre,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.status(200).send(book);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateBook = async (req, res) => {
  // console.log("UPDATE REQ: ", req.body);
  try {
    const book = await db.Book.update(
      {
        title: req.body.title,
        author: req.body.author,
        publishedDate: req.body.publishedDate,
        genre: req.body.genre,
        updatedAt: new Date(),
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteBook = async (req, res) => {
  try {
    const book = await db.Book.destroy({
      where: {
        id: req.params.id,
      },
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const filterBooksByAuthorOrTitle = async (req, res) => {
  try {
    const { Op } = require("sequelize");
    const books = await db.Book.findAll({
      where: {
        [Op.or]: [
          {
            title: {
              [Op.iLike]: "%" + req.query.query + "%",
            },
          },
          {
            author: {
              [Op.iLike]: "%" + req.query.query + "%",
            },
          },
        ],
      },
    });
    res.status(200).send(books);
  } catch (error) {
    console.log(error);
  }
};

const filterBooksByGenre = async (req, res) => {
  try {
    const books = await db.Book.findAll({
      where: {
        genre: req.query.genre,
      },
    });
    res.status(200).send(books);
  } catch (error) {
    console.log(error);
  }
};

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

const getAllGenres = async (req, res) => {
  try {
    const genres = await db.Book.findAll({
      attributes: ['genre'],
      group: ['genre']
    });
    res.status(200).send(genres);
  } catch (error) {
    res.status(500).send("Error");
  }
};

module.exports = {
  getAllBooks,
  getAllGenres,
  insertBook,
  updateBook,
  deleteBook,
  filterBooksByAuthorOrTitle,
  filterBooksByGenre,
};
