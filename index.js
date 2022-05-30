const express = require("express")
const app = express()
const db = require("./db")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (request, response) => {
    response.json({ message: db.findAll() })
})

app.get("/usuario/:id", (request, response) => {
    return response.json({ user: db.findById(request.params.id) })
})

/*app.get("/usuario/:id", (request, response) => {
    response.json({ message: "charmander" })
})*/

app.post("/usuario", (request, response) => {
    const {name, email, password} = request.body
    
    return response.json(db.create({name, email, password}))
})

app.put("/usuario/:id", (request, response) => {
    const id = request.params
    const {name, email, password} = request.body
    
    return response.json(db.updateById(id, {name, email, password}))
})

app.listen(3030, () => {
    console.log("Esse servidor está rodando em http://localhost:3030")
})
/*

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
