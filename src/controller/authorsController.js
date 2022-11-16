import authors from "../models/author.js";

class AuthorController {
    static getAuthors = (req, res) => {
        authors.find((err, authors) => {
            res.status(200).json(authors);
        });
    };

    static getAuthorById = (req, res) => {
        const id = req.params.id;
        authors.findById(id, (err, authors) => {
            if (err) {
                res.status(400).send({message: `${err.message} - Author Id not found`})
            } else {
                res.status(200).send(authors)
            }
        })
    }

    static saveAuthor = (req, res) => {
        let author = new authors(req.body)
        author.save((err) => {
            if (err) {
                res.status(500).send({message: `${err.message} - failed to save author`})
            } else {
                res.status(201).send(author.toJSON())
            }
        })
    }

    static editAuthor = (req, res) => {
        const id = req.params.id;

        authors.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (!err) {
                res.status(200).send({message: `Author updated with success`})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    static deleteAuthor = (req, res) => {
        const id = req.params.id;
        authors.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({message: `Author deleted with success`})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }
}

export default AuthorController;
