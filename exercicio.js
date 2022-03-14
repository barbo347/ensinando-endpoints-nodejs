const dbs = require("./db")
const users = {
    name: "pedro",
    email: "pedro@yahoo.com",
    password: "MonkeFlip"
}
const criar = dbs.create(users)
console.log(criar)