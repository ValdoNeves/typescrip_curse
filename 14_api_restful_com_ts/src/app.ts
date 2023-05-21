//ENV variables
require("dotenv").config();

import express from "express"
import config from "config"

//import Routes
import router from './router'

//import Logs
import Logger from "../config/logger";

//import middleware
import morganMiddleware from "./middleware/morganMiddleware";

// DB
import db from '../config/db'

const app = express();

// app port
const PORT:number = config.get<number>('port');

//JSON middleware
app.use(express.json());
app.use(morganMiddleware);
app.use("/api/", router);

app.listen(PORT, async() => {
  await db();
  // com o arquivo logger configurado posso substituir o console log por logger 
  // e definir o tipo de situação no caso abaixo é uma informação ou seja info
  // console.log(`Aplicação funcionando na porta: ${PORT}`);
  Logger.info(`Aplicação funcionando na porta: ${PORT}`);
})