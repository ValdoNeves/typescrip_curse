// 1 - iniciando projeto
// console.log("Express + TS")

// 2 - init express
import  express from "express";

const app = express();

// 3 - rota com Post
app.use(express.json()) // habilitando json

app.get("/", (req, res) => {
  return res.send("Hello Express!!")
})

// 3 - rota com Post
app.post("/api/product", (req, res) => {
  console.log(req.body)
  return res.send("Produto adicionado!")
})

// 4 - rota para todos os verbos
app.all("/api/product/check", (req, res) => {
  // verificando qual foi o metodo recebido
  // req.method = verbo HTTP
  if(req.method === "POST"){
    return res.send("inseriu algum registo")
  }
  else if(req.method === "GET"){
    return res.send("Leu algum registro")
  }
  else {
    return res.send("não podemos realizar essa operação!")
  }
})
app.listen(3000, () => {
  console.log("Aplicação de TS + Express funcionando!");
})