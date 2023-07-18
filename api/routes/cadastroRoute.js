const {Router} = require('express')
const CadastroController = require('../controllers/CadastroController')

const router = Router()

router.post('/cadastrarMembro', CadastroController.cadastrarMembro)

router.get('/listarMembros', CadastroController.listarMembros)

router.get('/listarMembrosPorId/:id', CadastroController.listarMembrosPorId)

router.put('/atualizarMembro/:id', CadastroController.atualizarMembro)

router.delete('/removerMembro/:id', CadastroController.removerMembro)

module.exports = router