const db = require("../db")

//verifyIfExistsEmail
const verifyIfExistsEmail = (req, res, next) => {
    const { email } = req.body
    const response = db.findAll().some(user => {
        return user.email === email
    })
    if (response) return res.json("Usuário já existe")
    next()
}

//verifiEmail
const verifyEmail = (req, res, next) => {
    const { email } = req.body

    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const response = pattern.test(email) || false

    if(response) return next()
    
    return res.json({message: "Email inválido, não atende o padrão"})
}

module.exports = {
    verifyIfExistsEmail,
    verifyEmail
}