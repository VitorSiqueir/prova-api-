import 'dotenv/config'

import vilaocontroller from './controller/vilaocontroller.js'

import express from 'express'
import cors from 'cors'


const server = express();
server.use(cors());
server.use(express.json());

server.use(vilaocontroller)

console.log('BD Conectado')


server.listen(process.env.PORT, () => console.log (`API ONLINE NA PORTA ${process.env.PORT}`))  

