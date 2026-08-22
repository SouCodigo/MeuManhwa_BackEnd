const mongoose = require('mongoose')

const manhwaSchema = new mongoose.Schema({
  obra: { type: String, required: true, trim: true, maxlength: 120 },
  imagem: { type: String, required: true, trim: true },
  opiniao: { type: String, required: true, trim: true, maxlength: 1000 },
  sinopse: { type: String, required: true, trim: true, maxlength: 2000 },
}, { timestamps: true })

module.exports = mongoose.model('Manhwa', manhwaSchema)
