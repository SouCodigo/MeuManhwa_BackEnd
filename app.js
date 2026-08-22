const cors = require('cors')
const express = require('express')
const manhwaRoutes = require('./manhwas')

const app = express()
app.disable('x-powered-by')
app.use(cors())
app.use(express.json({ limit: '100kb' }))
app.get('/health', (_request, response) => response.json({ status: 'ok' }))
app.use('/manhwas', manhwaRoutes)
app.use((_request, response) => response.status(404).json({ error: 'Rota não encontrada.' }))
app.use((error, _request, response, _next) => {
  console.error(error)
  response.status(error.status || 500).json({ error: error.status ? error.message : 'Erro interno do servidor.' })
})

module.exports = app
