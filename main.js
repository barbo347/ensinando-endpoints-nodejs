const express = require("express")
const app = express()
const db = require("./db")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/getUsers", (req, res) => res.json(db.findAll()))
app.get("/getById/:id", (req, res) => res.json(db.findById(req.params.id)))

app.post("/createdUsers", (req, res)=>{
  const {name, email, password} = req.body
  try{
    db.create({
      name,
      email,
      password
    })
   return res.json({message: "Usuario cadastrado com sucesso"})
  }catch{
    return res.json({error: "Ops algo deu errado"})
  }
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
} )