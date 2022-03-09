const db = require('./db')
const items = db.findAll()
console.log(items)