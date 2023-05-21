// 1 - iniciando projeto
// console.log("Express + TS")

// 2 - init express
import  express, {Request, Response} from "express";

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

// 5 - interface do express
app.get("/api/interfaces", (req:Request, res: Response) => {
  return res.send("utilizando as interfaces!")
})

// 6 - enviando json
app.get("/api/json", (req:Request, res:Response) => {

  return res.json({
    "nome": "Shirt",
    "price": 30,
    "color": "white",
    "size": ["P", "M", "G"]

  })

})

// 7 - router parameters
app.get("/api/product/:id", (req:Request, res: Response) => {

  console.log(req.params);

  const id = req.params.id

  if(id === "1"){
    const product = {
      id: 1,
      name: "boné",
      price: 10,
    }
    res.json(product)
  }else{
    res.send("produto não encontrado 404")
  }
})

// 8 - rodas complexas 
app.get("/api/product/:id/review/:reviewId", (req:Request, res: Response) => {
  console.log(req.params)

  const productId = req.params.id
  const reviewId = req.params.reviewId



  res.send(`Acessando a review ${reviewId} do produto ${productId}`)

})


app.listen(3000, () => {
  console.log("Aplicação de TS + Express funcionando!");
})