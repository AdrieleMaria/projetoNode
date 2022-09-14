
const usuarioLista = require('../database/mock');

function deletar( req, res ){		
	try{	
		const id = req.params.id;
		const idxExcluir = usuarioLista.findIndex( a => a.id == id );
		const usuarioExcluido = usuarioLista[idxExcluir].nome;		
		usuarioLista.splice( idxExcluir, 1 );
		
		return res.status(200).json({ 
			ok: true,
			msg: `O usuario, ${usuarioExcluido}, foi excluido com sucesso!` 	
		});
	}catch{
		return res.send(`O usuario não existe ou já foi excluído!`);
	}
}

module.exports = deletar;