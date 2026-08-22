const express = require('express')
const mongoose = require('mongoose')
const Manhwa = require('./manhwaModel')
const { validateManhwa } = require('./validation')

const router = express.Router()

function ensureValidId(request, response, next) {
  if (!mongoose.isValidObjectId(request.params.id)) return response.status(400).json({ error: 'Identificador inválido.' })
  return next()
}

router.get('/', async (_request, response, next) => {
  try { response.json(await Manhwa.find().sort({ createdAt: -1 })) } catch (error) { next(error) }
})

router.post('/', async (request, response, next) => {
  try {
    const result = validateManhwa(request.body)
    if (!result.valid) return response.status(400).json({ error: result.error })
    return response.status(201).json(await Manhwa.create(result.data))
  } catch (error) { return next(error) }
})

router.patch('/:id', ensureValidId, async (request, response, next) => {
  try {
    const result = validateManhwa(request.body, { partial: true })
    if (!result.valid) return response.status(400).json({ error: result.error })
    const manhwa = await Manhwa.findByIdAndUpdate(request.params.id, result.data, { new: true, runValidators: true })
    return manhwa ? response.json(manhwa) : response.status(404).json({ error: 'Manhwa não encontrado.' })
  } catch (error) { return next(error) }
})

router.delete('/:id', ensureValidId, async (request, response, next) => {
  try {
    const manhwa = await Manhwa.findByIdAndDelete(request.params.id)
    return manhwa ? response.status(204).send() : response.status(404).json({ error: 'Manhwa não encontrado.' })
  } catch (error) { return next(error) }
})

module.exports = router
