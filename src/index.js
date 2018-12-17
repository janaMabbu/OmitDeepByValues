const omit = require("lodash/omit")
const _ = require('lodash')

const isObject = (obj)=> {
  return Object.prototype.toString.call(obj) === "[object Object]"
}

const omitDeep = (obj, v) => {
  return _.transform(obj, function (result, value, key) {
    if (_.isObject(value)) {
      value = omitDeep(value, v)
    }
    if (!(value === v)) {
      _.isArray(obj) ? result.push(value) : result[key] = value
    }
  })
}

const omitDeepByValues = (body, array) => {
  if (typeof body === "undefined") {
      return body
    }

    if (!Array.isArray(body) && !isObject(body)) {
      return body
    }

    if (array.leghth === 0) {
      return body
    }

    let result = body
    array.map((v)=> {
      result = omitDeep(result, v)
    })

    return result
}

module.exports = omitDeepByValues 