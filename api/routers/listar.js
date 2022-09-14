const express = require('express');
const usuarioLista = require('../database/mock');
const router = express.Router();

const listarTodos = router.get( '/', ( req, res ) => res.status(200).json({ 
	ok: true,
	msg: "Lista de Todos os Usuarios",
	lista: usuarioLista
}));

module.exports = listarTodos;