import express from "express";
import db from "./config/dbConnect.js";
import books from "./models/book.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("conexão com o banco feita com sucesso");
});

const app = express();

app.use(express.json());

routes(app);

app.get("/books/:id", (req, res) => {
  let index = buscaLivros(req.params.id);
  res.json(books[index]);
});

app.post("/books", (req, res) => {
  books.push(req.body);
  res.status(201).send("Book successfully inserted");
});

app.put("/books/:id", (req, res) => {
  let index = buscaLivros(req.params.id);
  books[index].titulo = req.body.titulo;
  res.json(books);
});

app.delete("/books/:id", (req, res) => {
  let { id } = req.params;
  let index = buscaLivros(id);
  books.splice(index, 1);
  res.json(`Book ${id} removed with success`);
});

function buscaLivros(id) {
  return books.findIndex((livro) => livro.id == id);
}

export default app;
