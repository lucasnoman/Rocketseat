// Servidor
const express = require('express');
const server = express();

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

// configurar nunjucks (template engine)
const nunjucks = require('nunjucks');

nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// Início da configuração do servidor
server
    // configurar arquivos estáticos (css, scripts, imagens)
    .use(express.urlencoded({
        extended: true
    }))
    // receber os dados do require.body
    .use(express.static("public"))
    // rotas da aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .post("/save-classes", saveClasses)
    // start do servidor
    .listen(5500)