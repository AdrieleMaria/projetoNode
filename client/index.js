//Variáveis de ambiente e configuração
const API_PORT = 3000;
const API_URL = `http://localhost:${ API_PORT }/usuario`;
const FETCH_OPTIONS = {
    method: 'GET',
    mode: 'cors',
};


async function requestListAllFromApi (){

    //get data
    const response =  await fetch(API_URL, FETCH_OPTIONS);
    const data = await response.json()

    try{  
              
        const lista = data.lista  
        console.log(lista)
    }catch(err){

        errors = {
            msg: 'um erro ocorre durante a chamada da função testeApi()',
            erros: err
        };
        console.log(errors)
    }
}

requestListAllFromApi();