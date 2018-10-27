var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TarefaSchema = new Schema({
    nome:String,
    tempo:String
});

module.exports = mongoose.model('Tarefa',TarefaSchema);
