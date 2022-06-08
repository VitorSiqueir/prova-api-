import { Router } from "express";
import { inserirvilão, listatodosvilão } from "./controller/vilãocontroller.js";
const server = Router();

server.post ('/vilão',async (req,resp) => {
    try{
        const vilão = req.body;

        const resposta = await inserirvilão(vilão);

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