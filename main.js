const express = require("express")
const app = express()
const db = require("./db")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (request, response) => {
    response.json({ message: "ola mundo" })
})

app.get("/usuario", (request, response) => {
    response.json({ users: ["joao", "maria", "jose"] })
})

app.get("/pokemon", (request, response) => {
    response.json({ message: "charmander" })
})

app.post("/pokemon", (request, response) => {
    const body = request.body
    console.log(body)
    response.json({ message: "foi adicionado um novo pokemon" })
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
