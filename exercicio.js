const dbs = require("./db")
const user = {
    name: "Joana",
    email: "j.ana@gmail.com",
    password: "abc.123#"
}
const createdItem = dbs.create(user)
console.log(createdItem)