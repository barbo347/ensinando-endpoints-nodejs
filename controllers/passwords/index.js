//verifiPassword

const minSize = value => value.length >= 8;



const verifyPassword = (req, res, next) => {
    const { password } = req.body;
    if( minSize(password) ) return next()   
    return res.json({message: "A senha precisa ter o minimo de 8 caracteres"})
}

module.exports = { verifyPassword }

/^
  (?=.\d)              // deve conter ao menos um dígito
  (?=.[a-z])           // deve conter ao menos uma letra minúscula
  (?=.[A-Z])           // deve conter ao menos uma letra maiúscula
  (?=.[$&@#])         // deve conter ao menos um caractere especial
  [0-9a-zA-Z$&@#]{8,}  // deve conter ao menos 8 dos caracteres mencionados
$/
