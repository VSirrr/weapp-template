/**
 * 对明文手机号脱敏
 * @param {string} val 明文手机号
 * @returns {string} 脱敏手机号
 */
function formatPhone(val) {
  if (typeof val !== 'string' || val.length < 11) {
    return val
  }
  return val.replace(/^(\d{3})\d+(\d{2})$/, '$1******$2')
}

/**
 * 对用户名脱敏
 * @param {string} val 明文用户名称
 * @returns {string} 脱敏用户名称
 */
function formatUserName(val) {
  if (typeof val !== 'string') {
    return val
  }
  const length = val.length
  if (length < 2) {
    return val
  }
  let star = '*'
  const prefix = val[0]
  const suffix = val[length - 1]
  if (length === 2) {
    return star + suffix
  }
  let l = length - 3
  while (l--) {
    star += '*'
  }
  return prefix + star + suffix
}

/**
 * 对身份证号码脱敏
 * @param {string} val 明文份证号码
 * @returns {string} 脱敏份证号码
 */
function formatIDNumber(val) {
  if (typeof val !== 'string' || val.length < 18) {
    return val
  }
  return val[0] + '***************' + val.slice(-1)
}

/**
 * 为小于 10 的数字补零
 * @param {number|stirng} val 数字或数字字符串
 */
function padZero(val) {
  if (typeof val === 'number') {
    val = val.toString()
  }
  return val.padStart(2, '0')
}

/**
 * 日期时间格式化
 * @param {number|string} time 时间戳或合法时间字符串
 * @returns {string} 格式化之后的日期格式字符串
 */
function formatTime(time, format = 'YYYY-MM-DD hh:mm:ss') {
  if (!time) {
    return
  }

  let date
  if (typeof time === 'number') {
    date = new Date(time)
  } else if (typeof time === 'string') {
    date = new Date(time.replace(/-/g, '/'))
  }

  return format.replace(/YYYY|MM|DD|hh|mm|ss/g, function (reg) {
    switch (reg) {
      case 'YYYY':
        return padZero(date.getFullYear())
      case 'MM':
        return padZero(date.getMonth() + 1)
      case 'DD':
        return padZero(date.getDate())
      case 'mm':
        return padZero(date.getMinutes())
      case 'hh':
        return padZero(date.getHours())
      case 'ss':
        return padZero(date.getSeconds())
    }
  })
}

module.exports = {
  formatTime,
  formatPhone,
  formatUserName,
  formatIDNumber,
}
