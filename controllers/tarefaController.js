var Tarefa = require('../models/tarefa');


exports.save = function(nome,tempo, callback){
    new Tarefa({
        'nome' :nome,
        'tempo' :tempo
    }).save(function(error,tarefa){
        if(error){
            callback({error: 'Não foi possível salvar'})
        }
        else{
            callback(tarefa);
        }
    });
}

exports.list = function(callback){
    Tarefa.find({}, function(error,tarefas){
        if(error){
            callback({error: 'Não fo possível encontrar as tarefas'});
        }
        else{
            callback(tarefas)
        }
    });
}