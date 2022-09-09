const oneDay = 24 * 60 * 60 * 1000

function getTimestamp(val) {
  if (val) {
    return new Date(val).getTime()
  }
  return new Date().getTime()
}

module.exports = {
  oneDay,
  getTimestamp,
}
