const bcrypt = require('bcrypt')

const SALT_OR_ROUNDS_DEFAULT = 10

const hastPassword = async (password) => {
  const hash = await bcrypt.hash(password, SALT_OR_ROUNDS_DEFAULT)

  return hash
}

module.exports = hastPassword
