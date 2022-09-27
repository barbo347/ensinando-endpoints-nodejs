const express = require("express");
const app = express();
const routes = require("./Routes/Users");


//CONFIG
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(3030, () => {
  console.log("Esse servidor está rodando em http://localhost:3030");
});


