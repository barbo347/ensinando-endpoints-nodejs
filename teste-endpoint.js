const importandoDB = require("./db")
const express = require("express")
const { request } = require("express")
const { response } = require("express")

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", (request, response) => response.json({user: importandoDB.findAll()}))

app.get("/usuario/:id", (request, response) => {
    const id = request.params.id
    return response.json({user: importandoDB.findById(id)})
})

app.post("/usuario", (request, response) => {
    const {name, email, password} = request.body
    return response.json(importandoDB.create({name, email, password}))
})

app.put("/usuario/:id", (request, response) => {
    const {name, email, password} = request.body
    const id = request.params.id
    return response.json(importandoDB.updateById(id, {name, email, password}))
})

app.delete("/usuario/:id", (request, response) => {
    const id = request.params.id
    return response.json({message: importandoDB.remove(id)})
})

app.listen(3000, () => console.log("Esse servidor está rodando em http://localhost:3000/"))
