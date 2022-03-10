# rodando a aplicação

1 - Instalando as dependencias do projeto

```bash
cd ensinando-endpoints
npm install
```

2 - Iniciando a aplicação

```bash
npm start
```

# Documentação

No arquivo `db.js` temos uma simulação de **framework** que nos ajuda a enviar e receber informações para um banco de dados. **Vocês não precisam entender os detalhes da implementação desse arquivo**, porem devem entender o que eles nos fornece para que consigamos trabalhar.

são 5 operações que podemos utilizar apartir da importação desse arquivo e são elas:

- findAll - **nos retorna todas as ocorrencias dentro de do banco**
- findById - **nos retorna apenas uma ocorrencia no banco de acordo com o ID**
- create - **cria uma nova ocorrencia no banco de dados**
- removeById - **remove uma ocorrencia de acordo com o id**
- updateById - **atualiza uma ocorrencia de acordo com o id**


## como utilizar:

Primeiro se certifique de estar importando o arquivo `db.js` no inicio do arquivo que você pretende trabalhar.

```javascript
const db = require('./db')
```

Para receber todos os elementos existentes no banco você pode utilizar a função `findAll`

```javascript
const items = db.findAll()
console.log(items)
```

Para receber apenas um elemento de acordo com o seu `ID` você pode utilizar a função `findById`

```javascript
const id = 1
const item = db.findById(id)
console.log(item)
```

Para criar um novo elemento no banco você pode utilizar a função `create`

```javascript
const user = {
    name: "Joana",
    email: "j.ana@gmail.com",
    password: "abc.123#"
}
const createdItem = db.create(user)
console.log(createdItem)
```

Para alterar um determinado elemento por `ID` você pode utilizar a função `updateById`

```javascript
const id = 1
const user = {
    name: "Joana Maria",
    email: "jmaria@gmail.com",
    password: "123#abc"
}
const updatedItem = db.updatedById(id, user)
console.log(updatedItem)
```

Para remover apenas um elemento de acordo com o seu `ID` você pode utilizar a função `removeById`

```javascript
const id = 1
const removedItem = db.removeById(id)
console.log(removedItem)
```