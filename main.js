const { response } = require("express")
const express = require("express")
const app = express()
const db = require("./db")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
 
/* const itens = db.findAll(
app.get("/usuario",(request, response) => {
  response.json({name: "aleji", email:"aleji@gmail.com"})
}))
console.log(itens) */
    const items = db.findAll()
    app.get("/usuario",(request, response) => {
      response.json({nome :"alguem", email:"alguém@gmail.com", password : 1234})
    })
    const id = 1
    const item = db.findById(id)
    app.post("/usuario",(request, response1) => {
      response1.findAll({nome :"alguem1", email:"alguém1@gmail.com", password : 1234})
      console.log(item)
    })
// Exercicio de CRUD
// Utilizando as 5 funções encontradas em db, crie 5 endpoints para o recurso "usuario".
// (Leia em README para saber mais sobre as funções)
/*   
    O recurso usuario deve ter as seguintes propriedades com seus respectivos tipos:
    { 
        name: String, 
        email: String, 
        password: String 
    }
*/

app.listen(3030, () => {
  console.log("Esse servidor está rodando em http://localhost:3030")
})
/*const express = require("express")
const app = express()

app.use(express.lson())
app.use(express.urlencoded({ extended: true }))

app.get("/", (request, response) => {
    response.json({ message: "ola mundo" })
})
*/