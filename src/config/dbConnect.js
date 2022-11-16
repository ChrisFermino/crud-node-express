import mongoose from "mongoose";

mongoose.connect("mongodb+srv://chrisfermino:123@christian.hgstdtg.mongodb.net/chris-node?");

let db = mongoose.connection;

export default db;