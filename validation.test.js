const test = require('node:test')
const assert = require('node:assert/strict')
const { validateManhwa } = require('./validation')

const valid = { obra: 'Solo Leveling', imagem: 'https://example.com/capa.jpg', sinopse: 'Uma aventura.', opiniao: 'Leitura envolvente.' }

test('aceita um cadastro completo e remove espaços', () => {
  const result = validateManhwa({ ...valid, obra: '  Solo Leveling  ' })
  assert.equal(result.valid, true)
  assert.equal(result.data.obra, 'Solo Leveling')
})

test('rejeita campos obrigatórios ausentes', () => assert.equal(validateManhwa({ obra: 'Solo Leveling' }).valid, false))

test('aceita atualização parcial', () => {
  assert.deepEqual(validateManhwa({ opiniao: 'Nova avaliação' }, { partial: true }), { valid: true, data: { opiniao: 'Nova avaliação' } })
})
