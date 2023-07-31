const bcrypt = require('bcrypt')

const MY_PASSWORD_DEFAULT = 'I AM A CONTRASEÑA'
const SALT_OR_ROUNDS_DEFAULT = 10

const hastPassword = async () => {
  const hash = await bcrypt.hash(MY_PASSWORD_DEFAULT, SALT_OR_ROUNDS_DEFAULT)

  return hash
}

module.exports = hastPassword
