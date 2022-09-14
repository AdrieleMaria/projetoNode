const express = require('express');
const buscar = require("../controllers/buscarID");
const router = express.Router();

const buscarPorId = router.get('/:id', buscar);

module.exports = buscarPorId;