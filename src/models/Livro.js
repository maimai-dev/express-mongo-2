import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
  {
    id: {type: String},
    titulo: {
      type: String,
      required: [true, "O título do livro e obrigatório"]},
    autor: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'autores', 
      required: [true, "O(a) autor(a) e obrigatório"]},
    editora: {
      type: String, 
      required: [true, "A editora e obrigatória"]},
    numeroPaginas: {type: Number}
  }
);

const livros= mongoose.model('livros', livroSchema);

export default livros;