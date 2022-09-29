const express = require("express");
const app = express();
const db = require("./db");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.get("/users", (req, res) => res.send(db.findAll()));

app.get("/user", (req, res) => {
  const { id } = req.body;

  return res.send(db.findById(id));
});

app.post("/user", (req, res) => {
  const newUser = req.body;
  db.create(newUser);

  return res.send(db.findAll());
});

app.put("/user", (req, res) => {
  const { id, user } = req.body;
  db.updateById(id, user);

  return res.send(db.findAll());
});

app.delete("/users", (req, res) => {
  const { id } = req.body;

  return res.send(db.remove(id));
});

app.listen(3030, () => {
  console.log("Esse servidor está rodando em http://localhost:3030");
});
