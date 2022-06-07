import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import vilãocontroller from '../controller/vilãocontroller.js'

const server = express();
server.use(cors());
server.use(vilãocontroller)
server.use(express.json());






server.listen(process.env.PORT, () => console.log (`API ONLINE NA PORTA ${process.env.PORT}`));