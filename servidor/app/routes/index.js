module.exports = function(application){
	application.get('/', function(req, res){
		res.format({
			html: function(){
				res.send('Bem vindo a sua app NodeJS!');
			}
			,
			json: function(){
				let retorno = { body: 'Bem vindo a sua app NodeJS!'};
				res.json(retorno);
			}
		})
	});

	application.post('/', function(req, res){
		let formulario = req.body;
		res.send(formulario);
	});

	application.get('/testeErro', function(req, res){
		Olá
	});
}