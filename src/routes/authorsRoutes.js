import express from "express";
import AuthorController from "../controller/authorsController.js";

const router = express.Router();

router
    .get("/authors", AuthorController.getAuthors)
    .get("/authors/:id", AuthorController.getAuthorById)
    .post("/authors", AuthorController.saveAuthor)
    .put("/authors/:id", AuthorController.editAuthor)
    .delete("/authors/:id", AuthorController.deleteAuthor)

export default router;