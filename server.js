const app = require('./app')
const connectDatabase = require('./bancoDeDados')

const port = Number(process.env.PORT) || 3333

async function start() {
  await connectDatabase()
  app.listen(port, () => console.log(`MeuManhwa API disponível em http://localhost:${port}`))
}

start().catch((error) => {
  console.error('Não foi possível iniciar a API.', error)
  process.exit(1)
})
