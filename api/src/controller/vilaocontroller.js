import { inserirvilao, listatodosvilão } from "../repository/vilaorepository.js";

import { Router } from 'express'

const server = Router();

server.post ('/vilao',async (req,resp) => {
    try{
        const vilao = req.body;

        const resposta = await inserirvilao(vilao);

        resp.send(resposta);
    }

    catch (err){
        resp.status(401).send({
            erro: err.message
        })
    }

})


server.get ('/vilão',async (req,resp) => {
    try{
        const resposta = await listatodosvilão();
        resp.send(resposta);
    }

    catch (err){
        resp.status(401).send({
            erro: err.message
        })
    }

})



export default server;