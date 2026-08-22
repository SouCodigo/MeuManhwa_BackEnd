const fields = ['obra', 'imagem', 'sinopse', 'opiniao']

function validateManhwa(input, options = {}) {
  if (!input || typeof input !== 'object' || Array.isArray(input)) return { valid: false, error: 'Envie um objeto JSON válido.' }
  const data = {}
  for (const field of fields) {
    const value = input[field]
    if (!options.partial && (typeof value !== 'string' || !value.trim())) return { valid: false, error: `O campo ${field} é obrigatório.` }
    if (value !== undefined) {
      if (typeof value !== 'string' || !value.trim()) return { valid: false, error: `O campo ${field} deve ser um texto válido.` }
      data[field] = value.trim()
    }
  }
  if (options.partial && Object.keys(data).length === 0) return { valid: false, error: 'Informe ao menos um campo para atualizar.' }
  return { valid: true, data }
}

module.exports = { validateManhwa }
