const bcryp = require('bcrypt')

const verifyPassword = async (password) => {
  const HASH = '$2b$10$rn.PJEDAIAB28eYWtarxYueLk/gc2tzusiqsUBIEMwCzGoxW6.3ZO'

  const isMatch = await bcryp.compare(password, HASH)

  return isMatch
}

module.exports = verifyPassword