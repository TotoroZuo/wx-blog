const formatTime = date => {
  const year   = date.getFullYear()
  const month  = date.getMonth() + 1
  const day    = date.getDate()
  const hour   = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
// 小程序接口promise化
const promisify = original => {
  return function (opt) {
    return new Promise((resolve, reject) => {
      opt = Object.assign({
        success: resolve,
        fail: reject
      }, opt)
      original(opt)
    })
  }
}

module.exports = {
  formatTime: formatTime,
  promisify
}
