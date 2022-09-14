const express = require('express');
const cors  = require('cors')

//importar rotas
const listarTodos = require('./routers/listar');
const buscarPorId = require('./routers/buscar');
const criar = require('./routers/criar');
const atualizarPorId = require('./routers/atualizar');
const apagarPorId = require('./routers/apagar');

// Inicializar variáveis
const app = express();

// Configurações 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//CORS - habilita um cliente externo a ter acesso a nossa api
const liveServerClient = 'http://127.0.0.1:5500'//frontend client adress

const corsOptions = {
    origin: liveServerClient,
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

// Registre Abaixo todas as Rotas do Recurso de usuarios - CRUD
app.use( '/usuario', listarTodos );
app.use( '/usuario', buscarPorId );
app.use( '/usuario', criar );
app.use( '/usuario', atualizarPorId );
app.use( '/usuario', apagarPorId );

const PORTA = 3000;
app.listen( PORTA, () => console.log(`Express server rodando na porta ${PORTA}`) );