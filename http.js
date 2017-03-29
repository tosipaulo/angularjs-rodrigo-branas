var router = require('./router');

var app = router(3412);

var operadoras = [
					{nome: "OI", codigo: 14, categoria: "celular"},
					{nome: "VIVO", codigo: 15, categoria: "celular"},
					{nome: "TIM", codigo: 41, categoria: "celular"},
					{nome: "GVT", codigo: 49, categoria: "fixo"},
					{nome: "EMBRATEL", codigo: 21, categoria: "fixo"}
				];

var contatos = [
					{nome: "Paulo", telefone: "99988888", data: new Date()},
					{nome: "Gisely", telefone: "888889999", data: new Date()},
					{nome: "Pedro", telefone: "7777778888", data: new Date()}
				];

app.get('/operadoras', function(req, res){
	res.write(JSON.stringify(operadoras));
	res.end();
})

app.get('/contatos', function(req, res){
	res.write(JSON.stringify(contatos));
	res.end();
})

