const criarUsuario = require('../../../../api/controllers/criar');

let nome = document.querySelector("#nome").value;
let email = document.querySelector("#email").value;
const btn = document.querySelector("#button");

//Variáveis de ambiente e configuração
const API_PORT = 3000;
const API_URL = `http://localhost:${ API_PORT }/usuario`;
const FETCH_OPTIONS = {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify({
        nome:nome,
        email:email,    
      })
};



function Criar() {
   
    fetch(API_URL, FETCH_OPTIONS)
    .then(function(response){ 
        return response.json()
    }).then(function(data){
        console.log(data)
      }).catch(error => console.error('Error:', error));
    
}

export default Criar;


btn.addEventListener('submit', Criar);