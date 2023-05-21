//ENV variables
require("dotenv").config();

import express from "express"
import config from "config"

//import Routes
import router from './router'

// DB
import db from '../config/db'

const app = express();

// app port
const PORT:number = config.get<number>('port');

//JSON middleware
app.use(express.json());
app.use("/api/", router);

app.listen(PORT, async() => {
  await db();
  console.log(`Aplicação funcionando na porta: ${PORT}`);
})