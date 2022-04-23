const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Contatos = require("./Contato");

//BodyParser

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get("/deletar/:id",function(req,res){
    Contatos.destroy({
        where:{"id":req.params.id}
    }).then(function(){
        res.send("Ok")
    }).catch(function(erro){
        res.send("FALHA AO DELETAR ARROMBADO" + erro);
    });
});

app.get("/atualizar/:id",function(req,res){
    Contatos.update({
        where:{"id":req.params.id}
    }).then(function(){
        res.send("Ok")
    }).catch(function(erro){
        res.send("FALHA AO DELETAR ARROMBADO" + erro);
    });
});

app.get("/",function(req,res){
    Contatos.findAll()
    .then(data => {
        res.send(data);
    }).catch(function(erro){
        res.send("Falha ao Listar" + erro)
    });
});

app.post("/add", function(req, res){
    Contatos.create({
        nome:req.body.nome,
        email:req.body.email
    }).then(function(){
        res.send("Ok")
    }).catch(function(erro){
        res.send("Falha ao Cadastrar o Conteudo" + erro)
    });
});

app.listen(8081,function(){
    console.log("OK")
});

