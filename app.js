var app = require('./config/app_config');
var db = require('./config/db_config');
var User = require('./models/tarefa');
var tarefaController = require('./controllers/tarefaController');


//rota principal
app.get('/',function(req,res){
    res.end('Bem vindo a API de produtos')
});


//rotas de produtos
app.get('/tarefa',function(req,res){
    tarefaController.list(function(resp){
        res.json(resp);
    })
});

app.post('/cadastro',function(req,res){
    var nome = req.body.nome;
    var tempo = req.body.tempo;

    tarefaController.save(nome,tempo, function(resp){
        res.json(resp);
    });
});