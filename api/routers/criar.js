const express = require('express');
const cadastrar = require("../controllers/criar");
const router = express.Router();

const criar = router.post('/', cadastrar);

module.exports = criar;