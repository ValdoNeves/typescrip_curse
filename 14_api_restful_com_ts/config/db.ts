import mongoose from "mongoose";
import config from "config";

import Logger from "./logger";

async function connect(){
  const dbUri:string = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
    Logger.info("Conectou ao Bando de Dados!")
    
  } catch (e) {
    Logger.error("Não foi possivel conectar!");
    Logger.error(e);
    process.exit(1); // parar a aplicação
  }
}

export default connect;