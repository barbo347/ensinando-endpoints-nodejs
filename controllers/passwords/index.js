//verifiPassword

const verifyPassword = (req, res, next) => {
  const passwordCriterias = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#.])[0-9a-zA-Z$*&@#.]{8,}$/
  const { password } = req.body;
 
  if (passwordCriterias.test(password)|| password===undefined) return next()

  return res.json({
    message: `A senha precisa ter o minimo de 8 caracteres, 
    um caracter especial, ao menos um número e uma letra maiúscula e minúscula`})
}

module.exports = { verifyPassword }