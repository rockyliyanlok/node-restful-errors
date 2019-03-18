'use strict'

const _ = require('lodash')
const decamelize = require('decamelize')
const HttpStatus = require('http-status-codes')

class RestfulError extends Error {
  constructor (code, message) {
    super(message)
    this.code = code || HttpStatus.BAD_REQUEST
    this.codeMessage = HttpStatus.getStatusText(this.code)
    if (_.isNil(message)) {
      this.message = `${this.codeMessage}.`
    } else {
      if (Array.isArray(message)) {
        this.message = _.join(_.map(_.uniqBy(message, 'param'), 'msg'), ' ')
      } else {
        this.message = message
      }
    }
    this.name = `Restful${this.codeMessage.replace(/\s/g, '')}`
    this.type = decamelize(this.codeMessage.replace(/\s/g, ''))
    Error.captureStackTrace(this, this.constructor)
  }
}

class BadRequestError extends RestfulError {
  constructor (message) {
    super(HttpStatus.BAD_REQUEST, message)
  }
}

class UnauthorizedError extends RestfulError {
  constructor (message) {
    super(HttpStatus.UNAUTHORIZED, message)
  }
}

class ForbiddenError extends RestfulError {
  constructor (message) {
    super(HttpStatus.FORBIDDEN, message)
  }
}

class NotFoundError extends RestfulError {
  constructor (message) {
    super(HttpStatus.NOT_FOUND, message)
  }
}

class MethodNotAllowedError extends RestfulError {
  constructor (message) {
    super(HttpStatus.METHOD_NOT_ALLOWED, message)
  }
}

class ConflictError extends RestfulError {
  constructor (message) {
    super(HttpStatus.CONFLICT, message)
  }
}

class GoneError extends RestfulError {
  constructor (message) {
    super(HttpStatus.GONE, message)
  }
}

class RequestEntityTooLargeError extends RestfulError {
  constructor (message) {
    super(HttpStatus.REQUEST_TOO_LONG, message)
  }
}

class UnsupportedMediaTypeError extends RestfulError {
  constructor (message) {
    super(HttpStatus.UNSUPPORTED_MEDIA_TYPE, message)
  }
}

class UnprocessableEntityError extends RestfulError {
  constructor (message) {
    super(HttpStatus.UNPROCESSABLE_ENTITY, message)
  }
}

class TooManyRequestsError extends RestfulError {
  constructor (message) {
    super(HttpStatus.TOO_MANY_REQUESTS, message)
  }
}

class InternalServerError extends RestfulError {
  constructor (message) {
    super(HttpStatus.INTERNAL_SERVER_ERROR, message)
  }
}

class ServiceUnavailableError extends RestfulError {
  constructor (message) {
    super(HttpStatus.SERVICE_UNAVAILABLE, message)
  }
}

module.exports = {
  BadRequestError, 
  UnauthorizedError, 
  ForbiddenError, 
  NotFoundError, 
  MethodNotAllowedError, 
  ConflictError, 
  GoneError, 
  RequestEntityTooLargeError, 
  UnsupportedMediaTypeError, 
  UnprocessableEntityError, 
  TooManyRequestsError, 
  InternalServerError, 
  ServiceUnavailableError
}
