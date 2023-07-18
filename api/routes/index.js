const bodyParser = require('body-parser')
const cadastro = require('./cadastroRoute')
const home = require('./homeRoute')
// const motorista = require('./motoristaRoute')
// const utilizacao = require('./utilizacaoRoute')

module.exports = app =>{
    app.use(bodyParser.json())
    app.use(cadastro, home)
}