const { type } = require("express/lib/response");
const db = require("./db");

const Contatos = db.sequelize.define('contatos',{
    nome:{type : db.Sequelize.STRING(100)},
    email:{type : db.Sequelize.STRING(50)}
});

module.exports = Contatos;

// Contatos.sync({force:true});