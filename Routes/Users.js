const { Router } = require("express");
const routes = Router();
const db = require("../db");

routes.get("/Users/All", (req, res) => res.json(db.findAll()));

routes.get("/Users/:id", (req, res) => res.json(db.findById(req.params.id)));

routes.post("/Users/Create", (req, res) => {
  const { name, email, password } = req.body;
  try {
    const response = db.create({
      name,
      email,
      password,
    });
    return res.json(response);
  } catch {
    return res.json({ error: "Ops algo deu errado" });
  }
});

routes.put("/Users/Update/:id", (req, res) => {
  const { name, email, password } = req.body;
  const id = req.params.id;
  try {
    const response = db.updateById(id, {
      name,
      email,
      password,
    });
    return res.json(response);
  } catch {
    return res.json({ error: "Ops algo deu errado" });
  }
});

routes.delete("/Users/Delete/:id", (req, res) => {
  const id = req.params.id;
  try {
    const response = db.remove(id);
    return res.json(response);
  } catch {
    return res.json({ error: "Ops algo deu errado" });
  }
});

module.exports = routes;
