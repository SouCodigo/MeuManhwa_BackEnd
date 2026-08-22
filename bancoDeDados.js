const mongoose = require('mongoose')
require('dotenv').config()

async function connectDatabase() {
  const mongoUrl = process.env.MONGO_URL
  if (!mongoUrl) throw new Error('A variável MONGO_URL não foi definida.')
  mongoose.set('strictQuery', true)
  await mongoose.connect(mongoUrl)
  console.log('Banco de dados conectado.')
}

module.exports = connectDatabase
