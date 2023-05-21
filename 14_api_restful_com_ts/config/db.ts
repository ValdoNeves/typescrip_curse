import mongoose from "mongoose";
import config from "config";

async function connect(){
  const dbUri:string = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
    console.log("Conectou ao Bando de Dados!")
    
  } catch (e) {
    console.log("Não foi possivel conectar!");
    console.log(`Erro: ${e}`);
  }
}

export default connect;