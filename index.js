//const db = require("./db")
import {db} from './db' 

const items = db.findAll()
console.log(items)