
const usuarioLista = require('../database/mock');

 function criar( req, res ) {
	const {nome, id, email} = req.body;


    const usuarioCriado = {
        id,
        nome,
        email
    }
    //Verificar se contém um usuário com o id ou email 
    
    //Caso não exista, persiste usuário
    usuarioLista.push(usuarioCriado);

	return res.status(201).json({
        ok:true,
        msg: `O usuario ${usuarioCriado.nome} foi criado com sucesso!`,
        usuario: usuarioCriado
    });
}

module.exports = criar;