const { response } = require("express")
const express = require("express")
const app = express()
const db = require("./db")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(3030, () => {
    console.log("Esse servidor está rodando em http://localhost:3030")
})
