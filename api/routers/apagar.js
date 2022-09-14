const express = require('express');
const deletar = require("../controllers/deletar");
const router = express.Router();

const apagarPorId = router.delete('/:id', deletar);

module.exports = apagarPorId;