
const usuarioLista = require('../database/mock');

function atualizar(req,res) {
	const id = req.params.id;
	const body = req.body;

	const usuarioAtualizado = {
		id: body.id,
		nome: body.nome,
		email:body.email		
	}
	
	const index = usuarioLista.findIndex( a => a.id == id );
	usuarioLista[index].usuario = usuarioAtualizado.usuario;
	usuarioLista[index].id = usuarioAtualizado.id;

	return res.status(200).json({ 
		ok: true, 
		msg:`usuario ${usuarioAtualizado.usuario} foi atualizado com sucesso!`, 
		usuario: usuarioAtualizado 
	});
}

module.exports = atualizar;