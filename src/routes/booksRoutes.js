import express from "express";
import BookController from "../controller/bookController.js";

const router = express.Router();

router.get("/livros", BookController.getBooks);

export default router;