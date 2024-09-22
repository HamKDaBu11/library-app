const express = require("express");
const router = express.Router();

const {
  getAllBooks,
  getAllGenres,
  insertBook,
  updateBook,
  deleteBook,
  filterBooksByAuthorOrTitle,
  filterBooksByGenre,
} = require("../controllers/bookController");

router.get("/books", getAllBooks);
router.get("/books/genres", getAllGenres)
router.post("/books", insertBook);
router.put("/books/:id", updateBook);
router.delete("/books/:id", deleteBook);
router.get("/books/search", filterBooksByAuthorOrTitle);
router.get("/books/filter", filterBooksByGenre);

module.exports = router;
