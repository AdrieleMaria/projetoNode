const express = require('express');
const atualizar = require('../controllers/atualizar')
const router = express.Router();

const atualizarUsuarioPorId = router.put('/:id', atualizar);

module.exports = atualizarUsuarioPorId;