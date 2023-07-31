const bcryp = require('bcrypt')

const verifyPassword = async () => {
  const MY_PASSWORD = 'I AM A CONTRASEÑA'
  const HASH = '$2b$10$rn.PJEDAIAB28eYWtarxYueLk/gc2tzusiqsUBIEMwCzGoxW6.3ZO'

  const isMatch = await bcryp.compare(MY_PASSWORD, HASH)

  return isMatch
}

module.exports = verifyPassword