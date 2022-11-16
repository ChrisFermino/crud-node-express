import books from "../models/book.js";

class BookController {
  static getBooks = (req, res) => {
    books.find((err, books) => {
      res.status(200).json(books);
    });
  };
}

export default BookController;
