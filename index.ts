import express from "express"
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


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

const db = require('./db')

let user = {
  name: "Joana",
  email: "j.ana@gmail.com",
  password: "abc.123#"
}
const createdItem = db.create(user)
//console.log(createdItem)

const user2 = {
  name: "Stephany",
  email: "stephany@gmail.com",
  password: "senha123"
}
const createdItem2 = db.create(user2)

const user3 = {
  name: "Ceci",
  email: "ceci@gmail.com",
  password: "senha123"
}
const createdItem3 = db.create(user3)
//const id = 1
const items = db.findAll()
console.log(items)

const updatedItem = db.updateById(1, {name: "maria", email: 'maria@gmail.com'})
const removedItem = db.remove(2)

console.log(items);
