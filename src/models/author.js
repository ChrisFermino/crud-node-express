import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
        id: {type: String},
        name: {type: String, required: true},
        nacionality: {type: String, required: true}
    },
    {
        versionKey: false
    }
)

const autores = mongoose.model("authors", authorSchema)

export default autores