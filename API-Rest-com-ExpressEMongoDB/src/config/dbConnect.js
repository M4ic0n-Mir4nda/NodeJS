import mongoose from "mongoose";

mongoose.connect("mongodb+srv://user:password@crud-node.hkf0h4t.mongodb.net/alura-node?"); // Configuração de conexao com o banco

let db = mongoose.connection; // variavel para fazer a comunicação da aplicação com o banco de dados

export default db;
