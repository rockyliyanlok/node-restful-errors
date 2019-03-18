'use strict'

const _ = require('lodash')
const decamelize = require('decamelize')
const HttpStatus = require('http-status-codes')

const errorHandler = () => {
  return (err, req, res, next) => {
    if (err && err.name && _.startsWith(err.name, 'Restful')) {
      const code = err.code || HttpStatus.INTERNAL_SERVER_ERROR
      const codeMessage = HttpStatus.getStatusText(code)
      return res.status(code).send({
        code,
        error: err.type || decamelize(codeMessage.replace(/\s/g, '')),
        error_description: err.message || `${HttpStatus.getStatusText(code)}.`
      })
    }
    return next(err)
  }
}

module.exports = errorHandler
