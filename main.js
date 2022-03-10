const { response } = require("express")
const express = require("express")
const app = express()
const db = require("./db")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/usuario", (request, response) => {
    return response.json({ users: db.findAll() })
})

app.listen(3030, () => {
    console.log("Esse servidor está rodando em http://localhost:3030")
})




// Exercicio de CRUD
// Utilizando as 5 funções encontradas em db, crie 5 endpoints para o recurso "usuario".
// (Leia em README para saber mais sobre as funções) 
/*        O recurso usuario deve ter as seguintes propriedades com seus respectivos 
tipos: {
  name: String,         
  email: String,          
  password: String   
   } 
*/