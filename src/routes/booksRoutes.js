import express from "express";
import BookController from "../controller/bookController.js";

const router = express.Router();

router
    .get("/books", BookController.getBooks)
    .get("/books/search", BookController.getBookSearch)
    .get("/books/:id", BookController.getBookById)
    .post("/books", BookController.saveBook)
    .put("/books/:id", BookController.editBook)
    .delete("/books/:id", BookController.deleteBook)

export default router;