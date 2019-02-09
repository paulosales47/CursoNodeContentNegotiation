let http = require('http');

let opcoes = {
    hostname: 'localhost',
    port: 3004,
    path: '/',
    headers: {'Accept': 'application/json'}
}

http.get(opcoes, function(resposta){
    
    let bufferResposta = [];

    resposta.on('data', function(chunck){
        bufferResposta.push(chunck);
    })

    resposta.on('end', function(){
        let corpoResponse = Buffer.concat(bufferResposta).toString();
        console.log(corpoResponse);
    });

});