const database = require('../models')
const Sequelize = require('sequelize')

class CadastroController{

    static async listarMembros(req, res){
        try{
            const listaMembros = await database.Membros.findAll()
            return res.status(200).json(listaMembros)
        } catch (error){
            return res.status(400).json(error.message)
        }
    }

    static async listarMembrosPorId(req, res){
        const {id} = req.params
        try{
            const membro = await database.Membros.findOne({where: {id: Number (id)}})
            if(membro === null){
                return res.status(400).json({message:'Registro inexistente'})
             } else {
                return res.status(200).json(membro)
            }
        } catch (error){
            return res.status(400).json(error.message)
        }
    }

    static async cadastrarMembro(req, res){
        const membro = req.body
        try{
            console.log(membro)
            //const membroCadastrado = await database.Membros.create(membro)
            //return res.status(200).json(membroCadastrado)
            return res.status(200).json("ok")
        } catch (error){
            return res.status(400).json(error.message)
        }
    }

    static async atualizarMembro(req, res){
        const {id} = req.params
        const valoresAtualizar = req.body
        try{
            await database.Membros.update(valoresAtualizar, {where: {id: Number (id)}})
            const membroAtualizado = await database.Membros.findOne({where: {id: Number (id)}})
            if(membroAtualizado === null){
                return res.status(400).json({message:'Registro não atualizado, inexistente'})
            } else {
                return res.status(200).json(membroAtualizado)
            }
        } catch (error){
            return res.status(400).json(error.message)
        }
    }

    static async removerMembro(req, res){
        const {id} = req.params
        try{
            const membro = await database.Membros.findOne({where: {id: Number (id)}})
            if(membro === null){
                return res.status(400).json({message:'Registro inexistente'})
             } else {
                 await database.Membros.destroy({where: {id: Number (id)}})
                 return res.status(200).json({message:'Sucesso, registro de membro removido'})
            }
        } catch (error){
            return res.status(400).json(error.message)
        }
    }
}

module.exports = CadastroController