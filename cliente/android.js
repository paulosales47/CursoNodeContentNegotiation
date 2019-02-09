let http = require('http');

let opcoes = {
    hostname: 'localhost',
    port: 3004,
    path: '/',
    method: 'post',
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/x-www-form-urlencoded'
    }
}

let body = 'nome=Paulo'

// http.get(opcoes, function(resposta){
    
//     let bufferResposta = [];

//     resposta.on('data', function(chunck){
//         bufferResposta.push(chunck);
//     })

//     resposta.on('end', function(){
//         let corpoResponse = Buffer.concat(bufferResposta).toString();
//         console.log(corpoResponse);
//     });

// });

let requsicao = http.request(opcoes, function(resposta){
    
    let bufferResposta = [];

    resposta.on('data', function(chunck){
        bufferResposta.push(chunck);
    })

    resposta.on('end', function(){
        let corpoResponse = Buffer.concat(bufferResposta).toString();
        console.log(corpoResponse);
    });

});

requsicao.write(body);
requsicao.end();
