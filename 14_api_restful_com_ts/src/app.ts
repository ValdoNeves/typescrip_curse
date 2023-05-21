import express from "express"
import config from "config"

const app = express();

// app port
const PORT:number = config.get<number>('port');

//JSON middleware
app.use(express.json());

app.listen(PORT, async() => {
  console.log(`Aplicação funcionando na porta: ${PORT}`);
})