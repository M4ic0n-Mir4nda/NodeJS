import mongoose from "mongoose";

mongoose.connect("mongodb+srv://maicon:password@escola.q5ibel6.mongodb.net/cadastro-escolar?");

let db = mongoose.connection;

export default db;
