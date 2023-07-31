const bcryp = require('bcrypt')

const verifyPassword = async (password, hash) => {
  const isMatch = await bcryp.compare(password, hash)

  return isMatch
}

module.exports = verifyPassword