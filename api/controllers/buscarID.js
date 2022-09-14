
const usuarioLista = require('../database/mock');

function buscar( req, res ){		
	const id = req.params.id;  	
	const usuarioEncontrado = usuarioLista.filter( a => a.id == id ); 
		
	return res.status(200).json({ 
		ok: true, 
		msg: `O id ${id} foi encontrado com sucesso!`,
		usuario: usuarioEncontrado 
	});
	
}

module.exports = buscar;